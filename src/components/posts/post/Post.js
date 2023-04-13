import React, {useState} from 'react';
import '../posts.css'

const Post = ({post}) => {

    const [postDetails, setPostDetails] = useState(null);

    const onOpen = (obj) => {
        setPostDetails({...obj})
    }

    const onClose = () => {
        setPostDetails(false);
    }

    return (
         <li className='post'>
           <h4><i>id: {post.id}, title:</i>  {post.title} </h4>
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

