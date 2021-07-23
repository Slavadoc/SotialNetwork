//import React from 'react'
//import { Field, reduxForm } from 'redux-form'

//export const required = value => value ? undefined : 'Required'
export const required = value => {
  if(value)  return undefined;
  return "Field is required " /*'error message'*/;
}

export const maxLengthCreator = max => value =>
       value && value.length > max ? `Max length is ${max} symbols` : undefined;

export const minLengthCreator =  min => value =>
       value && value.length < min ? `Min length is ${min} symbols` : undefined;
//const number = value => value && isNaN(Number(value)) ? 'Must be a number' : undefined
/*export const minLength = min => value =>
  value && value < min ? `Must be at least ${min}` : undefined

/*export const maxLength = max = value =>
   value && value.legth  > max  ? `Max length is ${max}` : undefined
export const maxLengthCreator = (maxLength) =  (value) => {
  if(value.length > maxLength ) return `Max length is ${maxLength} symbols`;
  return undefined;
}

export const minLength = value => {
  if(value && value.length < 3 ) return 'Min length is 3 symbols';
  return undefined;
}
*/
