import axios from "axios";

import {carsAPI, jsonAPI} from "../constants";

const carsAxiosService = axios.create({baseURL: carsAPI});
const jsonAxiosService = axios.create({baseURL: jsonAPI});

export {
    carsAxiosService,
    jsonAxiosService
};
