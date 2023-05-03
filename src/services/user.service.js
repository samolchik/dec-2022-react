import {jsonAxiosService} from "./axios.service";
import {urls} from "../constants";

const userService = {
    getAll: () => jsonAxiosService.get(urls.users),
    create: (user) => jsonAxiosService.post(urls.users, user)
};

export {
    userService
};