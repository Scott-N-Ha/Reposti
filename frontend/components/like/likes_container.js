import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Likes from './likes.jsx';
import { fetchAllLikesForUser } from '../../actions/likes_actions.js';

const mapStateToProps = ({ session, entities: { users, likes, posts }}, ownProps) => {
  let userId = session.id;

  let userLikes = Object.values(likes).filter(like => like.liker_id === userId);

  let likedPostsIds = userLikes.map(like => like.post_id);
  let likedPosts = likedPostsIds.map(likedPostId => posts[likedPostId]);

  let likedPostsAuthorIds = likedPosts.map(post => post.author_id);
  let likedPostsAuthors = Object.values(likedPostsAuthorIds.map(author_id => users[author_id])).filter((value, index, self) => self.indexOf(value) === index);

  return {
    currUser: users[userId],
    likes: userLikes,
    posts: likedPosts,
    users: likedPostsAuthors,
  }
};

const mapDispatchToProps = dispatch => ({
  fetchAllLikesForUser: user => dispatch(fetchAllLikesForUser(user)),
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Likes));