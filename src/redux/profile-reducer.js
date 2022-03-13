import { profileAPI } from '../api/api';
import { stopSubmit } from 'redux-form';

const GET_USERS_PROFILE = 'GET-USERS-PROFILE';
const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT='UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_STATUS = 'SET-STATUS';
const DELETE_POST = 'DELETE-POST';
const SAVE_PHOTO_SUCCES = 'SAVE-PHOTO-SUCCES';
const SAVE_PROFILE_SUCCES = 'SAVE-PROFILE-SUCCES';

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
      case SAVE_PHOTO_SUCCES: {
        return { ...state, profile: {...state.profile, photos: action.photos}}
      }
      case SAVE_PROFILE_SUCCES: {
        return {...state, profile: {...state.profile}}
      }
      case GET_USERS_PROFILE: {
        return {...state, profile: {...state.profile}}
      }
        break;
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
export const getUserProfile = (id) => ({type: GET_USERS_PROFILE, id})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile })
export const setUserStatus = (status) => ({type: SET_STATUS, status })
export const deletePost = (id) => ({type: DELETE_POST, id})
export const savePhotoSucces =(photos) => ({type: SAVE_PHOTO_SUCCES, photos})
export const saveProfileSucces = (profile) => ({type: SAVE_PROFILE_SUCCES, profile});

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
  try {
    let response = await  profileAPI.updateStatus(status);
        if(response.data.resultCode === 0){
           dispatch(setUserStatus(status));
        }
    } catch (error) {
       debugger;
    }
}

export const savePhoto = (file) => async (dispatch) => {
   let response = await profileAPI.savePhoto(file);
      if(response.data.resultCode === 0){
        dispatch(savePhotoSucces(response.data.data.photos))
      }
}

export const saveProfile = (profile) => async (dispatch, getState ) => {
  const userId = getState().auth.userId;

   const response = await profileAPI.saveProfile(profile);
      if(response.data.resultCode === 0){
        dispatch(getUserProfile(userId))
      }else {
        dispatch(stopSubmit("edit-profile", { _error: response.data.messages[0]}))
      }
}

export default profileReducer;

//  let newPost = {
//  id: 5,
  //message: state.newPostText,
  //likesCount: 0 };
//state.posts.push(newPost);
//state.newPostText = '';
