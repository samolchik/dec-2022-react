import axios, {AxiosResponse} from "axios";

import {baseURLCars, baseURLJPH} from "../configs/urls";

const axiosServiceCar = axios.create({baseURL: baseURLCars});

const axiosServiceUser = axios.create({baseURL: baseURLJPH});


export {
    axiosServiceCar,
    axiosServiceUser
};

