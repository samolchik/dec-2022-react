

import React, {Component} from 'react';

class Post extends Component {
   // constructor(props) {
   //     super(props);
   // }
    render() {
        const {id, title, body} = this.props.post;

        return (
            <div>
                <h4>title: {title}</h4>
                <p>id: {id}</p>
                <p>body:{body}</p>
                <hr/>
            </div>
        );
    }
}

export default Post;