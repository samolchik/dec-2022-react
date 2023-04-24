import {axiosService} from "./axios.service";
import {IAlbum} from "../interfaces/album.interface";
import {IRes} from "../types/axiosRes.type";
import {urls} from "../constants/urls";

const albumsService = {
    getAll:(): IRes<IAlbum[]> => axiosService.get(urls.albums)
};

export {
    albumsService
};