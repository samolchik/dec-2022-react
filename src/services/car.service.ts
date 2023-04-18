import {axiosServiceCar, IRes} from "./axios.service";
import {urlsCars} from "../configs/urls";
import {ICar} from "../interfaces/car.interface";

const carService = {
    getAll: (): IRes<ICar[]> => axiosServiceCar.get(urlsCars.cars),
    create: (car: ICar): IRes<ICar> => axiosServiceCar.post(urlsCars.cars, car),
    getById: (id: number): IRes<ICar> => axiosServiceCar.get(`${urlsCars.cars}/${id}`),
    updateById: (id: number, car: ICar): IRes<ICar> => axiosServiceCar.put(`${urlsCars.cars}/${id}`, car),
    delete: (id: number): IRes<void> => axiosServiceCar.delete(`${urlsCars.cars}/${id}`)
};

export {
    carService
};