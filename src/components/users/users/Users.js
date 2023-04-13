import React, {useEffect, useState} from 'react';
import User from "../user/User";
import {getUsers} from "../../../servises/servises";
import '../users.css'

const Users = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        getUsers().then(users => setUsers([...users]))
    }, [])

    return (
        <ul className='users'>
            {
                users.map(user => (<User key={user.id} user={user}/>))
            }
        </ul>
    );
};

export default Users;