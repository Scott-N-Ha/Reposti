import React from 'react';
import { Link } from 'react-router-dom';

import UserProfileImageContainer from '../users/user_profile_img_container.js';

export default class Following extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    const { currentUser, getUser } = this.props;

    // getUser(currentUser);
  }

  render(){
    const { leaders } = this.props;

    if (leaders === undefined || leaders.length < 1) return null;

    const leads = leaders.map(l => {
      return (
        <li key={l.id} className="followings-follow">
          <Link to={`${l.username}`}>
            <UserProfileImageContainer userId={l.id} />
            {l.username}
          </Link>
        </li>
      )
    });

    return (
      <div className="followings">
        <ul>
          {leads}
        </ul>
      </div>
    )
  }
};