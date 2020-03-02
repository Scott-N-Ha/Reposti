import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { login } from '../../actions/session_actions.js';
import SessionForm from './session_form.jsx';

const mapStateToProps = ( state, ownProps ) => ({
  errors: Object.values(state.errors.session),
  formType: 'login'
});

const mapDispatchToProps = dispatch => ({
  action: (user) => dispatch(login(user))
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm));