import React, {useState} from 'react';

import styless from './ProfileInfo.module.css';
import ProfilePhoto from '../../../assets/image/see';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';
import ProfileDataForm from './ProfileDataForm';

const ProfileInfo = (props) => {

  let [editMode, setEditMode] = useState( false );

  const onMainPhotoSelected = (event) => {
    if(event.target.files.length) {
      props.savePhoto(event.target.files[0]);
    }
  }

  const onSubmit = (formData) => {
     props.saveProfile(formData).then(
       () => {
         setEditMode(false);
       });
  }

  return (
    <div>
      { props.profile.photos.large === null ?
              <ProfilePhoto /> :
             <img src={props.profile.photos.large}
             className={styless.mainPhoto}/> }
             {props.isOwner && <input type={"file"} onChange={onMainPhotoSelected}/>}

             { editMode ?
                 <ProfileDataForm initialValues={props.profile} profile={props.profile} onSubmit={onSubmit}/> :
                 <ProfileData goToEditMode={() => {setEditMode(true)} } profile={props.profile}
                              isOwner={props.isOwner}
                              />}
             <ProfileStatusWithHooks  status={props.status} updateStatus={props.updateStatus}/>
      </div>
  );
}

const ProfileData = ({profile , isOwner, goToEditMode}) => {
  return  <div className={styless.discriptionBLock}>
            { isOwner && <div><button onClick={goToEditMode} >Edit</button></div> }
            <div>
                <b>Full name: {profile.fullName}</b>
             </div>
            <div>
                <b>Мой номер № {profile.userId}</b>
             </div>
            <div>
               <b>Looking for a job: </b>{profile.lookingForAJob ? "yes" : "no" }
            </div>
            { profile.lookingForAJob &&
            <div>
               <b>My professional skills: </b>{profile.lookingForAJobDescription }
            </div>
            }
            <div>
               <b>About me: </b>{profile.aboutMe}
            </div>
            <div>
               <b>Contacts</b> : {Object.keys(profile.contacts). map(key => {
                 return <Contact key={key}contactTitle={key} contactValue={profile.contacts[key]}/>
               }
               )}
            </div>

        </div>
}

const Contact = ( {contactTitle, contactValue}) => {
  return <div className={styless.contact}><b>{contactTitle}</b>: {contactValue} </div>
}

export default ProfileInfo;
