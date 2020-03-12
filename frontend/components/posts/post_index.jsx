import React from 'react';
import { Link } from 'react-router-dom';

import PostContainer from './post_container.js';
import UserProfileImageContainer from '../users/user_profile_img_container.js';

export default class PostIndex extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      post_type_id: 1,
      title: "",
      body: "",
      photoUrls: [],
      photos: [],
      videoUrl: "",
      video: null,
      audioUrl: "",
      audio: null,
    }

    this.postCreate = this.postCreate.bind(this);
    this.postCancel = this.postCancel.bind(this);
    this.chooseRender = this.chooseRender.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handlePhotos = this.handlePhotos.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleVideo = this.handleVideo.bind(this);
    this.handleAudio = this.handleAudio.bind(this);
  }

  componentDidMount(){
    this.props.fetchSingleUser(this.props.currUser.username);
  }

  postCreate(postType){
    let links = document.getElementsByClassName('top-links')[0];
    let test = document.getElementsByClassName('input-div')[0];

    links.classList.add('hidden');
    test.classList.remove('hidden');
    
    this.setState({
      post_type_id: postType,
    });
  }

  postCancel(){
    event.preventDefault();

    let links = document.getElementsByClassName('top-links')[0];
    let test = document.getElementsByClassName('input-div')[0];

    links.classList.remove('hidden');
    test.classList.add('hidden');

    this.setState({
      title: "",
      body: "",
      photoUrls: [],
      photos: [],
      videoUrl: "",
      video: null,
      audioUrl: "",
      audio: null,
    });

    document.querySelectorAll('.input-button').forEach(btn => {
      btn.disabled = false;
      btn.classList.remove('disabled');
    });
    
    document.querySelector('.input-button.post-btn').textContent = "Post";
  }

  handleChange(e){
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handlePhotos(e){
    const files = e.currentTarget.files;
    
    if (files.length > 8) {
      document.getElementById('photos-uploader').value = "";
      return null;
    }
    
    Object.keys(files).forEach(id => {
      let file = files[id];

      const photoReader = new FileReader();

      let that = this;

      photoReader.onloadend = () => {
        const currentArr = that.state.photoUrls;
        currentArr.push(photoReader.result);
        that.setState({photoUrls: currentArr});
      }
      
      if (file) {
        const currentPhotos = that.state.photos;
        currentPhotos.push(file);
        that.setState({photos: currentPhotos});
        photoReader.readAsDataURL(file);
      }
    })
  }

  handleVideo(e){
    const file = e.currentTarget.files[0];

    const videoReader = new FileReader();
    let that = this;

    videoReader.onloadend = () => {
      that.setState({videoUrl: videoReader.result});
    }

    if (file){
      this.setState({video: file});
      videoReader.readAsDataURL(file);
    }
  }

  handleAudio(e){
    const file = e.currentTarget.files[0];

    const audioReader = new FileReader();
    let that = this;

    audioReader.onloadend = () => {
      that.setState({audioUrl: audioReader.result});
    }

    if (file){
      this.setState({audio: file});
      audioReader.readAsDataURL(file);
    }
  }

  inputImageClick(photoUrlIdx){
    if (this.state.photoUrls[photoUrlIdx] && this.state.photos[photoUrlIdx]){
      let photoUrl = this.state.photoUrls[photoUrlIdx];
      let photo = this.state.photos[photoUrlIdx];
      return () => {
        this.setState({
          photoUrls: this.state.photoUrls.filter(pU => pU !== photoUrl),
          photos: this.state.photos.filter(p => p !== photo),
        });
      }
    }
  }

  handleSubmit(e){
    e.preventDefault();

    document.querySelectorAll('.input-button').forEach(btn => {
      btn.disabled = true;
      btn.classList.add('disabled');
    });

    document.querySelector('.input-button.post-btn').textContent = "Uploading Post...";

    const { post_type_id, photos, video, audio, title, body } = this.state;
    const { currUser, createPost, createMediaPost } = this.props;

    let formData = new FormData();
    formData.append('post[post_type_id]', post_type_id);
    formData.append('post[author_id]', currUser.id);
    if (title !== "") formData.append('post[title]', title);
    if (body !== "") formData.append('post[body]', body);

    switch (post_type_id) {
      case 2:
        for (let i = 0; i < photos.length; i++) {
          formData.append("post[photos][]", photos[i]);
        }

        createMediaPost(formData)
          .then(() => this.postCancel())
          .fail(() => this.postCancel());
        break;

      case 6:
        formData.append("post[audio]", audio);

        createMediaPost(formData)
          .then(() => this.postCancel())
          .fail(() => this.postCancel());
        break;

      case 7:
        formData.append("post[video]", video);

        createMediaPost(formData)
          .then(() => this.postCancel())
          .fail(() => this.postCancel());
        break;

      default:
        let newState = {
          post_type_id: post_type_id,
          author_id: currUser.id,
          title: title,
          body: body,
        }

        createPost(newState)
          .then(() => this.postCancel())
          .fail(() => this.postCancel());
        break;
    }
  }

  chooseRender(){
    const { post_type_id, title, body, photoUrls } = this.state;

    switch (post_type_id) {
      case 1:
        return (
          <div className="text-post">
            <input className="text-title" type="text" name="title" value={title} onChange={this.handleChange} placeholder="Title" /> <br/>
            <textarea className="text-body" name="body" cols="30" rows="10" value={body} onChange={this.handleChange} placeholder="Your text here" />
          </div>
        );

      case 2:

        const photos = photoUrls.map((photoUrl, pu_idx) => {
          return <img src={photoUrl} className="photos-post-photo photo-preview" onClick={this.inputImageClick(pu_idx)} />
        })

        if (photoUrls.length < 8){
          return (
            <div className="photo-post">
              {photos}
              <div className="photo-button">
                <label className="photo-button-text" htmlFor="photos-uploader">
                  <i className="fas fa-camera"></i>
                  <div>Upload {photoUrls.length < 1 ? "a Photo" : "more Photos"}</div>
                  <div>{":)"}</div>
                </label>
                  <div className="hidden">
                  <input className="photo-input" type="file" name="photos" id="photos-uploader" multiple accept="image/*" onChange={this.handlePhotos} />
                  </div>
              </div>
              <input className="media-input-title" type="text" name="title" value={title} onChange={this.handleChange} placeholder="Title of the Photos" /> <br/>
              <input className="media-input-body" name="body" value={body} onChange={this.handleChange} placeholder="Add a description, if you'd like" /> <br/>
            </div>
          );
        } else {
          return <div>Too many photos attempted to upload. Please cancel or finish uploading.</div>;
        }

      case 3:
        return (
          <div className="quote-post">
            <h2>"<input className="quote-body" name="body" value={body} onChange={this.handleChange} placeholder="Quote" />"</h2> <br/>
            &mdash; <input className="quote-title" type="text" name="title" value={title} onChange={this.handleChange} placeholder="Source" /> <br/>
          </div>
        );

      case 4:
        return (
          <div className="link-post">
            <input className="link-title" type="text" name="title" value={title} onChange={this.handleChange} placeholder="Type or paste a URL" /> <br/>
            <input className="link-body" name="body" value={body} onChange={this.handleChange} placeholder="Add a description, if you'd like" /> <br/>
          </div>
        )

      case 6:
        let audio;
        if(this.state.audioUrl !== ""){
          audio = <audio controls className="audio-player">
            <source src={this.state.audioUrl} />
            Your browser does not support this type of audio.
          </audio>
        } else {
          audio = <div className="audio-button">
              <label className="audio-button-text" htmlFor="audio-uploader" >
                <i className="fas fa-file-audio"></i>
                <div>Upload an audio file</div>
              </label>
              <div className="hidden">
                <input className="audio-input" type="file" id="audio-uploader" name="audio-uploader" accept="audio/*" onChange={this.handleAudio} />
              </div>
            </div>
        }

        return (
          <div className="audio-post">
            {audio}
            <input className="media-input-title" type="text" name="title" value={title} onChange={this.handleChange} placeholder="Title of the Audio" /> <br/>
            <input className="media-input-body" name="body" value={body} onChange={this.handleChange} placeholder="Add a description, if you'd like" /> <br/>
          </div>
        )

      case 7:
        let video;
        if(this.state.videoUrl !== ""){
          video = <video width="540" height="304" controls className="video-player" >
            <source src={this.state.videoUrl} />
            Your browser does not support this type of video.
          </video>
        } else {
          video = <div className="video-button">
              <label className="video-button-text" htmlFor="video-uploader" >
                <i className="fas fa-file-video"></i>
                <div>Upload a video file</div>
              </label>
              <div className="hidden">
                <input className="video-input" type="file" id="video-uploader" name="video-uploader" accept="video/*" onChange={this.handleVideo} />
              </div>
            </div>
        }

        return (
          <div className="video-post">
            {video}
            <input className="media-input-title" type="text" name="title" value={title} onChange={this.handleChange} placeholder="Title of the video" /> <br/>
            <input className="media-input-body" name="body" value={body} onChange={this.handleChange} placeholder="Add a description, if you'd like" /> <br/>
          </div>
        )
    
      default:
        return <div>This component has not been coded yet</div>;
    }
  }
  
  render(){
    if (this.props.posts === undefined) return null;

    const { currUser } = this.props;

    const posts = this.props.posts.sort((a,b) => b.id - a.id).map(post => {
      return (
        <li className="post-index-post" key={post.id}>
          <UserProfileImageContainer userId={post.author_id} />
          <PostContainer post={post} />
        </li>
        );
    });

    return(
      <div className='main-feed'>
        <ul className="main-feed-ul">
          <li className="top-container" key="-1">
            <UserProfileImageContainer userId={currUser.id} />
            <div className='top-links-container'>
              <ul className='top-links'>
                <div className="top-link-wrap">
                <li className="top-link" onClick={() => this.postCreate(1)}><i className="fas fa-font"></i> Text</li>
                </div>
                <div className="top-link-wrap">
                <li className="top-link" onClick={() => this.postCreate(2)}><i className="fas fa-camera" style={{color: "#ff5c44"}}></i> Photo</li>
                </div>
                <div className="top-link-wrap">
                <li className="top-link" onClick={() => this.postCreate(3)}><i className="fas fa-quote-left" style={{color: "#ff961a"}}></i> Quote</li>
                </div>
                <div className="top-link-wrap">
                <li className="top-link" onClick={() => this.postCreate(4)}><i className="fas fa-link" style={{color: "#1ad44a"}}></i> Link</li>
                </div>
                <div className="top-link-wrap">
                <li className="top-link" onClick={() => this.postCreate(5)}><i className="fas fa-comment-dots" style={{color: "#1abfff"}}></i> Chat</li>
                </div>
                <div className="top-link-wrap">
                <li className="top-link" onClick={() => this.postCreate(6)}><i className="fas fa-headphones" style={{color: "#896dff"}}></i> Audio</li>
                </div>
                <div className="top-link-wrap">
                <li className="top-link" onClick={() => this.postCreate(7)}><i className="fas fa-video" style={{color: "#ff72d3"}}></i> Video</li>
                </div>
              </ul>
            <div className="input-div hidden">
              <div className="input-username">{currUser.username}</div>
              <form>
                {this.chooseRender()} <br/>
                <div className="input-buttons-div">
                  <button onClick={this.postCancel} className="input-button cancel-btn">Close</button>
                  <button onClick={this.handleSubmit} className="input-button post-btn" >Post</button>
                </div>
              </form>
            </div>
          </div>
        </li>
          {posts}
        </ul>
      </div>
    )
  }
}