import React from 'react';

export default class PostForm extends React.Component {
  constructor(props){
    super(props);
    this.state = this.props.post;

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e){
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit(){
    e.preventDefault();

    this.props.action(this.state);
  }

  renderTitle(){

    return <div className='post-form-title'>
      <label>Title:
        <input type="text" name="title" value={this.state.title} onChange={this.handleChange} />
      </label>
    </div>
  }

  renderBody(){

    return <div className='post-form-body'>
      <label>Body:
        <textarea name="body" cols="30" rows="10" value={this.state.body} onChange={this.handleChange} />
      </label>
    </div>
  }

  render(){

    return (
      <div className='post-form-div'>
        <h2>{this.props.formType}</h2>

        <form className='post-form' onSubmit={this.handleSubmit}>

        </form>
      </div>
    )
  }
}