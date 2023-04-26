import React from 'react';
import {useNavigate} from "react-router-dom";

import './header.css'

const Header = () => {

    const navigate = useNavigate();
    return (
        <div className={'header'}>
            <button onClick={()=>navigate('posts')}>Posts</button>
            <button onClick={()=>navigate('comments')}>Comments</button>
            <button onClick={()=>navigate('animals')}>Animals</button>

        </div>
    );
};

export default Header;