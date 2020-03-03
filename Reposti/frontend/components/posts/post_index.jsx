import React from 'react';

import PostContainer from './post_container.js';

export default class PostIndex extends React.Component {
  constructor(props){
    super(props);

    // debugger
  }

  componentDidMount(){
    this.props.fetchSingleUser(this.props.currUser.username);
  }
  
  render(){
    if (this.props.posts === undefined) return null;

    const posts = this.props.posts.map(post => {
      return <li key={post.id}><PostContainer post={post} /></li>
    });

    return(
      <div className='main-feed'>
        <h2>Feed:</h2>
        <ul>
          {posts}
        </ul>
      </div>
    )
  }
}