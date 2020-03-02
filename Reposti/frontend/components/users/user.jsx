import React from 'react';

import PostContainer from '../posts/post_container.js';

export default class User extends React.Component {
  constructor(props){
    super(props);
    
  }

  // componentWillMount(){
  //   debugger
  // }

  // componentWillUpdate(prevProps){
  //   // debugger
  // }
  
  componentDidUpdate(prevProps){
    if (prevProps.match.params.username !== this.props.match.params.username){
      this.props.fetchSingleUser(this.props.match.params.username)
    }
  }

  componentDidMount(){
    this.props.fetchSingleUser(this.props.match.params.username)
  }

  render(){
    const { user, posts } = this.props;

    if (user === undefined || user.followers === undefined || user.leaders === undefined) return null;

    const userPosts = posts.map(post => {
      return (
        <li>
          <PostContainer post={post} />
          <br/>
        </li>
      );
    });

    // debugger
    
    return (
      <div className="user-div">
        <h2>{user.username}</h2>
        <h3>Following: {user.leaders.length}</h3>
        <h3>Followers: {user.followers.length}</h3>

        <ul>
          {userPosts}
        </ul>
      </div>
    );
  }
}