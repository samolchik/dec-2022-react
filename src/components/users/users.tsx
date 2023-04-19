import React, {useEffect, useState} from 'react';

import {userService} from "../../services/user.service";
import User from "./user";
import {IUser} from "../../interfaces/user.interface";
import UserForm from "./UserForm";

const Users = () => {
    const [users, setUsers] = useState<IUser[]>([]);

    useEffect(()=>{
        userService.getAll().then(value => value.data).then(value => setUsers(value))
    }, []);

    return (
        <div className={'users-page'}>
            <UserForm setUsers={setUsers}/>
            <ul className={'users'}>
                {users.map(user => (<User key={user.id} user={user}/>))}
            </ul>
        </div>
    );
};

export default Users;