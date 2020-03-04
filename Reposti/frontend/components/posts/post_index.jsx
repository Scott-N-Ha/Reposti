import React from 'react';

import PostContainer from './post_container.js';
import TextShowContainer from './text_form/text_show_container.js';
import QuoteShowContainer from './quote_form/quote_show_container.js';

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

    const posts = this.props.posts.sort((a,b) => b.id - a.id).map(post => {
      switch (post.post_type_id) {
        case 1:
          return <li key={post.id}><TextShowContainer post={post} /></li>;

        case 3:
          return <li key={post.id}><QuoteShowContainer post={post} /></li>;
      
        default:
          return <li key={post.id}><PostContainer post={post} /></li>;
      }
    });

    return(
      <div className='main-feed'>

        <div className='top-links-container'>
          <div className='top-links'>
            <button>Text</button>
            <button>Photo</button>
            <button>Quote</button>
            <button>Link</button>
            <button>Chat</button>
            <button>Audio</button>
            <button>Video</button>
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