import React from 'react';

import PostContainer from '../posts/post_container.js';
import FollowContainer from '../follow/follow_container.js';

export default class User extends React.Component {
  constructor(props){
    super(props);
  }

  // componentWillUpdate(prevProps){
  //   // debugger
  // }
  
//&& this.props.match.params.username !== undefined

  componentDidUpdate(prevProps){
    if (prevProps.match.params.username !== this.props.match.params.username ){
      this.props.fetchSingleUser(this.props.match.params.username)
    }
  }

  componentDidMount(){
    this.props.fetchSingleUser(this.props.match.params.username)
  }

  userNotFound(){
    return <img src="https://cdn.rswebsols.com/wp-content/uploads/2018/02/404-error-not-found.jpg" alt="404"/>
  }

  render(){
    const { user, posts, leadings, followings } = this.props;

    if (user === undefined || user.followers === undefined || user.leaders === undefined) return this.userNotFound();

    const userPosts = posts.map(post => {
      if (post.id !== undefined){
        return (
          <li key={post.id}>
            <PostContainer post={post} />
            <br/>
          </li>
        )
      }
    });
    
    return (
      <div className="user-div">
        <h2>{user.username}</h2>
        <img
          className="profile-pic-user-show"
          src={ user.profileImgUrl === "" ? "https://68.media.tumblr.com/9f9b498bf798ef43dddeaa78cec7b027/tumblr_o51oavbMDx1ugpbmuo7_500.png" : user.profileImgUrl }
          alt={user.username} />
        {this.props.currUsername !== this.props.match.params.username ? <FollowContainer /> : null}
        <h3>Following: {followings.length}</h3>
        <h3>Followers: {leadings.length}</h3>

        <ul>
          {userPosts}
        </ul>
      </div>
    );
  }
}