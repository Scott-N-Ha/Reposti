import React from 'react';

export default class SessionForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
      renderErrors: false
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e){
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit(e){
    e.preventDefault();

    this.props.action(this.state)
  }

  showEmail(){
    return (
      <div>
        <label>Email:
          <input type="text" name="email" onChange={this.handleChange} value={this.state.email} />
        </label><br/>
      </div>
    )
  }

  render(){
    let buttonText = this.props.formType === 'signup' ? 'Sign Up' : 'Log In';
    return (
      <form className="session-form">
        <label>Username:
          <input type="text" name="username" onChange={this.handleChange} value={this.state.username} />
        </label><br/>
        {(this.props.formType === 'signup') ? this.showEmail() : <div></div>}
        <label>Password: 
          <input type="password" name="password" onChange={this.handleChange} value={this.state.password} />
        </label><br/>
        <button onClick={this.handleSubmit}>{buttonText}</button>
      </form>
    );
  }
}