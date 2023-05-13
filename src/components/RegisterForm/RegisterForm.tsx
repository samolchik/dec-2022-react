import {joiResolver} from "@hookform/resolvers/joi";
import {SubmitHandler, useForm} from "react-hook-form";

import {authActions} from "../../redux";
import {authValidator} from "../../validators";
import {IAuth} from "../../interfaces";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {useNavigate} from "react-router-dom";

const RegisterForm = () => {
    const {handleSubmit, register, reset, formState: {isValid, errors}} = useForm<IAuth>({
        mode: 'all', resolver:
            joiResolver(authValidator)
    });

    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const {error} = useAppSelector(state => state.auth);

    const registerUser: SubmitHandler<IAuth> = async (user) => {
      const {meta: {requestStatus}} = await dispatch(authActions.register(user));
        if (requestStatus === 'fulfilled') {
            navigate('/login')
        }
    };

    return (
        <form className={'form'} onSubmit={handleSubmit(registerUser)}>
            <input type={'text'} placeholder={'username'} {...register('username')}/>
            <input type={'text'} placeholder={'password'} {...register('password')}/>
            <button disabled={!isValid}>Register</button>
            {Object.keys(errors).length>0&&<div>{Object.values(errors)[0].message}</div>}
            {error&&<div>{error.username[0]}</div>}
        </form>
    );
};

export {RegisterForm};