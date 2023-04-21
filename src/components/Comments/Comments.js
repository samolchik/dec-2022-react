import React, {useEffect, useState} from 'react';
import {commentService} from "../../services/comment.service";
import Comment from "../Comment/Comment";

const Comments = () => {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        commentService.getAll().then(value => value.data).then(value => setComments(value))
    }, []);

    return (

        <div>
            <ul>
                {
                    comments.map(comment => (<Comment key={comment.id} comment={comment}/>))
                }
            </ul>
        </div>
    );
};

export default Comments;