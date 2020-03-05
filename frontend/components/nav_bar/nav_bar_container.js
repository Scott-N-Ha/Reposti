import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { logout } from '../../actions/session_actions.js';
import NavBar from './nav_bar.jsx';

const mapStateToProps = ({ session, entities: { users }}) => ({
  currentUser: users[session.id]
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBar));