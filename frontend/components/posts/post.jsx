import React from 'react';
import { Link } from 'react-router-dom';

import LikeContainer from '../like/like_container.js';

export default class Post extends React.Component {
  constructor(props){
    super(props);
    this.state = this.props.post;

    this.deleteRender = this.deleteRender.bind(this);
  }

  deleteRender(){
    return <div onClick={() => this.props.deletePost(this.props.post)}><i class="fas fa-cog"></i></div>
  }

  renderText({title, body}){
    return (
      <div className="text-post">
        <span className='text-title'><h2>{title}</h2></span>
        <span className='text-body'>{body}</span>
      </div>
    )
  }

  renderPhoto({ photos }){
    const render = photos.map(photo => {
      return <img src={photo} className="photos-post-photo" />
    })

    return (
      <div className="photo-post">
        {render}
      </div>
    )
  }

  renderVideo({ video }){
    return <video width="540" height="304" controls className="video-player" autoPictureInPicture preload >
      <source src={video} />
      Your browser does not support this type of video.
    </video>
  }

  renderAudio({ audio }){
    return <audio controls className="audio-player" >
      <source src={audio} />
      Your browser does not support this type of audio.
    </audio>
  }

  renderQuote({title, body}){
    return (
      <div className="quote-post">
        <span className='quote-body'><h2>{body}</h2></span>
        &mdash; <span className='quote-title'>{title}</span>
      </div>
    )
  }

  renderLink({title, body}){
    return (
      <div className="link-post">
        <a href={body} className="link-link">
          <span className='link-title'>{title}</span> <br/>
          <span className='link-body'>{body}</span> <br/>
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

      case 6:
        return this.renderAudio(post);

      case 7:
        return this.renderVideo(post);
    
      default:
        return <div>This component has not been coded yet</div>;
    }
  }

  render () {
    const { post, author, currUser, likes } = this.props;

    if (!([post, author, currUser].every(el => el !== undefined))) return null;

    const postRender = this.chooseRender(post);

    return (
      <div className='post-div' key={post.id}>
        <Link to={`/${author.username}`}>{author.username}</Link>

        {postRender}

        <div className="post-footer">
            {likes.length} notes <br/>

          <div className="post-footer-options">
            <LikeContainer post={post} />
          { (currUser.id === author.id) ? this.deleteRender() : null }
          </div>
        </div>
      </div>
    )
  }
}