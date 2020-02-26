import React from 'react';

export default class PostIndex extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.requestAllPosts();
  }

  render (){
    const posts = this.props.posts
    if (Object.keys(posts).length < 1) return null;

    const p = posts.map(post => {
      return (
        <li key={post.id} className="post-index-li">
          Post Type: {post.post_type} <br/>
          Title: {post.title} <br/>
          Body: {post.body} <br/>
          <br/>
        </li>
      );
    });

    return (
      <div className="post-index">
        <ul className="post-index-ul">
          {p}
        </ul>
      </div>
    );
  }
}