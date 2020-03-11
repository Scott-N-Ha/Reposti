import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { AuthRoute, ProtectedRoute } from '../util/route_util.jsx';
import NavBarContainer from './nav_bar/nav_bar_container.js';
import LoginFormContainer from './session/login_form_container.js';
import SignupFormContainer from './session/signup_form_container.js';
import UserContainer from './users/user_container.js';
import PostIndexContainer from './posts/post_index_container.js';
import SettingsContainer from './users/settings_container.js';
import FollowingContainer from './follow/following_container.js';
import LikesContainer from './like/likes_container.js';

// testing

// testing

const App = (props) => {
  return (
  <div className="app">
    <NavBarContainer />

    <Switch>
      <AuthRoute path="/login" component={LoginFormContainer} />
      <AuthRoute path="/signup" component={SignupFormContainer} />
      <ProtectedRoute exact path="/following" component={FollowingContainer} />
      <ProtectedRoute exact path='/settings' component={SettingsContainer} />
      <ProtectedRoute exact path="/likes" component={LikesContainer} />
      <ProtectedRoute exact path={`/:username`} component={UserContainer} />
      <ProtectedRoute exact path='/' component={PostIndexContainer} />
    </Switch>
  </div>)
};

export default App;