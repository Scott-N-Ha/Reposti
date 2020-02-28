import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { login } from '../../actions/sessionActions.js';
import SessionForm from './sessionForm.jsx';

const mapStateToProps = ( state, ownProps ) => ({
  errors: Object.values(state.errors.session),
  formType: 'login'
});

const mapDispatchToProps = dispatch => ({
  login: (user) => dispatch(login(user))
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm));