import React, { useState, useEffect } from 'react';
import classes from './ProfileInfo.module.css';

const ProfileStatusWithHook = (props) => {

  let [editMode, setEditMode ] = useState( false);
  let [ status, setStatus ] = useState(props.status);

  useEffect(() => {
    setStatus = props.status;
  }, [props.status]);

   const activetedEditMode = () => {
     setEditMode(true);
   }

   const deactivetedEditMode = () => {
     setEditMode(false);
     props.updateStatus(status);
   }

   const onStatusChange = (event) => {
     setStatus(event.currentTarget.value);
   }

  return (
        <div>{
           !editMode  &&
           <div>
               <b> Status : </b><span onDoubleClick={activetedEditMode}>{props.status || "---------" }</span>
          </div>
        }
          { editMode &&
          <input  autoFocus={true} onBlur={deactivetedEditMode}
                  value={status}
                  onChange={onStatusChange}
                  />
        }
        </div>
   )
}

export default ProfileStatusWithHook;

/*let stateWithSetState = useState(true);
debugger;
let editMode = stateWithSetState[0];
let setEditMode = stateWithSetState[1];*/
