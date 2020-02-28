import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import NavBar from './navBar.jsx';
import { logout } from '../../actions/sessionActions.js';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NavBar));