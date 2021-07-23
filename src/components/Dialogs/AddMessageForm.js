import React from 'react';
import { reduxForm } from 'redux-form';
import { Field } from 'redux-form';
import {Textarea} from '../../common/FormsControls/FormsControls';
import {maxLengthCreator , required } from '../../utils/validators/validators';

const maxLength50 = maxLengthCreator(50);

const AddMessageForm = (props) => {
  return (
    <form  onSubmit={props.handleSubmit}>
      <div>
          <Field component={Textarea} name= "newMessage"
                  validate={[required, maxLength50 ]}   placeholder="Enter yor message"/>
      </div>
      <div>
          <button >Send</button>
      </div>
    </form>
  );
}

export default reduxForm({form: "dialog-add-message-form"})(AddMessageForm);
