import React from 'react';
import Header from './Header';
import *as axios from 'axios';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import classes from './Header.module.css'
import { getUserDataThunkCreator, logout    } from '../../redux/auth-reducer'


let mapStateToProps = (state) => {
   return  {
     isAuth: state.auth.isAuth,
     login: state.auth.login,
     id: state.auth.userId
  }
}

class HeaderContainer extends React.Component {

  render() {
    return  <div className={classes.header}>
           <Header  {...this.props } />
           </div>
  }
}

export default connect( mapStateToProps ,{
                        logout
                        } )(HeaderContainer);

/*authMe()
.then( response  => {
     let email = response.data.data.email;
     let  userId = response.data.data.id;
     let  login = response.data.data.login;
     this.props.setUserData( email, userId, login );
  }
);*/
