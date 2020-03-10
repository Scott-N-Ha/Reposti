import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Settings from './settings.jsx';
import { updateSingleUserWithImage } from '../../actions/users_actions.js';

const mapStateToProps = (state, ownProps) => {
  let currUserId = state.session.id;
  return {
    user: state.entities.users[currUserId],
  }
};

const mapDispatchToProps = dispatch => ({
  updateSingleUserWithImage: (user, data) => dispatch(updateSingleUserWithImage(user, data)),
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Settings));