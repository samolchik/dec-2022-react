import axios from "axios";

import {carsAPI} from "../constants";

const carsAxiosService = axios.create({baseURL: carsAPI});

export {
    carsAxiosService
};
