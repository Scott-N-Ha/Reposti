import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Post from './post.jsx';
import { deletePost } from '../../actions/posts_actions.js';

const mapStateToProps = ({entities: { users, likes, posts }, session: { id }}, { post }) => {
  let currUser = users[id];

  let postLikes = Object.values(likes).filter(like => like.post_id === post.id);

  return {
    author: users[post.author_id],
    currUser: currUser,
    statePost: posts[post.id],
    likes: postLikes,
  }
}

const mapDispatchToProps = dispatch => ({
  deletePost: post => dispatch(deletePost(post)),
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Post));