import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter, Switch, Route } from 'react-router-dom';

import NavBarContainer from './navbar/navBarContainer.js';
import PostsIndexContainer from './posts/postsIndexContainer.js';
import LoginContainer from './session/loginFormContainer.js';
import SignupContainer from './session/signupFormContainer.js';

const Root = ({store}) => {
  return (
    <Provider store={store}>
      <HashRouter>
        <NavBarContainer />
        <Switch>
          <Route exact path="/" component={PostsIndexContainer} />
          <Route path="/login" component={LoginContainer} />
          <Route path="/signup" component={SignupContainer} />
        </Switch>
      </HashRouter>
    </Provider>
  );
};

export default Root;