import React, {useEffect, useState} from 'react';
import Post from "../post/Post";
import '../posts.css'
import axios from "axios";

const Posts = ({userId}) => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
            .then(value => value.data)
            .then(posts => setPosts([...posts]))
    }, [userId])

    return (
        <ul className={'posts'}>
             {
                 posts.map(post => (<Post key={post.id} post={post}/>))
             }
        </ul>
    );
};

export default Posts;