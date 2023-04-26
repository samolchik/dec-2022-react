import React, {Component} from 'react';

class Comment extends Component {
    render() {
        const {id, postId, name, email, body} = this.props.comment;

        return (
            <div>
                <h4>name: {name}</h4>
                <p>id: {id}; postId: {postId}</p>
                <p>body: {body}</p>
                <address>email: {email}</address>
                <hr/>
            </div>
        );
    }

}

export default Comment;