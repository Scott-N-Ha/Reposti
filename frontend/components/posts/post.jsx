import React from 'react';
import { Link } from 'react-router-dom';

import LikeContainer from '../like/like_container.js';

export default class Post extends React.Component {
  constructor(props){
    super(props);
    this.state = this.props.statePost;

    this.deleteRender = this.deleteRender.bind(this);
  }

  componentDidUpdate(prevProps){
    
  }

  titleRender(title){
    return <div className="media-post-title">
      {title}
    </div>
  }

  bodyRender(body){
    return <div className="media-post-body">
      {body}
    </div>
  }

  deleteRender(){
    return <div onClick={() => this.props.deletePost(this.props.post)}><i className="fas fa-cog"></i></div>
  }

  renderText({title, body}){
    return (
      <div className="text-post">
        <span className='text-title'><h2>{title}</h2></span>
        <span className='text-body'>{body}</span>
      </div>
    )
  }

  renderPhoto({ photos, title, body }){
    const render = photos.map(photo => {
      return <img src={photo} className="photos-post-photo" />
    });

    return (
      <div className="photo-post">
        {render}
        {title !== null ? this.titleRender(title) : null}
        {body !== null ? this.bodyRender(body) : null}
      </div>
    )
  }

  renderVideo({ video, title, body }){
    return <div>
      <video width="540" height="304" controls className="video-player" >
        <source src={video} />
        Your browser does not support this type of video.
      </video>
      {title !== null ? this.titleRender(title) : null}
      {body !== null ? this.bodyRender(body) : null}
    </div>
  }

  renderAudio({ audio, title, body }){
    return <div>
        <audio controls className="audio-player" >
          <source src={audio} />
          Your browser does not support this type of audio.
        </audio>
        {title !== null ? this.titleRender(title) : null}
        {body !== null ? this.bodyRender(body) : null}
      </div>
  }

  renderQuote({title, body}){
    return (
      <div className="quote-post">
        <span className='quote-body'><h2>{body}</h2></span>
        &mdash; <span className='quote-title'>{title}</span>
      </div>
    )
  }

  renderChat({body}){
    return (
      <div className="chat-post">
        <span className="chat-body">{body}</span>
      </div>
    )
  }

  renderLink({title, body}){
    return (
      <div className="link-post">
        <a href={title} className="link-link" target="_blank">
          <span className='link-body underline-magic'>{body}</span> <br/>
        </a>
      </div>
    )
  }

  chooseRender(post){
    switch (post.post_type_id) {
      case 1:
        return this.renderText(post);

      case 2:
        return this.renderPhoto(post);

      case 3:
        return this.renderQuote(post);

      case 4:
        return this.renderLink(post);

      case 5:
        return this.renderChat(post);

      case 6:
        return this.renderAudio(post);

      case 7:
        return this.renderVideo(post);
    
      default:
        return <div>This component has not been coded yet</div>;
    }
  }

  render () {
    const { statePost, author, currUser, likes } = this.props;

    const post = statePost;

    if (!([post, author, currUser].every(el => el !== undefined))) return null;

    const postRender = this.chooseRender(post);

    return (
      <div className='post-div' key={post.id}>
        <div className="input-username"><Link to={`/${author.username}`} className="underline-magic">{author.username}</Link></div>
        {postRender}
        <div className="post-footer">
          <Link to={`/post/${post.id}`} className="underline-magic" >{post.likes.length} note{post.likes.length === 1 ? null : 's'}</Link>
          <div className="post-footer-options">
            <LikeContainer post={post} />
            { (currUser.id === author.id) ? this.deleteRender() : null }
          </div>
        </div>
      </div>
    )
  }
}