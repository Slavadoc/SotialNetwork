import React from 'react';
import { NavLink } from 'react-router-dom';
import *as axios from 'axios';
//import Paginator from '../../common/Paginator/Paginator.js';
import avatar from '../../../assets/image/avatar1.jpg';
import stylles from './User.module.css';

let User = ({user,followingInProgress, unfollow, follow}) => {

  return ( <div>
      <span>
        <div>
          <NavLink to={'/profile/' + user.id } >
           <img src={ user.photos.small != null ?  user.photos.small : avatar } className={stylles.userPhoto} />
         </NavLink>
         </div>
            { user.followed ?
             <button disabled={followingInProgress.some(id => id=== user.id) }
                     onClick={() => { unfollow(user.id); }}
                      >Unfollow</button> :
             <button disabled={followingInProgress.some(id => id === user.id) }
                            onClick={() => { follow(user.id); }}
                     >Follow</button>}
      </span>
      <span>
        <div>{user.name}</div>
        <div> status: {user.status} </div>
        <div> number № {user.id}</div>
        <div>{user.followed ? 'followed' : 'unfollowed' }</div>
      </span>
  </div>
 );
}

export default User;
