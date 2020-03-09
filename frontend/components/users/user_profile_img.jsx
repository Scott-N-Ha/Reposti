import React from 'react';
import { Link } from 'react-router-dom';

export default class UserProfileImage extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    const { username, profile_image_url } = this.props;

    if (username === undefined) return null;

    return (
      <div className="post-img-icon">
      <Link to={`/${username}`} className="sticky-test" >
        <img
          className="profile-img-icon"
          src={ profile_image_url === "" ? "https://68.media.tumblr.com/9f9b498bf798ef43dddeaa78cec7b027/tumblr_o51oavbMDx1ugpbmuo7_500.png" : profile_image_url }
          alt={username} />
      </Link>
      </div>
    )
  }
}