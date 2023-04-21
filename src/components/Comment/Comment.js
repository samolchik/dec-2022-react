import React from 'react';
import {useNavigate} from "react-router-dom";

const Comment = ({comment}) => {
    const {id, postId, name, email, body} = comment;

    const navigate = useNavigate();

    return (
        <li>
            <h4>name: {name}</h4>
            <p>id: {id}; postId: {postId}; email: {email}</p>
            <p>body: {body}</p>
            <button onClick={() => navigate(`${postId}`)}>Post details</button>
        </li>
    );
};

export default Comment;