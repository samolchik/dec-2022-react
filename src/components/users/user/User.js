import React, {useState} from 'react';
import '../users.css'
import Posts from "../../posts/posts/Posts";
import {RiCloseLine} from "react-icons/ri";

const User = ({user}) => {

    const [userPosts, setUserPosts] = useState(null);

    const onOpenPosts = (obj) => {
        setUserPosts({...obj})
    }

    const onClosePosts = (obj) => {
        setUserPosts(false)
    }

    return (
        <li className='user'>
            <h3>{user.name} {user.username}</h3>
            <i>id: {user.id}</i>
            <p>email: {user.email}</p>
            <p>phone: {user.phone}</p>
            <p>website: {user.website}</p>
            <button className={'btn'} onClick={() => {
                onOpenPosts(user)}}>About posts</button>

            {
                userPosts && (
                    <div className='posts-page'>
                        <div className={'btn-close'} onClick={() => onClosePosts()}>
                            <RiCloseLine/>
                        </div>
                        <Posts userId={user.id}/>
                    </div>
                )
            }
        </li>
    );
};

export default User;