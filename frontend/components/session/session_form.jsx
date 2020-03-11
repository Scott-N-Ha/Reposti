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
    this.handleDemo = this.handleDemo.bind(this);
    this.demoLogin = this.demoLogin.bind(this);
    this.loginButtonRender = this.loginButtonRender.bind(this);
    this.handleRerouteToLogin = this.handleRerouteToLogin.bind(this);
  }

  handleChange(e){
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e){
    e.preventDefault();

    this.props.action(this.state);
  }

  showEmail(){
    return (
      <div>
          <input type="text" name="email" onChange={this.handleChange} value={this.state.email} placeholder="Email" />
      </div>
    )
  }

  handleDemo(e){
    e.preventDefault();

    this.setState({username: 'test', password: 'password'});
    
    const demo = {
      username: 'test',
      password: 'password'
    }

    this.props.action(demo);
  }

  demoLogin(){
    return (
      <button onClick={this.handleDemo}>Demo Login</button>
    );
  }

  handleRerouteToLogin(e){
    e.preventDefault();

    this.props.history.push("/login");
  }

  loginButtonRender(){
    return (
      <button onClick={this.handleRerouteToLogin} className="session-login-button">Log In</button>
    );
  }

  render(){
    let buttonText = this.props.formType === 'signup' ? 'Sign Up' : 'Log In';
    return (
      <form className="session-form">
        <span className="reposti">reposti</span>
          <input type="text" name="username" onChange={this.handleChange} value={this.state.username} placeholder="Username" />
        { this.props.formType === 'signup' ? this.showEmail() : null } 
          <input type="password" name="password" onChange={this.handleChange} value={this.state.password} placeholder="Password" />
        <button onClick={this.handleSubmit} className="main-button" >{buttonText}</button>
        { this.props.formType === 'login' ? this.demoLogin() : this.loginButtonRender() }
      </form>
    );
  }
}