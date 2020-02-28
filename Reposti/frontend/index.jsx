import React from 'react';
import ReactDom from 'react-dom';

import configureStore from './store/store.js';
import Root from './components/root.jsx';

document.addEventListener('DOMContentLoaded', () => {
  let preloadedState;

  if (window.currentUser){
    preloadedState = {
      entities: {
        users: {
          [window.currentUser.id]: window.currentUser
        }
      }
    }
  }

  const store = configureStore();
  delete window.currentUser;

  const root = document.getElementById('root');
  ReactDom.render(
    <Root store={store} />
    , root);
});