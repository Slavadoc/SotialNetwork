import React from 'react';
import styless from './ProfileInfo.module.css';
import {createField, Input, Textarea } from '../../../common/FormsControls/FormsControls';
import {reduxForm} from 'redux-form';
import styles from '../../../common/FormsControls/FormsControls.module.css'

const ProfileDataForm = ({handleSubmit, profile, error }) => {

  return  <form onSubmit={handleSubmit}>
                <div><button>save</button></div>
                { error && <div className={styles.formSummaryError}>
                        { error} </div> }
                <div>
                    <b>Full name: {createField("Full name", "fullName",[], Input)}</b>
                 </div>
                 <div>
                   <b>Looking for a job </b> :
                    {createField("", "lookingForAJob", [] , Input, {type: "checkbox"} )}
                 </div>
                       <b>My professional skills: </b>
                        { createField("My professional skills","lookingForAJobDescription",[], Textarea)}
                 <div>
                   <b>About me: </b>
                   { createField("About me","aboutMe",[], Textarea)}
                </div>
                <div>
                   <b>Contacts</b> : {Object.keys(profile.contacts). map(key => {
                     return <div className={styless.contact}>
                       <b>{key}: {createField(key, "contacts" + key, [] , Input)}</b>
                     </div>
                   })}
                </div>
          </form>
}

export default reduxForm({form: 'edit-profile'})(ProfileDataForm);
