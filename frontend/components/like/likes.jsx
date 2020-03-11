import React from 'react';

import PostContainer from '../posts/post_container.js';
import UserProfileImageContainer from '../users/user_profile_img_container.js';

export default class Likes extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    const { currUser, fetchAllLikesForUser } = this.props;

    if (currUser !== undefined && fetchAllLikesForUser !== undefined) fetchAllLikesForUser(currUser);
  }

  render(){
    const { currUser, posts, users, likes } = this.props;

    if(currUser === undefined) return null;

    const likedPosts = posts.sort((a,b) => b.id - a.id).map(post => {
      if (post.id !== undefined){
        return (
          <li className="post-index-post" key={post.id}>
            <UserProfileImageContainer userId={post.author_id} />
            <PostContainer post={post} />
          </li>
        )
      }
    });

    if (likedPosts.length < 1) return (
      <div className="no-likes">
        No liked posts.
        <br/>
        Go browse and like some posts!
      </div>
    )

    return (
      <div className="main-feed">
        <ul className="main-feed-ul">
          {likedPosts}
        </ul>
      </div>
    )
  }
};