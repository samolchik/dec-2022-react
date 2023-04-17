import React from 'react';
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import {commentService} from "../../services/comment.service";
import {commentValidator} from "../../validators/comment.validator";
import './comment.css'

const CommentForm = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: {errors, isValid},
    } = useForm({mode: 'all', resolver:joiResolver(commentValidator)});

    const saveComment = async (comment) => {
        const {data} = await commentService.create(comment);
        reset();

        console.log('newComment', data);
    }

    return (
        <form className={'comment-form'} onSubmit={handleSubmit(saveComment)}>
            <h2>ADD COMMENTS</h2>
            <input type={'text'}
                   placeholder={'name comment'} {...register('name')}/>
            {errors.name && <span className={'errors'}>{errors.name.message}</span>}

            <textarea type={'text'} placeholder={'text'} {...register('body', {
                required: {value: true, message: 'required'}})}/>
            {errors.body && <span className={'errors'}>{errors.body.message}</span>}

            <input type={'email'} placeholder={'email'} {...register('email')}/>
            {errors.email && <span className={'errors'}>{errors.email.message}</span>}

            <select {...register('postId')}>
                <option value="1">post 1</option>
                <option value="2">post 2</option>
                <option value="3">post 3</option>
                <option value="4">post 4</option>
                <option value="5">post 5</option>
                <option value="6">post 6</option>
                <option value="7">post 7</option>
            </select>

            <button className={'comment-btn'} disabled={!isValid}>CREATE</button>
        </form>
    );
};

export default CommentForm;