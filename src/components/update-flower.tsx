import React from 'react';
import {Form, Card, Button } from 'react-bootstrap';
import FlowerService from '../services/FlowerService';
import { useForm } from 'react-hook-form';
import { useHistory, useLocation } from 'react-router-dom';

interface FormData {
    name: string;
    origin: string;
}

const UpdateFlower = () => {
    const history = useHistory();
    const location = useLocation<{state: string}>();
    
    const {register, handleSubmit, setValue} = useForm<FormData>();

    React.useEffect(() => {
        async function fetchData() {
            const res = await FlowerService.getFlowerById(location.state);
            let f = res.data
            setValue('name', f.name);
            setValue('origin', f.origin);
        }
        fetchData();
    }, [location.state, setValue]);
    
    const submitForm = (data:any) => {
        FlowerService.updateFlower(data, location.state).then(res => {
            history.goBack();
        });
    }    

    return(
        <>        
            <br/>
            <Card className = "col-md-6 offset-md-3 offset-md-3">     
                <br/>                           
                <h2 className="text-center">Update flower form</h2>      
                <Card.Body>
                    <Form onSubmit={handleSubmit(submitForm)}>
                        <Form.Group>  
                            <label> Flower Name: </label>                            
                            <Form.Control
                                required                     
                                {...register('name')}/>                               
                        </Form.Group>
                        <br />
                        <Form.Group>
                            <label> Flower Origin: </label>
                            <Form.Control
                                required
                                {...register("origin")}/>
                            
                        </Form.Group>                        
                        <br />                        
                        <div className="text-center">
                            <Button className="btn btn-primary" type="submit">Save Flower</Button>
                        </div>                        
                    </Form>
                </Card.Body>
            </Card>            
        </>            
    );    
}

export default UpdateFlower;