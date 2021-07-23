import { createStore, combineReducers , compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { applyMiddleware } from 'redux';
import  profileReducer from './profile-reducer';
import dialogsReducer from './dialogs-reducer';
import usersReducer from './users-reducer';
import authReducer from './auth-reducer';
import appReducer from './app-reducer';
import { reducer as formReducer } from 'redux-form';

let reducers = combineReducers({
  usersPage: usersReducer,
  profilePage: profileReducer,
  messagesPage: dialogsReducer,
  auth: authReducer,
  form: formReducer,
  app: appReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(
    applyMiddleware(thunkMiddleware)
  ));

//let store = createStore( reducers, applyMiddleware(thunkMiddleware));

window._store_ = store;
export default store;
/*create virtuel reduser like our*/
