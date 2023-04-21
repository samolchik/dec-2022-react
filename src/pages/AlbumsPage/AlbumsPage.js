import React, {useEffect, useState} from 'react';

import {albumService} from "../../services/album.service";
import Albums from "../../components/Albums/Albums";

const AlbumsPage = () => {

    return (
        <div>
            <Albums/>
        </div>
    );
};

export default AlbumsPage;