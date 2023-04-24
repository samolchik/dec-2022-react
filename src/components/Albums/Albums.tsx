import React, {FC, useEffect, useState} from 'react';

import Album from "../Album/Album";
import {IAlbum} from "../../interfaces/album.interface";
import {albumsService} from "../../services/albums.service";
import './albums.css';

const Albums: FC = () => {
    const [albums, setAlbums] = useState<IAlbum[]>([]);

    useEffect(()=> {
        albumsService.getAll().then(value => value.data).then(value => setAlbums(value))
    },[])

    return (
        <div className={'albums'}>
            {
                albums.map(album => (<Album key={album.id} album={album}/>))
            }
        </div>
    );
};

export default Albums;