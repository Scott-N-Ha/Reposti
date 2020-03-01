import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import User from './user.jsx';
import { fetchSingleUser } from '../../actions/users_actions.js';

const mapStateToProps = ({entities: { users, posts }}, ownProps) => {
  let foundUser = Object.values(users).find(user => user.username === ownProps.match.params.username)

  return {
    user: foundUser,
    posts: foundUser.posts ? foundUser.posts.map(id => posts[id]) : [],
  };
};

const mapDispatchToProps = dispatch => ({
  fetchSingleUser: user => dispatch(fetchSingleUser(user)),
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(User));