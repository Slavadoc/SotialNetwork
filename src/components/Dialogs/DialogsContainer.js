import React from 'react';
import { NavLink, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';

import { /*updateNewMessageActionCreator,*/ addMessageActionCreator } from '../../redux/dialogs-reducer'
import Dialogs from './Dialogs'
import classes from './Dialogs.module.css';
import { withAuthRedirect } from '../../hoc/AuthRedirectDialogs';


let mapStateToProps = (state) => {
  return {
    dialogsPage:  state.messagesPage
  }
}

let mapDispatchToProps = (dispatch) => {
  return{
   addMessage: (newMessage) => {
      dispatch(addMessageActionCreator(newMessage)); // passing parameters
    },
  /*  onMessageChange: (body) => {
      dispatch(updateNewMessageActionCreator(body))
    }*/
  }
}

export default compose(
                  connect(mapStateToProps,mapDispatchToProps),
                  withAuthRedirect)
                  (Dialogs);
//export default withAuthRedirect(connect(mapStateToProps,mapDispatchToProps)(Dialogs));

/*let mapStateToProps = (state) => {
  return {
    messages: [...state.messagesPage.messages],
    dialogs: [...state.messagesPage.dialogs],
    newMessageText: state.messagesPage.newMessageText
  }
}*/
