import  profileReducer from './profile-reducer';
import dialogsReducer from './dialogs-reducer';

let store = {
  _state: {
    profilePage: {
      posts: [
        {id: 1, message: 'he', likesCount: '100' },
        {id: 2, message: "it's me life", likesCount: '0'},
        {id: 3, message: "Fucking English",  likesCount: '10'},
        {id: 4, message: 'Ha ha ha', likesCount: '0'}
      ],
      newPostText: 'super star'
    },
    messagesPage: {
      message: [
         {id: 1, message: 'He'},
         {id: 2, message: "What's up"},
         {id: 3, message: 'How are you'},
         {id: 4 , message: 'Yo'}
      ],
      dialogs: [
        {id: 1, name: 'Vasia'},
        {id: 2, name: 'Kolia'},
        {id: 3, name: 'Shihka'},
        {id: 4, name: 'Na kol'},
        {id: 5, name: 'Nina'}
      ],
      newMessageText: 'disco super star'
    }
  },
  getState() {
    return this._state;
  },
  _callSubscriber: {},
  subscribe(observer) {
     this._callSubscriber =  observer;
  },
  dispatch(action) {
       this._state.profilePage = profileReducer(this._state.profilePage, action);
       this._state.messagesPage = dialogsReducer(this._state.messagesPage, action);

       this._callSubscriber(this.state);
  }
}

export default store;

window.store = store;
