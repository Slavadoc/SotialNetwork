import { profileAPI } from '../api/api';

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT='UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_STATUS = 'SET-STATUS';
const DELETE_POST = 'DELETE-POST';

let initialState = {
    posts: [
      {id: 1, message: 'he', likesCount: '100' },
      {id: 2, message: "it's me life", likesCount: '0'},
      {id: 3, message: "Fucking English",  likesCount: '10'},
      {id: 4, message: 'Ha ha ha', likesCount: '0'}
    ],
    profile: null,
    status: ''
}

export const profileReducer = (state = initialState , action) => {
    let stateCopy;
    switch (action.type) {
      /*case ADD_POST: {
        let newPost = state.newPostText;
        return {
          ...state,
          posts: [...state.posts,
            {id: 5 , message: newPost, likesCount: 0}],
            newPostText: ''
          };
        }*/
      case UPDATE_NEW_POST_TEXT: {
        let newText  = action.newText;
        return {
          ...state,
          posts: [...state.posts, {id:5 , message: newText, likesCount: 10}]
        };
      }
      case SET_USER_PROFILE: {
        return { ...state, profile: action.profile }
      }
      case SET_STATUS: {
        return { ...state, status: action.status }
      }
      case DELETE_POST: {
        return { ...state, posts: state.posts.filter(p => p.id != action.id)}
      }
       default: {
         return state;
       }
    }
};

/*export let addPostActionCreater = () => ({type: ADD_POST})*/
export let updateNewPostActionCreator = (newText) => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: newText
})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile })
export const setUserStatus = (status) => ({type: SET_STATUS, status })
export const deletePost = (id) => ({type: DELETE_POST, id})

export const setUserProfileThunkCreator = (userId) => {
   return (dispatch) => {
     profileAPI.getProfile(userId)
          .then(response => {

             dispatch(setUserProfile(response.data));
          })
   }
}

export const getStatus = (userId) => async (dispatch) => {
    let response = await profileAPI.getStatus(userId);
    dispatch(setUserStatus(response.data));
}

export const updateStatus = (status) => async (dispatch) => {
    let response = await  profileAPI.updateStatus(status);
        if(response.data.resultCode === 0){
           dispatch(setUserStatus(status));
        }
}

export default profileReducer;

//  let newPost = {
//  id: 5,
  //message: state.newPostText,
  //likesCount: 0 };
//state.posts.push(newPost);
//state.newPostText = '';
