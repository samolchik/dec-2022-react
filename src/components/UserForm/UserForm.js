import React from 'react';
import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";
import {joiResolver} from "@hookform/resolvers/joi";

import {userActions} from "../../redux";
import {userValidator} from "../../validators";
import {userService} from "../../services";

const UserForm = () => {
    const {
        register,
        reset,
        handleSubmit,
        formState: {isValid, errors}
    } = useForm({mode: 'all', resolver: joiResolver(userValidator)});

    const dispatch = useDispatch();

    const saveUser = async (user) => {

        const {data} = await userService.create(user);
        dispatch(userActions.createUser(data));
        reset();
    }

    return (
        <form className={'user-form'} onSubmit={handleSubmit(saveUser)}>
            <h3>Add new user</h3>
            <input type={'text'} placeholder={'name'} {...register('name')}/>
            {errors.name && <span className={'errors'}>{errors.name.message}</span>}
            <input type={'text'} placeholder={'username'} {...register('username')}/>
            {errors.username && <span className={'errors'}>{errors.username.message}</span>}
            <button disabled={!isValid}>Save</button>
        </form>
    );
};

export {UserForm};