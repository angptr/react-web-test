import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import {Table, Button} from 'react-bootstrap';
import FlowerService from '../services/FlowerService';

interface Flower {
    id: number;
    name: string;
    origin: string;
}

const ListFlower = () =>  {
    const history = useHistory();
    const [flowers, setFlowers] = useState<Flower[]>([]);
    const [count, setCount] = useState(0);

    React.useEffect(() => {
        async function fetchData() {
            const res = await FlowerService.getFlowers();            
            setFlowers(res.data);
            setCount(res.data.length);
            console.log(count);
        }
        fetchData();      
    }, [count]);

    const handleAdd = () => {
        history.push('/flower/add');
    }

    const handleAdd2 = () => {
        history.push('/flower/add2');
    }

    const handleUpdate = (id:any) => {
        history.push({
            pathname: '/flower/update/'+id,
            state: id
        });
        console.log(id);
    }

    const deleteFlower = async(id:any) => {
        await FlowerService.deleteFlower(id);
        setCount(count-1);        
    }

    return (
        <div className="container my-2 text-center">
            <h2>List of Flowers</h2>
            <Table className="table table-striped table-responsive-md">
                <thead>
                    <tr>
                        <th>Flower Name</th>
                        <th>Flower Origin</th>
                        <th>Options</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        flowers.map(f =>
                            <tr>
                                <td>{f.name}</td>
                                <td>{f.origin}</td>
                                {/* <td hidden>{flower.id}</td> */}
                            <td>
                                <Button 
                                    className="btn btn-primary m-1"
                                    type="button"
                                    onClick={() => handleUpdate(f.id)}>
                                        Update
                                </Button>
                                <Button 
                                    className="btn btn-danger m-1"
                                    onClick={()=>{
                                        const confirmBox = window.confirm("Are you sure you want to delete?");
                                        if(confirmBox){
                                            deleteFlower(f.id)
                                        }
                                    }}>
                                    Delete
                                </Button>
                            </td>
                        </tr>
                    )}
                </tbody>
            </Table>
            <Button 
                className="btn btn-primary"
                type="button"
                onClick={handleAdd}>
                Click here to add new flower
            </Button>
            <br /><br />
            <Button 
                className="btn btn-primary"
                type="button"
                onClick={handleAdd2}>
                Click here to add new flower (w/o hook)
            </Button>
        </div>
    );
}

export default ListFlower;
