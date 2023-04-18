import React from 'react';
import "./users.css";
import {SubmitHandler, useForm} from "react-hook-form";
import {IUser} from "../../interfaces/user.interface";
import {userService} from "../../services/user.service";
import {joiResolver} from "@hookform/resolvers/joi";
import {userValidator} from "../../validators/user.validator";


const UserForm = () => {

    const {
        register,
    reset,
    handleSubmit,
    formState:{errors, isValid}
    } = useForm<IUser>({mode: "all", resolver: joiResolver(userValidator)});


    const saveUser: SubmitHandler<IUser> = async (user) => {
       const {data}= await userService.create(user);
       reset();

        console.log(data);
    };

    return (
        <form onSubmit={handleSubmit(saveUser)} className={'user-form'}>
            <h2>ADD USER</h2>
            <input type={'text'} placeholder={'name'} {...register('name')}/>
            {errors.name && <span className={'errors'}>{errors.name.message}</span>}

            <input type={'text'} placeholder={'username'} {...register('username')}/>
            {errors.username && <span className={'errors'}>{errors.username.message}</span>}

            <input type={'email'} placeholder={'email'} {...register('email')}/>
            {errors.email && <span className={'errors'}>{errors.email.message}</span>}

            <input type={'tel'} placeholder={'phone'} {...register('phone')}/>
            {errors.phone && <span className={'errors'}>{errors.phone.message}</span>}

            <input type={'text'} placeholder={'city'} {...register('city')}/>
            {errors.city && <span className={'errors'}>{errors.city.message}</span>}

            <button className={'user-btn'} disabled={!isValid}>CREATE</button>
        </form>
    );
};

export default UserForm;