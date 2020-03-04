import React from 'react';
import { Link } from 'react-router-dom';

import LikeContainer from '../../like/like_container.js';

export default class TextShow extends React.Component {
  constructor(props){
    super(props);

    this.deleteRender = this.deleteRender.bind(this);
  }

  deleteRender(){
    return <button onClick={() => this.props.deletePost(this.props.post)}>Delete Post</button>
  }

  render(){
    const { post, author, currUser, likes } = this.props;

    if (!([post, author, currUser].every(el => el !== undefined))) return null;

    return (
      <div className='text-show'>
        <span className='post-title'>{post.title}</span> 
          <Link to={`/${author.username}`}>{author.username}</Link>
          <p>{post.body}</p>
          {likes.length} notes <br/>
          <LikeContainer post={post} />
          { (currUser.id === author.id) ? this.deleteRender() : null }
      </div>
    )
  }
};