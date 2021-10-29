import Axios from 'axios';

const API_URL = "http://localhost:8080/flowers";

class service {
    getFlowers() {
        return Axios.get(API_URL);
    }

    addFlower(flower:any){
        return Axios.post(API_URL, flower);
    }

    getFlowerById(flowerId:any){
        return Axios.get(API_URL + '/' + flowerId);
    }

    updateFlower(flower:any, flowerId:any){
        return Axios.put(API_URL + '/' + flowerId, flower);
    }

    deleteFlower(flowerId:any){
        return Axios.delete(API_URL + '/' + flowerId);
    }
}   

export default new service();