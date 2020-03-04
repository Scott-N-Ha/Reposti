import React from 'react';
import { Link } from 'react-router-dom';

import LikeContainer from '../like/like_container.js';

export default class Post extends React.Component {
  constructor(props){
    super(props);
    this.state = this.props.post;

    this.deleteRender = this.deleteRender.bind(this);
  }

  deleteRender(){
    return <button onClick={() => this.props.deletePost(this.props.post)}>Delete Post</button>
  }

  render () {
    const { post, author, currUser } = this.props;

    // if (post === undefined || author  ) return null;

    if (!([post, author, currUser].every(el => el !== undefined))) return null;

    return (
      <div className='post-div' key={post.id}>
        <span className='post-title'>{post.title}</span> 
        <h4>Author: <Link to={`/${author.username}`}>{author.username}</Link></h4>
        Body: {post.body} <br/>
        { (currUser.id === author.id) ? this.deleteRender() : null } <LikeContainer post={post} />
      </div>
    )
  }
}