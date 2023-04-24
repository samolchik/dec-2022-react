import React, {useEffect, useState} from 'react';

import {IComment} from "../../interfaces/comment.interface";
import {commentService} from "../../services/comment.service";
import Comment from "../Comment/Comment";
import './comments.css';

const Comments = () => {
    const [comments, setComments] = useState<IComment[]>([]);

    useEffect(() => {
        commentService.getAll().then(value => value.data).then(value => setComments(value))
    }, []);

    return (
        <div className={'comments'}>
            {
                comments.map(comment => (<Comment key={comment.id} comment={comment}/>))
            }

        </div>
    );
};

export default Comments;