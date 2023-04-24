import React, {FC, useEffect, useState} from 'react';
import {useParams} from "react-router-dom";

import {IPost} from "../../interfaces/post.interface";
import {postService} from "../../services/post.service";
import './post.css';

const Post: FC = () => {
    const {postId} = useParams();
    const [post, setPost] = useState<IPost>(null);

    useEffect(() => {
        postService.getById(postId).then(value => value.data).then(value => setPost(value))
    }, [postId])

    return (
        <div className={'posts'}>
            {
                post && (<div className={'post'}>
                    <i>id: {post.id}</i>
                    <h3>title: {post.title}</h3>
                    <p>body: {post.body}</p>
                </div>)
            }
        </div>
    );
};

export default Post;