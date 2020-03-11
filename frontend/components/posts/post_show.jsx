import React from 'react';

import PostContainer from '../posts/post_container.js';
import UserProfileImageContainer from '../users/user_profile_img_container.js';

export default class PostShow extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    const { fetchSinglePost, match: { params: { postId } } } = this.props;

    if (fetchSinglePost !== undefined) fetchSinglePost(postId);
  }

  postNotFound(){
    return <img src="https://cdn.rswebsols.com/wp-content/uploads/2018/02/404-error-not-found.jpg" alt="404"/>
  }

  render(){
    const { post } = this.props;

    if (post === undefined) return this.postNotFound();
    
    const postShow = <li className="post-index-post" key={post.id}>
      <UserProfileImageContainer userId={post.author_id} />
      <PostContainer post={post} />
    </li>

    return (
      <div className="main-feed">
        <ul className="main-feed-ul">
          {postShow}
        </ul>
      </div>
    )
  }
};