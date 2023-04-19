import React, {FC} from 'react';

import {IUser} from "../../interfaces/user.interface";

interface IProps {
    user: IUser;
}

const User: FC<IProps> = ({user}) => {

    return (
        <li className={'user'}>
            <h4>{user.id}: {user.name} {user.username}</h4>
            <h4>{user.username}</h4>
            <p>{user.email}</p>
        </li>
    );
};

export default User;