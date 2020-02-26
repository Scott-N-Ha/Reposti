import React from 'react';
import ReactDom from 'react-dom';

import configureStore from './store/store.js';
import Root from './components/root.jsx';

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  const root = document.getElementById('root');
  ReactDom.render(
    <Root store={store} />
    , root);
});