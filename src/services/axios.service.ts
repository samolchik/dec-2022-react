import axios, {AxiosResponse} from "axios";
import {baseURLCars} from "../configs/urls";

type IRes<T> = Promise<AxiosResponse<T>>;

const axiosServiceCar = axios.create({baseURL: baseURLCars});

export {
    axiosServiceCar
};

export type {
    IRes
};

