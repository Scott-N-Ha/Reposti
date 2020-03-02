import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { signup } from '../../actions/session_actions.js';
import SessionForm from './session_form.jsx';

const mapStateToProps = ( state, ownProps ) => ({
  errors: Object.values(state.errors.session),
  formType: 'signup'
});

const mapDispatchToProps = dispatch => ({
  action: (user) => dispatch(signup(user))
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm));