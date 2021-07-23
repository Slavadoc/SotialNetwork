import React from 'react';
import { reduxForm } from 'redux-form';
import { Field } from 'redux-form';
import {Textarea} from '../../../common/FormsControls/FormsControls';

const AddMyPostForm = (props) => {
  
  return (
    <form  onSubmit={props.handleSubmit}>
      <div>
          <Field component={Textarea} name= "newMessage"
                    placeholder="Enter yor message"/>
      </div>
      <div>
          <button >Send</button>
      </div>
    </form>
  );
}

export default reduxForm({form: "ProfileAddMyPostFrom"})(AddMyPostForm);
