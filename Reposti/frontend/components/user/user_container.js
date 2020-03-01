import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import User from './user.jsx';
import { fetchSingleUser } from '../../actions/users_actions.js';

const mapStateToProps = ({entities: { users, posts }}, ownProps) => {
  debugger
  return {

  };
};

const mapDispatchToProps = dispatch => ({
  fetchSingleUser: user => dispatch(fetchSingleUser(user))
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(User));