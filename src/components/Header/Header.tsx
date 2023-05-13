import React, {useEffect} from 'react';
import {NavLink} from "react-router-dom";

import css from './Header.module.css'
import {useAppDispatch, useAppSelector} from "../../hooks";
import {authService} from "../../services";
import {authActions} from "../../redux";

const Header = () => {
    const {me} = useAppSelector(state => state.auth);
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (!me && authService.getAccessTokens()){
            dispatch(authActions.me())
        }
    }, [me, dispatch]);


    return (
        <div className={css.Header}>
            <div>Logo</div>
            {
                me ?
                    <div>
                        <div>{me.username}</div>
                        <button>Logout</button>
                    </div>
                    :
                    <div>
                        <NavLink to={'register'}>Register</NavLink>
                        <NavLink to={'login'}>Login</NavLink>
                    </div>
            }
        </div>
    );
};

export {Header};