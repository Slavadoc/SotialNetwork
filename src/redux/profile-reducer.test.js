import profileReducer, { updateNewPostActionCreator, deletePost } from './profile-reducer';
import React from 'react';

let state = {posts: [
    {id: 1, message: 'he', likesCount: '100' },
    {id: 2, message: "it's me life", likesCount: '0'},
    {id: 3, message: "Fucking English",  likesCount: '10'},
    {id: 4, message: 'Ha ha ha', likesCount: '0'}
  ]
};

it('length of post should be incremented',  () => {
  // 1 test data
  let action = updateNewPostActionCreator("it-kamasutra.com");
   // 2 action
    let newPost = profileReducer( state , action );

    // 3 expectetion
    expect (newPost.posts.length).toBe(5);
});

it('message shoul be = it-kamasutra.com',  () => {
  // 1 test data
  let action = updateNewPostActionCreator("it-kamasutra.com");
   // 2 action
    let newPost = profileReducer( state , action );

    // 3 expectetion
    expect (newPost.posts[4].message).toBe("it-kamasutra.com");
});

it('after deleting langth of message should be decrement',  () => {
  // 1 test data
  let action = deletePost(1);
   // 2 action
    let newPost = profileReducer( state , action );
    expect (newPost.posts.length).toBe(3);
});
