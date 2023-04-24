import {axiosService} from "./axios.service";
import {IPost} from "../interfaces/post.interface";
import {IRes} from "../types/axiosRes.type";
import {urls} from "../constants/urls";

const postService = {
    getById:(id: string):IRes<IPost> => axiosService.get(urls.posts.byId(id))
}

export {
    postService
};