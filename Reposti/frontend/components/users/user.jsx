import React from 'react';

export default class User extends React.Component {
  constructor(props){
    super(props);

  }

  componentDidMount(){
    this.props.fetchSingleUser(this.props.match.params.username)
  }

  render(){
    if (Object.keys(this.props.user).length < 1) return null;

    const posts = this.props.posts.map(post => {
      // replace this with a PostContainer or PostComponent later
      return (
        <li key={post.id}>
          Title: {post.title} <br/>
          Body: {post.body} <br/>
          Remember to replace with an actual container please. <br/>
          <br/>
        </li>
      );
    });
    return (
      <div className="user-div">
        <h2>{this.props.user.username}</h2>
        <ul>
          {posts}
        </ul>
      </div>
    );
  }
}