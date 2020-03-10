import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Following from './following.jsx';
import { fetchSingleUser } from '../../actions/users_actions.js';

const mapStateToProps = ({ entities: { users, follows }, session }, ownProps) => {
  let currentUser = users[session.id];
  let leaders = currentUser.leaders.map(leadId => {
    let lead = follows[leadId];
    return users[lead.leader_id];
  });
  debugger
  
  return {
    currentUser: currentUser,
    leaders: leaders,
  }
}

const mapDispatchToProps = dispatch => ({
  getUser: user => dispatch(fetchSingleUser(user)),
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Following));