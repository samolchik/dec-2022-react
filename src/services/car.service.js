import {axiosService} from "./axios.service";
import {urlsCar} from "../constans/urls";

const carService = {
    getAll: () => axiosService.get(urlsCar.cars),
    getById: (id) => axiosService.get(`${urlsCar.cars}/${id}`),
    updateById: (id, car) => axiosService.put(`${urlsCar.cars}/${id}`, car),
    create: (car)=> axiosService.post(urlsCar.cars, car),
    delete: (id) => axiosService.delete(`${urlsCar.cars}/${id}`)
};

export {
    carService
};