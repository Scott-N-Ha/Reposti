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

  postCreate(){
    let links = document.getElementsByClassName('top-links')[0];
    let test = document.getElementsByClassName('test-link-div')[0];

    links.classList.add('hidden');
    test.classList.remove('hidden');
  }

  postCancel(){
    let links = document.getElementsByClassName('top-links')[0];
    let test = document.getElementsByClassName('test-link-div')[0];

    links.classList.remove('hidden');
    test.classList.add('hidden');
  }
  
  render(){
    if (this.props.posts === undefined) return null;

    const posts = this.props.posts.sort((a,b) => b.id - a.id).map(post => {
      return <li key={post.id}><PostContainer post={post} /></li>;
    });

    return(
      <div className='main-feed'>

        <div className='top-links-container'>
          <div className='top-links'>
            <div className="top-link" onClick={this.postCreate}><i class="fas fa-font"></i> Text</div>
            <div className="top-link" onClick={this.postCreate}><i class="fas fa-camera"></i> Photo</div>
            <div className="top-link" onClick={this.postCreate}><i class="fas fa-quote-left"></i> Quote</div>
            <div className="top-link" onClick={this.postCreate}><i class="fas fa-link"></i> Link</div>
            <div className="top-link" onClick={this.postCreate}><i class="fas fa-comment-dots"></i> Chat</div>
            <div className="top-link" onClick={this.postCreate}><i class="fas fa-headphones"></i> Audio</div>
            <div className="top-link" onClick={this.postCreate}><i class="fas fa-video"></i> Video</div>
          </div>

          <div className="test-link-div hidden">
            Peekaboo
            <button onClick={this.postCancel}>Cancel</button>
          </div>
        </div>

        <h2>Feed:</h2>
        <ul>
          {posts}
        </ul>
      </div>
    )
  }
}