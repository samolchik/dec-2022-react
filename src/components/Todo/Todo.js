import React from 'react';

const Todo = ({todo}) => {

    const {id, userId, title, completed} = todo;

    return (
        <li>
            <p>id: {id}; userId: {userId}; title: {title}; completed: {completed.toString()} </p>
        </li>
    );
};

export default Todo;