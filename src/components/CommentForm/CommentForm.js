import React from 'react';
import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";
import {joiResolver} from "@hookform/resolvers/joi";

import {commentActions} from "../../redux";
import {commentValidator} from "../../validators";
import {commentService} from "../../services";

const CommentForm = () => {
    const {
        register,
        reset,
        handleSubmit,
        formState: {isValid, errors}
    } = useForm({mode: 'all', resolver: joiResolver(commentValidator)});

    const dispatch = useDispatch();

    const saveComment = async (comment) => {
        const {data} = await commentService.create(comment);
        dispatch(commentActions.createComment(data));
        reset();
    }

    return (
        <form className={'comment-form'} onSubmit={handleSubmit(saveComment)}>
            <h3>Add new comment</h3>
            <input type={'text'} placeholder={'name'} {...register('name')}/>
            {errors.name && <span className={'errors'}>{errors.name.message}</span>}
            <input type={'text'} placeholder={'body'} {...register('body')}/>
            {errors.body && <span className={'errors'}>{errors.body.message}</span>}
            <button disabled={!isValid}>Save</button>
        </form>
    );
};

export {CommentForm};