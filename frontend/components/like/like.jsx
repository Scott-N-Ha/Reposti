import React from 'react';

export default class Like extends React.Component {
  constructor(props){
    super(props);
  }

  like(){
    const { currentUser, postId, createLike } = this.props;
    return <div className="liked" onClick={() => createLike({post_id: postId, liker_id: currentUser})}><i class="far fa-heart"></i></div>
  }

  unlike(){
    const { like, deleteLike } = this.props;
    return <div className="unliked" onClick={() => deleteLike(like)}><i class="fas fa-heart"></i></div>
  }

  render(){
    return (
      <div className="like-component">
        { this.props.like === undefined ? this.like() : this.unlike() }
      </div>
    )
  }
}