import React from 'react';
import { Link } from 'react-router-dom';

export default class UserProfileImg extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    const { username, profileImgUrl } = this.props;

    if (username === undefined) return null;

    return (
      <Link to={`/${username}`} >
        <img
          className="profile-img-icon"
          src={ profileImgUrl === "" ? "https://68.media.tumblr.com/9f9b498bf798ef43dddeaa78cec7b027/tumblr_o51oavbMDx1ugpbmuo7_500.png" : profileImgUrl }
          alt={username} />
      </Link>
    )
  }
}