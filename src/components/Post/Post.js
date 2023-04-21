import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";

import {postService} from "../../services/post.service";

const Post = () => {
    const {postId} = useParams();
    const [post, setPost] = useState(null);

    useEffect(() => {
        postService.getById(postId).then(value => value.data).then(value => setPost(value))
    }, [postId])


    return (
        <div>
            {post && (
                <div>
                    <h4>title: {post.title}</h4>
                    <p>id: {post.id}</p>
                    <p>body:{post.body}</p>
                </div>
               )}
        </div>
    );
};

export default Post;