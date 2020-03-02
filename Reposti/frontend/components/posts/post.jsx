import React from 'react';

export default class Post extends React.Component {
  constructor(props){
    super(props);
    this.state = this.props.post;
  }

  render () {
    if (this.props.post === undefined ) return null;
    
    return (
      <div className='post-div' key={this.props.post.id}>
        This is a test render of post
        Title: {this.props.post.title} <br/>
        Body: {this.props.post.body} <br/>
      </div>
    )
  }
}