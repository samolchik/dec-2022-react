import React from 'react';

const User = ({user}) => {
    const {id, name, username}=user;
    return (
        <div className={'user'}>
            <p>id: {id}</p>
            <h4>name: {name}</h4>
            <p>username: {username}</p>
        </div>
    );
};

export {User};