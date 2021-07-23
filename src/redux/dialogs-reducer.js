const  ADD_MESSAGE = 'ADD_MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT';

let initialState = {
    messages: [
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
    ]
    //newMessageText: 'disco super star'
}

export const dialogsReducer = (state = initialState , action) => {
  let stateCopy;
  switch(action.type) {
    case ADD_MESSAGE:
        let newMessage = action.newMessage;//let newMessage = state.newMessageText;
        return {
                ...state,
                messages: [...state.messages, {id: 5, message: newMessage}]
              };
/*    case UPDATE_NEW_MESSAGE_TEXT: {
      let stateCopy = {...state,
           newMessage: action.newMessage
      };
      return stateCopy;
    }*/
    default: {
         return state;
    }
  }
}


export let addMessageActionCreator = (newMessageBody) => ({type: ADD_MESSAGE ,newMessage: newMessageBody })

/*export let updateNewMessageActionCreator = (text) => ({
  type: UPDATE_NEW_MESSAGE_TEXT,
  newMessage: text
})*/

export default dialogsReducer

/*export const dialogsReducer = (state = initialState , action) => {
 //let stateCopy = {...state,
       //message: [...state.message]};
  //stateCopy.message = {...state.message}
  let stateCopy;
  switch(action.type) {
    case ADD_MESSAGE: {
//      let  newMessage = {
//      id: 5,
//      message: state.newMessageText,};
        let newMessage = action.newMessage;//let newMessage = state.newMessageText;
        return {...state, messages: [...state, {if: 5, message: newMessage }]
        // messages: [...state.messages, {id:5 , message: state.newMessage}]
        //  newMessageText: ''
       };
    }
    case UPDATE_NEW_MESSAGE_TEXT: {
      let stateCopy = {...state,
           newMessage: action.newMessage
      };
      return stateCopy;
    }
    default: {
         return state;
    }
  }
}*/
