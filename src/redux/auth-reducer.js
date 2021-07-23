import {authAPI} from '../api/api';
import { stopSubmit } from 'redux-form';

const SET_USER_DATE = 'SET_USER_DATA';

let initialState = {
    userId: null,
    email:  null,
    login:  null,
    isAuth: false,
    isFetching: false
}

export const authReducer = (state = initialState, action) => {
  switch(action.type) {
     case(SET_USER_DATE): {
      return { ...state,
               ...action.payload//полезная нгарузка
             }
    }
    default: {
      return state
    }
  }
}

export let setUserData = ( userId, email, login, isAuth  ) => (
  {type: SET_USER_DATE , payload: {userId, email,  login, isAuth }});

export const getUserDataThunkCreator = () => async (dispatch) => {
    let response = await authAPI.me();
        if(  response.data.resultCode === 0 ) {
           let { id, email ,login } = response.data.data;
           dispatch(setUserData( id , email , login , true));
          }
}

/*export const getUserDataThunkCreator = () => (dispatch) => {
  authAPI.me()
    .then( response  => {
      if(  response.data.resultCode === 0 ) {
         let email = response.data.data.email;
         let  userId = response.data.data.id;
         let  login = response.data.data.login;
         let { id, email ,login } = response.data.data;
         dispatch(setUserData( id , email , login , true));
        }
     });
}*/

export const login = (email, password, rememberMe ) => async (dispatch) => { // thunck to logIn
   let response = await authAPI.login(email, password, rememberMe );
      if(response.data.resultCode === 0 ){
        dispatch(getUserDataThunkCreator());
      } else {
        let message = response.data.messages.length > 0 ? response.data.messages[0] : "Some error"
        dispatch(stopSubmit("login",{_error: message}));
      }
}

export const logout = () => async (dispatch) => {
  let response = await authAPI.logout() ;
    if(response.data.resultCode === 0) {
     dispatch(setUserData(null,null,null, false));
   }
}

export default authReducer;
