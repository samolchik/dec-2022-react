import {axiosServiceCars} from "./axios.service";
import {urlsCars} from "../configs/urls";

const carService = {
    getAll:()=> axiosServiceCars.get(urlsCars.cars),
    create:(car)=> axiosServiceCars.post(urlsCars.cars, car),
    getById:(id)=> axiosServiceCars.get(`${urlsCars.cars}/${id}`),
    updateById:(id, car)=> axiosServiceCars.put(`${urlsCars.cars}/${id}`, car),
    delete:(id)=> axiosServiceCars.delete(`${urlsCars.cars}/${id}`)
};

export {
    carService
};