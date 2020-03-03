import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { AuthRoute, ProtectedRoute } from '../util/route_util.jsx';
import NavBarContainer from './nav_bar/nav_bar_container.js';
import LoginFormContainer from './session/login_form_container.js';
import SignupFormContainer from './session/signup_form_container.js';
import UserContainer from './users/user_container.js';
import PostIndexContainer from './posts/post_index_container.js';

// testing

// testing

const App = (props) => {
  return (
  <div className="app">
    <header>
      <h1>Reposti</h1>
      <NavBarContainer />
    </header>

    <Switch>
      <AuthRoute path="/login" component={LoginFormContainer} />
      <AuthRoute path="/signup" component={SignupFormContainer} />
      <ProtectedRoute exact path={'/'} component={PostIndexContainer} />
      <ProtectedRoute exact path={`/:username`} component={UserContainer} />
    </Switch>
  </div>)
};

export default App;