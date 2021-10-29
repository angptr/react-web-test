import React, { useState } from 'react';
import {Form, Card, Button } from 'react-bootstrap';
import FlowerService from '../services/FlowerService';
import { useHistory } from 'react-router-dom';

const AddFlower2 = () => {
    
    const history = useHistory();

    const [formData, setFormData] = useState({
        name: "",
        origin: ""
    })
    
    const submitForm = async () => {        
        await FlowerService.addFlower(formData);
        history.goBack();
    }

    return(
        <>        
            <br/>
            <Card className = "col-md-6 offset-md-3 offset-md-3">     
                <br/>                           
                <h2 className="text-center">Add flower form</h2>      
                <Card.Body>
                    <Form onSubmit={(submitForm)}>
                        <Form.Group>  
                            <label> Flower Name: </label>                            
                            <Form.Control
                                required
                                placeholder="Flower Name" 
                                onChange={e => setFormData({...formData, name: e.target.value})}/>
                        </Form.Group>
                        <br />
                        <Form.Group>
                            <label> Flower Origin: </label>
                            <Form.Control
                                required
                                placeholder="Flower Origin" 
                                onChange={e => setFormData({...formData, origin: e.target.value})}/>
                            
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

export default AddFlower2;