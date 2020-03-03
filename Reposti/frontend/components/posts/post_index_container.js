import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import PostIndex from './post_index.jsx';
import { fetchSingleUser } from '../../actions/users_actions.js';

const mapStateToProps = ({entities: { users, posts, follows }, session: { id }}, ownProps) => {
  let currUser = users[id];
  let currUserFollows = currUser.leaders === undefined ? [] : Object.values(follows).filter(follow => currUser.leaders.includes(follow.id)).map(follow => follow.leader_id);
  let showPosts = Object.values(posts).filter(post => post.author_id === currUser.id || currUserFollows.includes(post.author_id));
  
  return {
    currUser: currUser,
    posts: showPosts,
}};

const mapDispatchToProps = dispatch => ({
  fetchSingleUser: user => dispatch(fetchSingleUser(user)),
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(PostIndex));