import React from 'react';

export default class Like extends React.Component {
  constructor(props){
    super(props);
  }

  like(){
    const { currentUser, postId, createLike } = this.props;
    return <button onClick={() => createLike({post_id: postId, liker_id: currentUser})}>Like</button>
  }

  unlike(){
    const { like, deleteLike } = this.props;
    return <button onClick={() => deleteLike(like)}>Unlike</button>
  }

  render(){
    return (
      <div className="like-component">
        { this.props.like === undefined ? this.like() : this.unlike() }
      </div>
    )
  }
}