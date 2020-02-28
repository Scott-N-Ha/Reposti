import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { signup } from '../../actions/sessionActions.js';
import SessionForm from './sessionForm.jsx';

const mapStateToProps = ( state, ownProps ) => ({
  errors: Object.values(state.errors.session),
  formType: 'signup'
});

const mapDispatchToProps = dispatch => ({
  signup: (user) => dispatch(signup(user))
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm));