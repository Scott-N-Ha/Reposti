import React from 'react';
import ReactDOM from 'react-dom';

import configureStore from './store/store.js';
import Root from './components/root.jsx';

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
        id: window.currentUser.id,
        username: window.currentUser.username,
      }
    };
  }
  
  const store = configureStore(preloadedState);
  delete window.currentUser;
  const bootstrapScript = document.getElementById('bootstrap-script')
  if (bootstrapScript !== null) bootstrapScript.remove();

  const root = document.getElementById('root');
  ReactDOM.render(
    <Root store={store} />
    , root);
});