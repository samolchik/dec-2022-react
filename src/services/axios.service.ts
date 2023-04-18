import axios, {AxiosResponse} from "axios";
import {baseURLCars, baseURLJPH} from "../configs/urls";

type IRes<T> = Promise<AxiosResponse<T>>;

const axiosServiceCar = axios.create({baseURL: baseURLCars});

const axiosServiceUser = axios.create({baseURL: baseURLJPH});


export {
    axiosServiceCar,
    axiosServiceUser
};

export type {
    IRes
};

