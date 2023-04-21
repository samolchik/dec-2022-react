import React from 'react';
import {useNavigate} from "react-router-dom";

import {FaHome} from "react-icons/fa"
import {Link} from "react-router-dom";
import './header.css'

const Header = () => {

    const navigate = useNavigate();
    return (
        <div className={'header'}>
            <button onClick={()=>navigate('todos')}>Todos</button>
            <button onClick={()=>navigate('albums')}>Albums</button>
            <button onClick={()=>navigate('comments')}>Comments</button>

            {/*<ul className={'header'}>*/}
            {/*    <li><Link to={'todos'}>TODOS</Link></li>*/}
            {/*     <li><Link to={'albums'}>ALBUMS</Link></li>*/}
            {/*     <li><Link to={'comments'}>COMMENTS</Link></li>*/}
            {/*</ul>*/}
        </div>
    );
};

export default Header;