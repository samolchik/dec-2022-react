import {axiosServiceUser, IRes} from "./axios.service";
import {urlsJPH} from "../configs/urls";
import {IUser} from "../interfaces/user.interface";

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