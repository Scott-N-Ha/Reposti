import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import PostShow from './post_show.jsx';
import { fetchSinglePost } from '../../actions/posts_actions.js';

const mapStateToProps = (state, ownProps) => {
  let postId = Number(ownProps.match.params.postId);
  let post = state.entities.posts[postId];

  let author;
  let likes;
  let likers;

  if (post !== undefined){
    author = state.entities.users[post.author_id];
    likes = post.likes.map(like_id => state.entities.likes[like_id]);
    likers = post.likers.map(liker_id => state.entities.users[liker_id]);
  }

  return {
    post: post,
    author: author,
    likes: likes,
    likers: likers,
    stateLikes: state.entities.likes,
  }
};

const mapDispatchToProps = dispatch => ({
  fetchSinglePost: postId => dispatch(fetchSinglePost(postId)),
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(PostShow));