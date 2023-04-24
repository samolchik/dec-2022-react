import React, {FC} from 'react';

import {IComment} from "../../interfaces/comment.interface";
import {useNavigate} from "react-router-dom";

interface IProps {
    comment: IComment
}

const Comment: FC<IProps> = ({comment}) => {
    const {id, postId, name, email, body} = comment;

    const navigate = useNavigate();

    return (
        <div className={'comment'}>
            <h3>name: {name}</h3>
            <p>id:{id} & postId:{postId}</p>
            <p>body: {body}</p>
            <address>email: {email}</address>
            <button  className={'comment-button'} onClick={()=> navigate(`${postId}`)}>Post details</button>
        </div>
    );
};

export default Comment;