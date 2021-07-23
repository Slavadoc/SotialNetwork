import React from 'react';
import  styles from './FormsControls.module.css';
import { Field } from 'redux-form';
// над простым эелментом ХОК
const FormControl = ({input, meta, element, ...props}) => {
  const hasError = meta.touched;
  return (
    <div className={styles.formControl + " " + (hasError ? styles.error : "")}>
      <div>
        {props.children}{/*translate all props thruw*/}
      </div>
      { hasError && meta.error && <span>{meta.error}</span> }
    </div>
  )
}

export const Textarea = (props) => {
  const {input, meta, child, ...restProps} = props;
  return  <FormControl  {...props}><textarea {...input} {...restProps}  /></FormControl>
}

export const Input = (props) => {
  const {input, meta, child, ...restProps} = props;
  return   <FormControl  {...props}><input {...input} {...restProps}  /></FormControl>
}

export const createField = (placeholder,name,validators, components ) => {
  return (
    <Field placeholder={placeholder} component={components}
           validate={validators}name={name} />
    /*<Field placeholder={"Email"} component={Input}
           validate={[required,maxLength50]}name={"email"} />*/
  )
}
