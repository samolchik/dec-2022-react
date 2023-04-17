import axios from "axios";
import {baseURLCars, baseURLJson} from "../configs/urls";

const axiosServiceJson = axios.create({baseURL: baseURLJson});

const axiosServiceCars = axios.create({baseURL: baseURLCars});

export {
    axiosServiceJson,
    axiosServiceCars
};