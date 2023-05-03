import {jsonAxiosService} from "./axios.service";
import {urls} from "../constants";

const commentService = {
    getAll: () => jsonAxiosService.get(urls.comments),
    create: (comment) => jsonAxiosService.post(urls.comments, comment)
};

export {
    commentService
};