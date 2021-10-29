import React from 'react';
import {Form, Card, Button } from 'react-bootstrap';
import FlowerService from '../services/FlowerService';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';

const AddFlower = () => {
    
    const history = useHistory();

    const {register, handleSubmit} = useForm();
    
    const submitForm = async(data:any) => {
        await FlowerService.addFlower(data);
        history.goBack();        
    }

    return(
        <>        
            <br/>
            <Card className = "col-md-6 offset-md-3 offset-md-3">     
                <br/>                           
                <h2 className="text-center">Add flower form</h2>      
                <Card.Body>
                    <Form onSubmit={handleSubmit(submitForm)}>
                        <Form.Group>  
                            <label> Flower Name: </label>                            
                            <Form.Control
                                required
                                placeholder="Flower Name" 
                                {...register("name")}/>                               
                        </Form.Group>
                        <br />
                        <Form.Group>
                            <label> Flower Origin: </label>
                            <Form.Control
                                required
                                placeholder="Flower Origin" 
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

export default AddFlower;