import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Post from './post.jsx';
import { deletePost } from '../../actions/posts_actions.js';

const mapStateToProps = ({entities: { users, likes }, session: { id }}, ownProps) => {
  let currUser = users[id];
  // let likesOnPost = Object.values(likes).filter(like => like.post_id === ownProps.post.id)

  return {
    author: users[ownProps.post.author_id],
    currUser: currUser,
  }
}

const mapDispatchToProps = dispatch => ({
  deletePost: post => dispatch(deletePost(post)),
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Post));