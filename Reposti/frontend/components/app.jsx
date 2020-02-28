import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { AuthRoute, ProtectedRoute } from '../util/route_util.jsx';
import NavBarContainer from './nav_bar/nav_bar_container.js';
import LoginFormContainer from './session/login_form_container.js';
import SignupFormContainer from './session/signup_form_container.js';

// testing

// testing

const App = (props) => {
  return (<div className="app">
    <header>
      <h1>Reposti</h1>
      <NavBarContainer />
      <AuthRoute path="/login" component={LoginFormContainer} />
      <AuthRoute path="/signup" component={SignupFormContainer} />
      <ProtectedRoute path="/" />
    </header>
  </div>)
};

export default App;