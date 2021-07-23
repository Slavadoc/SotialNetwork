import React from 'react';
import classes from './Profile.module.css';
import Profile from './Profile';
import * as axios from 'axios';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import { setUserProfileThunkCreator, getStatus, updateStatus } from '../../redux/profile-reducer';
import Preloader from '../../common/Preloader/Preloader';
import { compose } from 'redux';

let mapStateToProps = (state) => {
    //console.log("mapStateToProps PROFILE")
    return {
      profile: state.profilePage.profile,
      status: state.profilePage.status,
      authorizedUserId: state.auth.userId,
      isAuth: state.auth.isAuth
    }
}

class ProfileContainer extends React.Component {

 componentDidMount() {
   let userId = this.props.match.params.userId;
   if(!userId ) {
     userId = this.props.authorizedUserId;
     if(!userId){
       this.props.history.push("/login");
     }
   }
   //setTimeout(() => {
     this.props.getStatus(userId);
   //},5000);
   this.props.setUserProfile(userId);
 }

  render () {
      return (
        <div>
         { this.props.profile === null ?
           <Preloader /> :
           <Profile {...this.props} profile={ this.props.profile }
                    updateStatus={this.props.updateStatus}  />
          }
        </div>
      )
   }
}

export default compose(connect(mapStateToProps, { setUserProfile: setUserProfileThunkCreator,getStatus, updateStatus }),
                          withRouter)
                         //,withAuthRedirect)
                       (ProfileContainer);

                       /*let ends = compose(
                         connect(mapStateToProps, {setUserProfile: setUserProfileThunkCreator}),
                         withRouter,
                         withAuthRedirect
                       )
                       (ProfileContainer);*/
                       //let RedirectComponent = withAuthRedirect(ProfileContainer);
                       /*let AuthRedirectComponent = (props) => {
                         if (props.isAuth === false) return <Redirect to={'/login'} />;
                         return <ProfileContainer {...props} />
                       }*/

                       //let WithUrlDateContainerComponent = withRouter(RedirectComponent);
                      /*profileAPI.getProfile(userId)
                           .then(data => {
                              this.props.setUserProfile(data);
                           });*/
