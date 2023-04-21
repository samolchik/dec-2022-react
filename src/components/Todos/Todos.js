import React, {useEffect, useState} from 'react';

import {todoService} from "../../services/todo.service";
import Todo from "../Todo/Todo";

const Todos = () => {

    const [todos, setTodos] = useState([]);

    useEffect(() => {
        todoService.getAll().then(value => value.data).then(value => setTodos(value))
    }, []);


    return (
        <ul>
            {todos.map(todo => (<Todo key={todo.id} todo={todo}/>))}

        </ul>
    );
};

export default Todos;