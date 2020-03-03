import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import User from './user.jsx';
import { fetchSingleUser } from '../../actions/users_actions.js';

const mapStateToProps = ({entities: { users, posts, follows }, session: { id }}, ownProps) => {
  let foundUser = Object.values(users).find(user => user.username === ownProps.match.params.username);
  let userPosts = foundUser !== undefined ? foundUser.posts !== undefined ? foundUser.posts.map(userId => posts[userId]) : [] : [];
  let currUser = users[id];

  let leadings = (foundUser !== undefined && follows !== undefined) ? Object.values(follows).filter(follow => follow.leader_id === foundUser.id) : [];
  let followings = (foundUser !== undefined && follows !== undefined) ? Object.values(follows).filter(follow => follow.follower_id === foundUser.id) : [];

  return {
    currUsername: currUser.username,
    user: foundUser,
    posts: userPosts,
    leadings: leadings,
    followings: followings,
  }
};

const mapDispatchToProps = dispatch => ({
  fetchSingleUser: user => dispatch(fetchSingleUser(user)),
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(User));