import React from 'react';
import { NavLink } from 'react-router-dom';
import { Redirect } from 'react-router-dom';

import Message from './Message/Message';
import DialogItem from './DialogItem/DialogItem'
import classes from './Dialogs.module.css';
import { reduxForm } from 'redux-form';
import { Field } from 'redux-form';
import AddMessageForm from './AddMessageForm';

const Dialogs = (props) => {

  let dialogsElement = props.dialogsPage.dialogs
  .map(d => <DialogItem name={d.name} id={d.id} key={d.id} /> );

   let messagesElement =  props.dialogsPage.messages
   .map(m => <Message message={m.message} key={m.id} /> );

   /*let newMessage = props.newMessageText;

   let addMessage = (values) => {
     props.sendMessage(values.newMessageText);//props.addMessage();//props.changeNewMessageText('');s
   }*/
    /*let onMessageChange = (event) => {
      let body = event.target.value;
      props.onMessageChange(body);//props.changeNewMessageText(text);
    }*/
    //if(props.isAuth  === false ) return <Redirect to={'/login'} />;

    let addNewMessage = (values) => {
      props.addMessage(values.newMessage);
    }

  return(
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems} >
        { dialogsElement }
      </div>
      <div className={classes.message} >
        { messagesElement }
        <AddMessageForm onSubmit={addNewMessage}/>{/*onSubmit = after submit function that work*/}
      </div>
    </div>
  );
}

/*const AddMessageForm = (props) => {
  return (
    <form  onSubmit={props.handleSubmit}>
      <div>
          <Field component="textarea" name= "newMessage"
                    placeholder="Enter yor message"/>
      </div>
      <div>
          <button >Send</button>
      </div>
    </form>
  );
}

const AddMessageFormRedux = reduxForm({form: "dialogAddMessageForm"})(AddMessageForm);*/
export default Dialogs;
