import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import UserProfileImage from './user_profile_img.jsx';

const mapStateToProps = ({entities: { users }}, ownProps) => {
  let user = users[ownProps.userId];
  
  if (user === undefined) return {};

  return {
    username: user.username,
    profile_image_url: user.profile_image_url,
  }
};

export default withRouter(connect(mapStateToProps)(UserProfileImage));