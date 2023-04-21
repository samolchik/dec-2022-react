import React from 'react';

const Album = ({album}) => {
    const {id, title} = album;
    return (
        <li>
            <p>id: {id}</p>
            <p>title: {title}</p>
        </li>
    );
};

export default Album;