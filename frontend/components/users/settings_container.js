import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Settings from './settings.jsx';
import { updateSingleUser, updateSingleUserWithImage } from '../../actions/users_actions.js';

const mapStateToProps = (state, ownProps) => {
  let currUserId = state.session.id;
  return {
    user: state.entities.users[currUserId],
  }
};

const mapDispatchToProps = dispatch => ({
  updateSingleUser: user => dispatch(updateSingleUser(user)),
  updateSingleUserWithImage: user => dispatch(updateSingleUserWithImage(user)),
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Settings));