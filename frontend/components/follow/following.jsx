import React from 'react';
import { Link } from 'react-router-dom';

import UserProfileImageContainer from '../users/user_profile_img_container.js';
import FollowContainer from './follow_container.js';

export default class Following extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    const { currentUser, fetchFollows } = this.props;
    
    fetchFollows(currentUser);
  }

  render(){
    const { leaders } = this.props;

    if (leaders === undefined) return null;

    const leads = leaders.map(l => {
      return (
        <li key={l.id} className="followings-follow" >
          <Link to={`${l.username}`} className="followings-link" >
            <UserProfileImageContainer userId={l.id} />
            {l.username} 
          </Link>
          <FollowContainer userId={l.username} />
        </li>
      )
    });

    if (leads.length < 1) return (
      <div className="followings">
        You are not following anyone.
      </div>
    )

    return (
      <div className="followings">
        <ul>
          {leads}
        </ul>
      </div>
    )
  }
};