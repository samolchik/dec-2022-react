import {axiosServiceJson} from "./axios.service";
import {urls} from "../configs/urls";

const commentService = {
    create:(comment)=> axiosServiceJson.post(urls.comments, comment),
};

export {
    commentService
};