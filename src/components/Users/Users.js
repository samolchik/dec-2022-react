import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {User} from "../User";
import {UserForm} from "../UserForm";
import {userService} from "../../services";
import {userActions} from "../../redux";
import './users.css';

const Users = () => {
    const {users} = useSelector(state => state.users);
    const dispatch = useDispatch();

    console.log(users);

    useEffect(() => {
        userService.getAll().then(value => value.data).then(value => dispatch(userActions.setUsers(value)))
    }, [dispatch])

    return (
        <div className={'users-page'}>
            <UserForm/>
            <hr/>
            <div className={'users'}>
                {
                    users.map(user => <User key={user.id} user={user}/>)
                }
            </div>

        </div>
    );
};

export {Users};