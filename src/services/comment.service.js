import {axiosServiceJson} from "./axios.service";
import {urls} from "../configs/urls";

const commentService = {
    getAll:()=> axiosServiceJson.get(urls.comments),
    create:(comment)=> axiosServiceJson.post(urls.comments, comment),
    getById:(id)=> axiosServiceJson.get(`${urls.comments}/${id}`),
    updateById:(id, comment)=> axiosServiceJson.put(`${urls.comments}/${id}`, comment),
    delete:(id)=> axiosServiceJson.delete(`${urls.comments}/${id}`)
};

export {
    commentService
};