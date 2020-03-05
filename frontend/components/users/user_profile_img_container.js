import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import UserProfileImg from './user_profile_img.jsx';

const mapStateToProps = ({entities: { users }}, ownProps) => {
  let user = users[ownProps.userId];

  return {
    username: user.username,
    profileImgUrl: user.profileImgUrl,
  }
};

export default withRouter(connect(mapStateToProps)(UserProfileImg));