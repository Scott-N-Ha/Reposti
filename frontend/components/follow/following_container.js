import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Following from './following.jsx';
import { fetchFollows } from '../../actions/follows_action.js';

const mapStateToProps = ({ entities: { users, follows }, session }, ownProps) => {
  let currentUser = users[session.id];
  let leaders = [];

  if (currentUser.leaders){
    leaders = currentUser.leaders.map(leadId => {
      let lead = follows[leadId];
      return users[lead.leader_id];
    });
  }

  return {
    currentUser: currentUser,
    leaders: leaders,
  }
};

const mapDispatchToProps = dispatch => ({
  fetchFollows: user => dispatch(fetchFollows(user)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Following));