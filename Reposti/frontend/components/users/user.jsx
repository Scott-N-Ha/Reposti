import React from 'react';

import PostContainer from '../posts/post_container.js';

export default class User extends React.Component {
  constructor(props){
    super(props);

  }

  // componentWillMount(){
  //   debugger
  // }

  componentWillUpdate(prevProps){
    // debugger
  }
  
  componentDidUpdate(prevProps){
    if (prevProps.match.params.username !== this.props.match.params.username){
      this.props.fetchSingleUser(this.props.match.params.username)
    }
  }

  componentDidMount(){
    this.props.fetchSingleUser(this.props.match.params.username)
    // debugger
  }

  render(){
    if (this.props.user === undefined) return null;

    // debugger

    const posts = this.props.posts.map(post => {
      // replace this with a PostContainer or PostComponent later
      return (
        <li>
          <PostContainer post={post} />
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