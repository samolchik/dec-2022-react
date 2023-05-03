import axios from "axios";

import {baseURL} from "../constans/urls";

const axiosService = axios.create({baseURL});

export {
    axiosService
};
