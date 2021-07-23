import React from 'react';
import { connect } from 'react-redux';
import * as axios from 'axios';
import {thunk as thunkMiddleware} from 'redux-thunk';

import Users from './Users'
import { follow, unfollow,  setCurrentPage ,  getUsers} from '../../redux/users-reducer';
import Preloader from '../../common/Preloader/Preloader';
import { getUsersSuper, getTotalCount, getUsersSelectors,getPageSize, getCurrentPage, getIsFetching, getFollowingInProgress } from '../../redux/users-selector';

let mapStateToProps = (state) => {
  console.log('mapStateToProps USERS')
  return {
     //users: getUsersSelectors(state),
     users: getUsersSelectors(state),
     totalCount: getTotalCount(state),
     pageSize: getPageSize(state),
     currentPage: getCurrentPage(state),
     isFetching: getIsFetching(state),
     followingInProgress: getFollowingInProgress(state)
  }
}
/*let mapStateToProps = (state) => {
  return {
     users: getUsers(state),
     totalCount: state.usersPage.totalCount,
     pageSize: getPageSize(state),
     currentPage: getCurrentPage(state),
     isFetching: getIsFetching(state),
     followingInProgress: getFollowingInProgress(state)
  }
}*/

class UsersContainer   extends React.Component {

   componentDidMount() {
     this.props.getUsers(this.props.currentPage, this.props.pageSize);
   }

   onPageChanged = (pageNumber) => {
     this.props.getUsers(pageNumber,this.props.pageSize);
     this.props.setCurrentPage(pageNumber);
   }

  render() {
    console.log('render');
    return (
     <div>
        { this.props.isFetching  ? <Preloader /> : null }
        <Users     totalUsersCount={this.props.totalCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   onPageChanged={this.onPageChanged}
                   users={this.props.users}
                   follow={this.props.follow}
                   unfollow={this.props.unfollow}
                   followingInProgress= {this.props.followingInProgress}/>
      </div>
    )
  }
};

export default connect(mapStateToProps, {
                       follow,
                       unfollow,
                       setCurrentPage,
                       getUsers
                     })(UsersContainer);

/*export default connect(mapStateToProps, {
                       follow ,unfollow, setUsers,
                       setTotalUsersCount,setCurrentPage,
                        toggleFollowingProgress,
                        getUsers: getUsersThunkCreator
                      })(UsersContainer);*/

/*export default connect(mapStateToProps, {
                       follow: followAC,
                       unfollow:  unfollowAC,
                       setUsers:  setUsersAC,
                       setUsersCount: setTotalUsersCountAC,
                       setCurrentPage: setCurrentPageAC,
                       toggleIsFetching: toggleIsFetchingAC
                      })(UsersContainer);
/*let mapStateToProps = (state) => {
  return {
     users: state.usersPage.users,
     pageSize: state.usersPage.pageSize,
     totalUsersCount: state.usersPage.totalUsersCount,
     currentPage: state.usersPage.currentPage
  }
}
let mapDispatchToProps = (dispatch) => {
  return {
     follow: (userId) => {
        dispatch(followAC(userId))
     },
     unfollow: (userId) => {
       dispatch(unfollowAC(userId))
     },
     setUsers: (users) => {
       dispatch(setUsersAC(users));
     },
     setCurrentPage: (pageNumber) => {
       dispatch(setCurrentPageAC(pageNumber));
     },
      setTotalUsersCount: (totalCount) => {
        dispatch(setTotalUsersCountAC(totalCount));
      }
    }
}
const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPIComponent);
export default UsersContainer;*/

/*let mapDispatchToProps = (dispatch) => {
  return {
     follow: (userId) => {
        dispatch(followAC(userId))
     },
     unfollow: (userId) => {
       dispatch(unfollowAC(userId))
     },
     setUsers: (users) => {
       dispatch(setUsersAC(users));
     },
     setUsersCount: (totalCount) => {
       dispatch(setTotalUsersCountAC(totalCount));
     },
      setCurrentPage: (currentPage) => {
        dispatch(setCurrentPageAC(currentPage));
      },
     toggleIsFetching: (isFetching) => {
        dispatch(toggleIsFetchingAC(isFetching))
      }
    }
}*/
/*this.props.toggleIsFetching(true);
usersAPI.getUsers(this.props.currentPage, this.props.pageSize)
    .then(data => {
      this.props.toggleIsFetching(false);
      this.props.setUsers(data.items);
      this.props.setTotalUsersCount(data.totalCount);
    });*/
