import {axiosService} from "./axios.service";
import {ITodo} from "../interfaces/todo.interface";
import {IRes} from "../types/axiosRes.type";
import {urls} from "../constants/urls";

const todoService = {
    getAll: (): IRes<ITodo[]> => axiosService.get(urls.todos)
};

export {
    todoService
};

