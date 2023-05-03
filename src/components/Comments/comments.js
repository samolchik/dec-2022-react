import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {Comment} from "../Comment";
import {CommentForm} from "../CommentForm";
import {commentService} from "../../services";
import {commentActions} from "../../redux";
import './comments.css';

const Comments = () => {
    const {comments} = useSelector(state => state.comments);
    const dispatch = useDispatch();

    useEffect(() => {
        commentService.getAll().then(value => value.data).then(value => dispatch(commentActions.setComments(value)))
    }, [dispatch])

    return (
        <div className={'comments-page'}>
            <CommentForm/>
            <hr/>
            <div className={'comments'}>
                {comments.map(comment => <Comment key={comment.id} comment={comment}/>)}
            </div>
        </div>
    );
};

export {Comments};