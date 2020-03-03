import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Like from './like.jsx';
import { createLike, deleteLike } from '../../actions/likes_actions.js';

const mapStateToProps = (state, ownProps) => {
  // Current User that is logged in
  let currentUser = state.session.id;

  let postId = ownProps.post.id;

  let like = Object.values(state.entities.likes).filter(like => like.liker_id === currentUser && like.post_id === postId)[0];

  return {
    currentUser: currentUser,
    postId: postId,
    like: like,
  }
};

const mapDispatchToProps = dispatch => ({
  createLike: like => dispatch(createLike(like)),
  deleteLike: like => dispatch(deleteLike(like))
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Like));