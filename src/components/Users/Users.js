import React from 'react';
import { NavLink } from 'react-router-dom';
import *as axios from 'axios';
import Paginator from '../../common/Paginator/Paginator';
import avatar from '../../assets/image/avatar1.jpg';
import stylles from './Users.module.css';
import User from './User/User';

let Users = ({currentPage, onPageChanged,totalUsersCount, pageSize, users, ...props}) => {

  /*let pageSize = props.totalUsersCount / props.pageSize;

   let pages= [];

   for( let i=1; i<pageSize; i++ ) {
     pages.push(i);
   }*/

   return  <div>
        {/* pages.map( number => <span className={ props.currentPage === number && stylles.selectedPages}
                    onClick={() => props.onPageChanged(number)}>
          {number}
          </span>
        )*/}
        <Paginator currentPage={currentPage} onPageChanged={onPageChanged}
                  totalItemsCount={totalUsersCount} pageSize={pageSize}/>
         {
            users.map( u  =>
                        <User user={u} key={u.id}
                             follow={props.follow}
                             following={props.following}
                            followingInProgress={props.followingInProgress} />)
         }  {  /*<span>
                <div>
                   <NavLink to={'/profile/' + user.id } >
                       <img src={ user.photos.small != null ?  user.photos.small : avatar } className={stylles.userPhoto} />
                  </NavLink>
                </div>
                 { user.followed ?
                   <button disabled={props.followingInProgress.some(id => id=== user.id) }
                          onClick={() => { props.unfollow(user.id); }}
                    >Unfollow</button> :
                   <button disabled={props.followingInProgress.some(id => id === user.id) }
                          onClick={() => {  props.follow(user.id); }}
                    >Follow</button>}
              </span>
              <span>
                <div>{user.name}</div>
                <div> status: {user.status} </div>
                <div> number № {user.id}</div>
                <div>{user.followed ? 'followed' : 'unfollowed' }</div>
              </span>*/}
        </div>
   }

 export default Users;
/*{ user.followed ?
  <button disabled={props.followingInProgress.some(id => id=== user.id) }onClick={() => {
         props.toggleFollowingProgress(true,user.id);
    usersAPI.followAPI(user.id)
        .then(resaltCode => {
           if(resaltCode === 0) {
              props.unfollow(user.id)
               }
            props.toggleFollowingProgress(false,user.id);
          });
      }}>Unfollow</button> :
  <button disabled={props.followingInProgress.some(id => id === user.id) }onClick={() => {
        props.follow(user.id);
       /*props.toggleFollowingProgress(true,user.id);
    usersAPI.unfollowAPI(user.id)
        .then(resaltCode => {
           if(resaltCode === 0) {
             props.follow(user.id);
             }
           props.toggleFollowingProgress(false,user.id);
        });
   }}>Follow</button>}*/
