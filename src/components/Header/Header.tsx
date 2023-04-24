import React from 'react';
import {useNavigate} from "react-router-dom";

import './header.css';

const Header = () => {
    const navigate = useNavigate();
    return (
        <div className={'header'}>
            <button onClick={() => navigate('todos') }>TODOS</button>
            <button onClick={() => navigate('albums') }>ALBUMS</button>
            <button onClick={() => navigate('comments') }>COMMENTS</button>
        </div>
    );
};

export default Header;