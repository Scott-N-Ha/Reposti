import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { logout } from '../../actions/session_actions.js';
import { fetchSingleUser } from '../../actions/users_actions.js';
import NavBar from './nav_bar.jsx';

const mapStateToProps = (state, ownProps) => {
  // 
  return {
    currentUser: state.entities.users[state.session.id]
  };
};

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  getUser: user => dispatch(fetchSingleUser(user)),
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBar));