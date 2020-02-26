import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import PostIndex from './postsIndex.jsx';

import { fetchAllPosts } from '../../actions/postsActions.js';

// begin selectors
const selectAllPosts = ({ posts }) => Object.keys(posts).map(id => posts[id]);
// end selectors

const mS = (state, ownProps) => {
  return ({
    posts: selectAllPosts(state.entities)
  });
};

const mD = (dispatch, ownProps) => {
  return ({
    requestAllPosts: () => dispatch(fetchAllPosts())
  });
};

export default withRouter(connect(
  mS,
  mD
)(PostIndex));