import React from 'react';
import { reduxForm } from 'redux-form';
import { Field } from 'redux-form';
import { Input } from '../../common/FormsControls/FormsControls';
//import LoginForm from './LoginForm';
import { connect } from 'react-redux';
import { login} from '../../redux/auth-reducer';
import {maxLengthCreator , required } from '../../utils/validators/validators';
import { Redirect } from 'react-router';
import styles from '../../common/FormsControls/FormsControls.module.css'

const maxLength50 = maxLengthCreator(50);

let mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth
  }
}

const LoginForm = (props) => {

  return (
      <form onSubmit={props.handleSubmit}>
        <div>
          <Field placeholder={"Email"} component={Input}
                 validate={[required,maxLength50]}name={"email"} />
        </div>
        <div>
            <Field placeholder={"Password"} component={Input}
                  validate={[required]} name={"password"} type={"password"}/>
        </div>
        <div>
          <Field type={"checkbox"} component={Input}
                  validate={[required]}name={"rememberMe"}/>remember me
        </div>
          { props.error && <div className={styles.formSummaryError}>
                  {props.error} </div> }
        <div>
            <button>Login</button>
        </div>
      </form>
  )
}

const LoginReduxForm = reduxForm({form: "login"})(LoginForm);

const Login = (props) => {
  const onSubmit = (formData) => {
    props.login(formData.email, formData.password, formData.rememberMe );
  }
  if(props.isAuth) {
    return <Redirect to={"/profile"} />
  }
  return <div>
           <h1>LOGIN</h1>
           <LoginReduxForm onSubmit={onSubmit}/>
         </div>
}

export default connect (mapStateToProps,{login})(Login);

/*const LoginForm = (props) => {

  return (
      <form onSubmit={props.handleSubmit}>
        <div>
          <Field placeholder={"Login"} component={Input} name={"login"}/>
        </div>
        <div>
            <Field placeholder={"Password"} component={Input} name={"Password"}/>
        </div>
        <div>
          <Field type={"checkbox"} component={Input} name={"rememberMe"}/>remember me
        </div>
        <div>
          <button>Login</button>
        </div>
      </form>
  )
}

const LoginReduxForm = reduxForm({ form: 'login'})(LoginForm)*/
