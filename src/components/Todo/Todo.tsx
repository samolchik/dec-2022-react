import React, {FC} from 'react';

import {ITodo} from "../../interfaces/todo.interface";

interface IProps {
    todo: ITodo;
}

const Todo: FC<IProps> = ({todo}) => {
    const {id, title, completed} = todo;

    return (
        <div className={'todo'}>
            <i>id: {id}</i>
            <h4>{title}</h4>
            <p>completed: {completed.toString()}</p>
        </div>
    );
}

export default Todo;