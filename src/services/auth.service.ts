import {axiosService} from "./axios.service";
import {IAuth, ITokens, IUser} from "../interfaces";
import {IRes} from "../types";
import {urls} from "../constants";
import {AxiosResponse} from "axios";

class AuthService {

    private readonly accessKey = 'access';
    private readonly refreshKey = 'refresh';

    register(user: IAuth): IRes<IUser> {
        return axiosService.post(urls.auth.register, user)
    }

    async login(user: IAuth): Promise<IUser> {
        const {data}: AxiosResponse<ITokens> = await axiosService.post(urls.auth.login, user);
        this.setTokens(data);
        const {data: me} = await this.me();
        return me;
    }

    me(): IRes<IUser> {
        return axiosService.get(urls.auth.me);
    }

    async refresh(): Promise<void> {
        const refreshTokens = this.getRefreshTokens();
        if (!refreshTokens){
            throw new Error("Refresh token isn't exists")
        }
        const {data}:AxiosResponse<ITokens> = await axiosService.post(urls.auth.refresh, {refresh: refreshTokens});
        this.setTokens(data);
    }

    private setTokens({access, refresh}: ITokens): void {
        localStorage.setItem(this.accessKey, access);
        localStorage.setItem(this.refreshKey, refresh);
    }

    getAccessTokens(): string {
        return localStorage.getItem(this.accessKey);
    }

    private getRefreshTokens(): string {
        return localStorage.getItem(this.refreshKey)
    }

    deleteTokens(): void {
        localStorage.removeItem(this.accessKey);
        localStorage.removeItem(this.refreshKey);
    }
}

export const authService = new AuthService();