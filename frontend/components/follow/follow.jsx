import React from 'react';

export default class Follow extends React.Component {
  constructor(props){
    super(props);
  }


  follow(){
    const { currentUser, pageUserId, createFollow } = this.props;
    return <button className="follow-btn follow" onClick={() => createFollow({follower_id: currentUser, leader_id: pageUserId})}>Follow</button>
  }

  unfollow(){
    const { follow, deleteFollow } = this.props;
    return <button className="follow-btn unfollow" onClick={() => deleteFollow(follow)}>Unfollow</button>
  }

  render(){
    return (
      <div className='follow-component'>
        { this.props.follow === undefined ? this.follow() : this.unfollow() }
      </div>
    )
  }
}