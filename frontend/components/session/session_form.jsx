import React from 'react';

function getRandomArbitrary(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

export default class SessionForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
      renderErrors: false
    }

    this.backgrounds = [
      "https://blog.hdwallsource.com/wp-content/uploads/2016/01/gif-wallpaper-32368-33113-hd-wallpapers.jpg.gif",
      "https://wallpaperaccess.com/full/312067.gif",
      "https://archive-media-1.nyafuu.org/wg/image/1482/26/1482264871130.gif",
      "https://i.pinimg.com/originals/09/24/4c/09244c7f7dd4d17b0484370f32db6641.gif",
      "https://wallpapercave.com/wp/wp1865069.gif",
      "https://wallpapercave.com/wp/wp2757868.gif",
      "https://cdn.wallpapersafari.com/75/18/VkrvOf.gif",
      "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/37f002aa-032d-480b-9aa7-474adef47ed6/daqohse-f79cb156-0096-4748-9f7e-39b15cf2e86e.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwic3ViIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsImF1ZCI6WyJ1cm46c2VydmljZTpmaWxlLmRvd25sb2FkIl0sIm9iaiI6W1t7InBhdGgiOiIvZi8zN2YwMDJhYS0wMzJkLTQ4MGItOWFhNy00NzRhZGVmNDdlZDYvZGFxb2hzZS1mNzljYjE1Ni0wMDk2LTQ3NDgtOWY3ZS0zOWIxNWNmMmU4NmUuZ2lmIn1dXX0.0wacKKRH4OUbV-dFlS9_EBKYf1lDsXAXqATAcb2RFIM",
      "https://i.redd.it/d0o107bmuck11.gif",
      "https://media.giphy.com/media/26BoDYDTteuyZCh3y/giphy-downsized-large.gif",
      "https://gifimage.net/wp-content/uploads/2017/10/hd-gif-wallpapers-1080p-7.gif",
      "https://i.redd.it/izptoyn7i4uz.gif",
    ]

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDemo = this.handleDemo.bind(this);
    this.demoLogin = this.demoLogin.bind(this);
    this.loginButtonRender = this.loginButtonRender.bind(this);
    this.handleRerouteToLogin = this.handleRerouteToLogin.bind(this);
  }

  componentDidMount(){
    let rand = getRandomArbitrary(0, this.backgrounds.length);
    
    let sessionForm = document.querySelector('.session-form');
    sessionForm.style.backgroundImage = `url(${this.backgrounds[rand]})`;
    sessionForm.style.backgroundPosition = 'center';
    sessionForm.style.backgroundSize = 'cover';
    sessionForm.style.backgroundRepeat = 'no-repeat';

    let navBar = document.querySelector('.nav-bar');
    navBar.style.border = 'none';
    navBar.style.backgroundColor = "transparent";
    navBar.style.boxShadow = "none";
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