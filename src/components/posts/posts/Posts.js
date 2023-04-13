import React, {useEffect, useState} from 'react';
import Post from "../post/Post";
import '../posts.css'

const Posts = ({userId}) => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
            .then(value => value.json())
            .then(posts => setPosts([...posts]))
    }, [])

    return (
        <ul className={'posts'}>
             {
                 posts.map(post => (<Post key={post.id} post={post}/>))
             }
        </ul>
    );
};

export default Posts;