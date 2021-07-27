import {authAPI, securityAPI } from '../api/api';
import { stopSubmit } from 'redux-form';

const SET_USER_DATE = 'SET_USER_DATA';
const GET_CAPTCHA_URL_SUCCESS = 'GET_CAPTCHA_URL_SUCCESS';

let initialState = {
    userId: null,
    email:  null,
    login:  null,
    isAuth: false,
    isFetching: false,
    captchaUrl: null // if null,  then captcha is not required
}

export const authReducer = (state = initialState, action) => {
  switch(action.type) {
     case SET_USER_DATE:
     case GET_CAPTCHA_URL_SUCCESS:
      {
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

export const getCaptchaUrlSuccess = ( captchaUrl ) => (
  {type: GET_CAPTCHA_URL_SUCCESS , payload: { captchaUrl }});

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

export const login = (email, password, rememberMe, captcha ) => async (dispatch) => { // thunck to logIn
   let response = await authAPI.login(email, password, rememberMe, captcha );
      if(response.data.resultCode === 0 ){
        // success , get auth data
        dispatch(getUserDataThunkCreator());
      } else {
        if (response.data.resultCode === 10) {
           dispatch(getCaptchaUrl())
        } else {
           let message = response.data.messages.length > 0 ? response.data.messages[0] : "Some error"
          dispatch(stopSubmit("login",{_error: message}));
        }
      }
}

export const logout = () => async (dispatch) => {
  let response = await authAPI.logout() ;
    if(response.data.resultCode === 0) {
     dispatch(setUserData(null,null,null, false));
   }
}

export const getCaptchaUrl = () => async (dispatch) => {
  const response = await securityAPI.getCaptchaUrl();
  const captchaUrl = response.data.url;

  dispatch(getCaptchaUrlSuccess(captchaUrl))
}

export default authReducer;
