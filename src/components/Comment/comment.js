import React from 'react';

const Comment = ({comment}) => {
    const {id, name, body} = comment;

    return (
        <div className={'comment'}>
            <div>id: {id}</div>
            <div>name: {name}</div>
            <div>body: {body}</div>
        </div>
    );
};

export {Comment};