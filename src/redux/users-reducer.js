import {usersAPI} from '../api/api';
import { updateObjectInArray } from '../utils/object-helper'
const UNFOLLOW = 'UNFOLLOW';
const FOLLOW = 'FOLLOW';
const SET_USERS = 'SET-USERS';
const SET_TOTAL_COUNT = 'SET-TOTAL-COUNT';
const PAGE_SIZE = 'PAGE-SIZE';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const TOGGLE_IS_FETCHING = 'CHANGE-IS-LOADING'
const TOGGLE_IS_FOLLOWING_PROGGRES = 'CHANGE-FOLLOWING-IN_PROGGRES'

const initialState = {
 users: [],
 totalCount: 0,
 pageSize: 10,
 page: 1,
 isFetching: true,
 followingInProgress: [],
 fake: 10
};

const usersReducer = (state =initialState, action ) => {
switch(action.type) {
  case "FAKE": return {...state, fake: state.fake + 1}
  case FOLLOW: {
    let stateCopy = {
      ...state,
      users: updateObjectInArray(state.users, action.userId, "id", { followed: true})
      /*users: state.users.map(   user => {
        if(user.id === action.userId) {
          return { ...user, followed: true}
        }
        return user})*/
    }
    return stateCopy;
  }
  case UNFOLLOW: {
    return {
      ...state,
      users: updateObjectInArray(state.users, action.userId, "id" , { followed: false})
      /*users: state.users.map( user => {
        if(user.id === action.userId) {
          return {...user, followed: false}
        }
        return user;
      })*/
    };
  }
  case SET_USERS: {
    return {...state,
            users: action.users}//!!!FACKKKKK
  }
  case SET_TOTAL_COUNT: {
     return {
       ...state, totalCount: action.totalCount
     };
   }
  case SET_CURRENT_PAGE: {
     return {
       ...state, pPage: action.page
     };
   }
  case TOGGLE_IS_FETCHING: {
    return {
      ...state, isFetching: action.isFetching
    };
  }
  case TOGGLE_IS_FOLLOWING_PROGGRES: {
    return {
      ...state,
      followingInProgress: action.isFetching
           ? [...state.followingInProgress, action.userId]
           :     state.followingInProgress.filter(id => id != action.userId)
    }
  }
  default:
    return state;
}
}

export const acceptFollow = (userId) => ({type: FOLLOW, userId});
export const acceptUnfollow = (userId) => ({type: UNFOLLOW, userId});
export const setUsers = (users) => ({type: SET_USERS, users});
export const setTotalUsersCount = (totalCount) => ({type: SET_TOTAL_COUNT, totalCount });
export const setCurrentPage = (page) => ({type: SET_CURRENT_PAGE, page });
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching });
export const toggleFollowingProgress = (isFetching, userId ) =>
              ({type: TOGGLE_IS_FOLLOWING_PROGGRES, isFetching, userId });

export const getUsers = (page, pageSize) => { //getUsersThunkCreator
  return async  (dispatch) => {
    dispatch(toggleIsFetching(true));
    dispatch(setCurrentPage(page));

    let data = await usersAPI.getUsers( page, pageSize);
      dispatch(toggleIsFetching(false));
      dispatch(setUsers(data.items));
      dispatch(setTotalUsersCount(data.totalCount));
  }
}

const followUnfollowFlow = async ( dispatch , userId ,apiMethod, actionCreator ) => {
  dispatch(toggleFollowingProgress(true,userId));
  let response = await apiMethod(userId);
  if(response.data.resaltCode === 0) {
    dispatch(acceptUnfollow(userId));
  }
   dispatch(toggleFollowingProgress(false,userId));
}

export const follow = (userId) =>  async (dispatch) => {
  let apiMethod = usersAPI.follow.bind(userId);
  let actionCreator = acceptFollow;
  followUnfollowFlow(dispatch, userId, apiMethod, actionCreator)
}

export const unfollow = (userId) => async (dispatch) => {
  let apiMethod  = usersAPI.unfollow.bind(userId);
  followUnfollowFlow(dispatch, userId, apiMethod, acceptUnfollow);
}

export default usersReducer;

/*const initialState = {
   users: [],
   pageSize: 5,
   totalUsersCount: 0,
   currentPage: 2

   const usersReducer = (state =initialState, action ) => {
     switch(action.type) {
       case FOLLOW: {
         let stateCopy = {
           ...state,
           users: state.users.map(   user => {
             if(user.id === action.userId) {
               return { ...user, followed: true}
             }
             return user})
         }
         return stateCopy;
       }
       case UNFOLLOW: {
         return {
           ...state,
           users: state.users.map( user => {
             if(user.id === action.userId) {
               return {...user, followed: false}
             }
             return user;
           })
         };
       }
        case SET_USERS: {
         return {...state,
                 users: action.users}//!!!FACKKKKK
       }
       case SET_CURRENT_PAGE: {
         return{...state,
                currentPage: action.currentPage}
       }
       case SET_TOTAL_COUNT: {
          return { ...state, totalUsersCount: action.totalCount}
       }
       default:
         return state;
     }
    }

   export const followAC = (userId) => ({type: FOLLOW, userId});
   export const unfollowAC = (userId) => ({type: UNFOLLOW, userId});
   export const setUsersAC = (users) => ({type: SET_USERS, users});
   export const setCurrentPageAC = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
   export const setTotalUsersCountAC = (totalCount) => ({type: SET_TOTAL_COUNT, totalCount});
};*/
