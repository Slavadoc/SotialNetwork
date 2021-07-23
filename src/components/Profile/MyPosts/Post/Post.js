import React from 'react';
import classes from './Post.module.css'

const Post = (props) => {
    return (
        <div className={classes.item}>
           <img src=" https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlAZL5DK9hCVl3_-X5QRPT4PPgSR80DnOluA&usqp=CAU" />
           <div>{props.message}</div>
           <div>
              <span>like</span>
           </div>
           <div>
              <span>dislike</span>
           </div>
           <div> Likes: {props.likesCount}
           </div>
        </div>
    );
}

export default Post;
