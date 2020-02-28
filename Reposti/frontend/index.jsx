import React from 'react';
import ReactDOM from 'react-dom';

import configureStore from './store/store.js';
import Root from './components/root.jsx';

// testing

// testing

document.addEventListener("DOMContentLoaded", () => {
  let preloadedState;

  if (window.currentUser) {
    preloadedState = {
      entities: {
        users: {
          [window.currentUser.id]: window.currentUser
        }
      }
    };
  }
  
  const store = configureStore(preloadedState);
  delete window.currentUser;

  // testing
  window.store = store;

  // testing

  const root = document.getElementById('root');
  ReactDOM.render(
    // <div>Test</div>
    <Root store={store} />
    , root);
});