import React from 'react';
import ReactDOM from 'react-dom';

import configureStore from './store/store.js';
import Root from './components/root.jsx';

// testing
import { fetchSingleUser } from './actions/users_actions.js';
// testing

document.addEventListener("DOMContentLoaded", () => {
  let preloadedState;

  if (window.currentUser) {
    preloadedState = {
      entities: {
        users: {
          [window.currentUser.id]: window.currentUser
        }
      },
      session: {
        id: window.currentUser.id
      }
    };
  }
  
  const store = configureStore(preloadedState);
  delete window.currentUser;

  // testing
  window.store = store;
  window.fetchSingleUser = fetchSingleUser;
  // testing

  const root = document.getElementById('root');
  ReactDOM.render(
    // <div>Test</div>
    <Root store={store} />
    , root);
});