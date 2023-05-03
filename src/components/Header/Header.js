import React from 'react';
import {NavLink, useNavigate} from "react-router-dom";

import css from './Header.module.css';

const Header = () => {
    const navigate = useNavigate();
    return (
        <div className={css.Header}>
            <NavLink to={'users'}>Users</NavLink>
            <NavLink to={'comments'}>Comments</NavLink>
            <NavLink to={'cars'}>Cars</NavLink>
        </div>
    );
};

export {Header};