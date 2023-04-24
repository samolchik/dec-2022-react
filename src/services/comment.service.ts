import {IRes} from "../types/axiosRes.type";
import {IComment} from "../interfaces/comment.interface";
import {axiosService} from "./axios.service";
import {urls} from "../constants/urls";

const commentService = {
    getAll:():IRes<IComment[]> => axiosService.get(urls.comments)
};

export {
    commentService
};