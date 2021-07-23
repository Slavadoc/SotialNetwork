import React from 'react';
import { reduxForm } from 'redux-form';
import { Field } from 'redux-form';
import { Input, createField } from '../../common/FormsControls/FormsControls';
import {maxLengthCreator , required } from '../../utils/validators/validators';

const maxLength50 = maxLengthCreator(50);

const LoginForm = (handleSubmit, error) => {

  return (
      <form onSubmit={handleSubmit}>//<form onSubmit={props.handleSubmit}>
        <div>
          {createField("Email","email", [required,maxLength50], Input)}
          /*<Field placeholder={"Email"} component={Input}
                 validate={[required,maxLength50]}name={"email"} />*/
        </div>
        <div>
          {createField("Password","password",[required],Input)}
          /*<Field placeholder={"Password"} component={Input}
                 validate={[required]} name={"password"} type={"password"}/>*/
        </div>
        <div>
          {createField(null,"rememberMe", [required], Input, "remember me")}
        /*<Field type={"checkbox"} component={Input}
                  validate={[required]}name={"rememberMe"}/>remember me*/
        </div>
        <div>
          <button>Login</button>
        </div>
      </form>
  )
}

export default reduxForm({form: "login"})(LoginForm);
