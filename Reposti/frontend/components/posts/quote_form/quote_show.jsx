import React from 'react';
import { Link } from 'react-router-dom';

import LikeContainer from '../../like/like_container.js';

export default class QuoteShow extends React.Component {
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
      <div className='quote-show'>
          <Link to={`/${author.username}`}>{author.username}</Link>
          <h1>{post.body}</h1>
          --- <span className='quote-source'>{post.title}</span> <br/>
          {likes.length} notes <br/>
          <LikeContainer post={post} />
          { (currUser.id === author.id) ? this.deleteRender() : null }
      </div>
    )
  }
};