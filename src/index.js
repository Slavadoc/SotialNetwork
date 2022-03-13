import React from 'react';
import ReactDOM from 'react-dom';
//import { BrowserRouter } from 'react-router-dom';
//import { Provider } from 'react-redux';

import './index.css';
import SamuraiJSApp from './App';
import reportWebVitals from './reportWebVitals';
//import store from './redux/redux-store';

/*let h1 = document.createElement("h1");
h1.innerHTML = "";
document.querySelector("body").appendChild(h1);

//React.createElement("h1",)

/*setInterval(() => {
  store.dispatch({type: "FAKE"})
}, 1000);*/

  ReactDOM.render(<SamuraiJSApp />, document.getElementById('root'));

//rerenderEntireTree(store.getState());
//store.subscribe(() => {
//  let state = store.getState();
//  rerenderEntireTree(state);});

//store.subscribe(rerenderEntireTree);


// ReactDOM.render(
//   <BrowserRouter>
//       <App addPost={addPost} profilePage={state.profilePage} messagesPage={state.messagesPage} />
//    </BrowserRouter>, document.getElementById('root')
//
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
