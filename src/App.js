import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import React, { Component } from 'react';
import HeaderContainer  from './components/Header/HeaderContainer';
import Navbar from './components/Nav/Navbar';
import Footer from './components/Footer/Footer';
import Login from './components/Login/Login';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';
import Preloader from './common/Preloader/Preloader';
import {initializeApp} from './redux/app-reducer';
import store from './redux/redux-store';
import { Provider } from 'react-redux';
import { withSuspense } from './hoc/WithSuspense';
//import ProfileContainer from './components/Profile/ProfileContainer';
const  ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));
//import DialogsContainer from './components/Dialogs/DialogsContainer';
const  DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const  UsersContainer = React.lazy(() => import('./components/Users/UsersContainer'));

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

class App extends Component {

  componentDidMount() {
     this.props.initializeApp();
  }
  /* here add grid*/
  render() {
        if(!this.props.initialized) {
          return <Preloader />
        }
      return (
        /*visibloty limited*/
        <div className="app-wrapper">
             <HeaderContainer />
             <Navbar/>
             <div className="app-wrapper-content">
               <Route path='/messages'
                      render={withSuspense(DialogsContainer)} />
               <Route path='/profile/:userId?'
                      render={withSuspense(ProfileContainer)} />
               <Route path='/users' render={withSuspense(UsersContainer)}/>
               <Route path='/login' component={Login}/>
              </div>
             <Footer />
          </div>
      );
    }
}

let AppContainer =  compose(
                      withRouter,
                      connect(mapStateToProps,
                      { initializeApp }))
                      (App);

const SamuraiJSApp = (props) => {
  return <BrowserRouter>
    <Provider store={store}>
      <AppContainer  />
     </Provider>
   </BrowserRouter>
}

export default SamuraiJSApp;
