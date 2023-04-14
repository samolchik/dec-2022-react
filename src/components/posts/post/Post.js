import React, {useState} from 'react';
import '../posts.css'

const Post = ({post}) => {

    const [postDetails, setPostDetails] = useState(null);

    const onOpen = (post) => {
        setPostDetails({...post})
    }

    const onClose = () => {
        setPostDetails(false);
    }

    return (
         <li className='post'>
           <h5><i>id: {post.id}, title:</i>  {post.title} </h5>
             <button onClick={() => {
                 onOpen(post)
             }}>Datails</button>
             {
                 postDetails && (
                     <div className={'postDetails'}>
                         <h4>Title: {postDetails.title}</h4>
                         <p className={'body'}>Body: {postDetails.body}</p>
                         <button onClick={onClose}>Close</button>
                     </div>
                 )
             }
         </li>
    );
};

export default Post;

