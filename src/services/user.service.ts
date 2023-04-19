import {axiosServiceUser} from "./axios.service";
import {IUser} from "../interfaces/user.interface";
import {IRes} from "../types/res.type";
import {urlsJPH} from "../configs/urls";

const userService = {
    getAll: (): IRes<IUser[]> => axiosServiceUser.get(urlsJPH.users),
    create: (user: IUser): IRes<IUser> => axiosServiceUser.post(urlsJPH.users, user),
    getById: (id: number): IRes<IUser> => axiosServiceUser.get(`${urlsJPH.users}/${id}`),
    updateById: (id: number, user: IUser): IRes<IUser> => axiosServiceUser.put(`${urlsJPH.users}/${id}`, user),
    delete: (id: number): IRes<void> => axiosServiceUser.delete(`${urlsJPH.users}/${id}`)
};

export {
    userService
};