import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Follow from './follow.jsx';
import { createFollow, deleteFollow } from '../../actions/follows_action.js';

const mapStateToProps = (state, ownProps) => {

  // Current User that is logged in
  let currentUser = state.session.id;

  // The User Page we are currently on
  let currPageUsername = ownProps.match.params.username;
  let currPageUserId = Object.values(state.entities.users).filter(user => user.username === currPageUsername)[0].id;

  let follow = Object.values(state.entities.follows).filter(follow => follow.leader_id === currPageUserId && follow.follower_id === currentUser)[0];

  return {
    currentUser: currentUser,
    pageUserId: currPageUserId,
    follow: follow,
}};

const mapDispatchToProps = dispatch => ({
  createFollow: follow => dispatch(createFollow(follow)),
  deleteFollow: follow => dispatch(deleteFollow(follow))
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Follow));