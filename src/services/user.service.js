import {axiosServiceJson} from "./axios.service";
import {urls} from "../configs/urls";

const userService = {
    getAll:()=> axiosServiceJson.get(urls.users),
    create:(user)=> axiosServiceJson.post(urls.users, user),
    getById:(id)=> axiosServiceJson.get(`${urls.users}/${id}`),
    updateById:(id, user)=> axiosServiceJson.put(`${urls.users}/${id}`, user),
    delete:(id)=> axiosServiceJson.delete(`${urls.users}/${id}`)
};

export {
    userService
};