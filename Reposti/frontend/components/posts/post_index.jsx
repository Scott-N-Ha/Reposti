import React from 'react';

import PostContainer from './post_container.js';


export default class PostIndex extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      post_type_id: 1,
      title: "",
      body: "",
    }



    this.postCreate = this.postCreate.bind(this);
    this.postCancel = this.postCancel.bind(this);
    this.chooseRender = this.chooseRender.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount(){
    this.props.fetchSingleUser(this.props.currUser.username);
  }

  postCreate(postType){
    let links = document.getElementsByClassName('top-links')[0];
    let test = document.getElementsByClassName('test-link-div')[0];

    links.classList.add('hidden');
    test.classList.remove('hidden');
    
    this.setState({
      post_type_id: postType,
    });
  }

  postCancel(){
    event.preventDefault();

    let links = document.getElementsByClassName('top-links')[0];
    let test = document.getElementsByClassName('test-link-div')[0];

    links.classList.remove('hidden');
    test.classList.add('hidden');

    this.setState({
      title: "",
      body: "",
    });
  }

  handleChange(e){
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit(e){
    e.preventDefault();

    // const { title, body, post_type_id } = this.state;
    // const { currUser }

    this.props.createPost(Object.assign(this.state, {author_id: this.props.currUser.id})).then(() => this.postCancel())
  }

  chooseRender(){
    const { post_type_id, title, body } = this.state;

    switch (post_type_id) {
      case 1:
        return (
          <div className="text-post">
            <input type="text" name="title" value={title} onChange={this.handleChange} placeholder="Title" /> <br/>
            <textarea name="body" cols="30" rows="10" value={body} onChange={this.handleChange} placeholder="Your text here" />
          </div>
        );

      case 3:
        return (
          <div className="quote-post">
            <h2>"<input name="body" value={body} onChange={this.handleChange} placeholder="Quote" />"</h2> <br/>
            &mdash; <input type="text" name="title" value={title} onChange={this.handleChange} placeholder="Source" /> <br/>
          </div>
        );

      case 4:
        return (
          <div className="link-post">
            <input type="text" name="title" value={title} onChange={this.handleChange} placeholder="Type or paste a URL" /> <br/>
            <input name="body" value={body} onChange={this.handleChange} placeholder="Add a description, if you like" /> <br/>
          </div>
        )
    
      default:
        return <div>This component has not been coded yet</div>;
    }
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
            <div className="top-link" onClick={() => this.postCreate(1)}><i class="fas fa-font"></i> Text</div>
            <div className="top-link" onClick={() => this.postCreate(2)}><i class="fas fa-camera"></i> Photo</div>
            <div className="top-link" onClick={() => this.postCreate(3)}><i class="fas fa-quote-left"></i> Quote</div>
            <div className="top-link" onClick={() => this.postCreate(4)}><i class="fas fa-link"></i> Link</div>
            <div className="top-link" onClick={() => this.postCreate(5)}><i class="fas fa-comment-dots"></i> Chat</div>
            <div className="top-link" onClick={() => this.postCreate(6)}><i class="fas fa-headphones"></i> Audio</div>
            <div className="top-link" onClick={() => this.postCreate(7)}><i class="fas fa-video"></i> Video</div>
          </div>

          <div className="test-link-div hidden">
            <form>
              Peekaboo {this.state.post_type_id} <br/>
              {this.chooseRender()} <br/>

              <div>
                <button onClick={this.postCancel} >Cancel</button>
                <button onClick={this.handleSubmit} >Post</button>
              </div>

            </form>

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