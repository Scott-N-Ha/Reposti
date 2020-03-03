import React from 'react';
import { Link } from 'react-router-dom';

export default class Post extends React.Component {
  constructor(props){
    super(props);
    this.state = this.props.post;
  }

  render () {
    const { post, author } = this.props;

    if (post === undefined ) return null;

    return (
      <div className='post-div' key={post.id}>
        <h3>Title: {post.title}</h3>
        <h4>Author: <Link to={`/${author}`}>{author}</Link></h4>
        Body: {post.body} <br/>
      </div>
    )
  }
}