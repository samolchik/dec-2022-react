import React, {FC} from 'react';

import {IAlbum} from "../../interfaces/album.interface";

interface IProps {
    album: IAlbum
}
const Album: FC<IProps> = ({album}) => {
    const {id, title} = album;

    return (
        <div className={'album'}>
            <p>id: {id}</p>
            <h5>title:{title}</h5>
        </div>
    );
};

export default Album;