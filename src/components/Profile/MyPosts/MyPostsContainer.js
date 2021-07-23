import React from 'react';
import { connect } from 'react-redux';

import MyPosts from './MyPosts';
import { updateNewPostActionCreator/*,addPostActionCreater */} from '../../../redux/profile-reducer';

let mapStateToProps = (state) => {
  return {
    profilePage: state.profilePage
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    /*addPost: () => {
      dispatch(addPostActionCreater());
      dispatch(updateNewPostActionCreator(''));
    },*/
    onPostChange: (newPost) => {
      dispatch(updateNewPostActionCreator(newPost))
    }
  }
}

const MyPostsContainer = connect(mapStateToProps,mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
