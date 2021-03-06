import React from 'react';

import PostContainer from '../posts/post_container.js';
import FollowContainer from '../follow/follow_container.js';

export default class User extends React.Component {
  constructor(props){
    super(props);
  }

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

    const userPosts = posts.sort((a,b) => b.id - a.id).map(post => {
      if (post !== undefined && post.id !== undefined){
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
        <div className="user-info">
          <img
            className="profile-pic-user-show"
            src={ user.profile_image_url === "" ? "https://68.media.tumblr.com/9f9b498bf798ef43dddeaa78cec7b027/tumblr_o51oavbMDx1ugpbmuo7_500.png" : user.profile_image_url }
            alt={user.username} />
          <h2 className="user-username">{user.username}</h2>
          {this.props.currUsername !== this.props.match.params.username ? <FollowContainer userId={this.props.match.params.username} /> : null}
        </div>

        {/* <h3>Following: {followings.length}</h3>
        <h3>Followers: {leadings.length}</h3> */}

        <ul className="user-posts">
          {userPosts}
        </ul>
      </div>
    );
  }
}