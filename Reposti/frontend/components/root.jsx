import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter, Switch, Route } from 'react-router-dom';
import PostsIndexContainer from './posts/postsIndexContainer';

const Root = ({store}) => {
  return (
    <Provider store={store}>
      <HashRouter>
        <Switch>
          <Route path="/" component={PostsIndexContainer}/>
        </Switch>
      </HashRouter>
    </Provider>
  );
};

export default Root;