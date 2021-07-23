import React from 'react';

import classes from './ProfileInfo.module.css';
import See from '../../../assets/image/see';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';

const ProfileInfo = (props) => {

  return (

    <div>
      { props.profile.photos.large === null ?
              <See /> :
             <img src={props.profile.photos.large}/> }
      <div className={classes.discriptionBLock}>
        <div> Мой номер № {props.profile.userId} </div>
        <ProfileStatusWithHooks  status={props.status} updateStatus={props.updateStatus}/>
      </div>
    </div>
  );
}

export default ProfileInfo;
