import React from 'react';

function getRandomArbitrary(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function titlize(word){
  return word[0].toUpperCase() + word.slice(1).toLowerCase();
}

export default class SessionForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
      errors: [],
    }

    this.backgrounds = [
      "https://blog.hdwallsource.com/wp-content/uploads/2016/01/gif-wallpaper-32368-33113-hd-wallpapers.jpg.gif",
      "https://wallpaperaccess.com/full/312067.gif",
      "https://archive-media-1.nyafuu.org/wg/image/1482/26/1482264871130.gif",
      "https://i.pinimg.com/originals/09/24/4c/09244c7f7dd4d17b0484370f32db6641.gif",
      "https://wallpapercave.com/wp/wp1865069.gif",
      "https://wallpapercave.com/wp/wp2757868.gif",
      "https://cdn.wallpapersafari.com/75/18/VkrvOf.gif",
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
    this.unset = this.unset.bind(this);
    this.formValidation = this.formValidation.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
  }

  componentDidMount(){
    let rand = getRandomArbitrary(0, this.backgrounds.length);
    
    let sessionForm = document.querySelector('.session-form');
    sessionForm.style.backgroundImage = `url(${this.backgrounds[rand]})`;
    sessionForm.style.backgroundPosition = 'center';
    sessionForm.style.backgroundSize = 'cover';
    sessionForm.style.backgroundRepeat = 'no-repeat';

    let navBar = document.querySelector('.nav-bar');
    navBar.style.backgroundColor = "transparent";
    navBar.style.boxShadow = "none";
  }

  handleChange(e){
    e.target.classList.remove('input-errors');
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e){
    e.preventDefault();

    if (this.formValidation()){
      this.props.action(this.state)
        .fail(() => {
          let varyFormError = this.props.formType === "signup" ? ["Something went wrong."] : ["Username/Password is incorrect."];
          this.setState({errors: varyFormError});
        });
    }
  }

  formValidation(){
    let renderComplete = true;
    const inputs = document.querySelectorAll('input');
    const newErrors = [];

    inputs.forEach(input => {
      if (input.value.length < 1) {
        renderComplete = false;
        newErrors.push(`${titlize(input.name)} cannot be blank.`);
        input.classList.add('input-errors');
      }
    });

    if (renderComplete){
      this.setState({errors: []});
      inputs.forEach(input => input.classList.remove('input-errors'));
    } else {
      this.setState({errors: newErrors});
    }

    return renderComplete;
  }

  showEmail(){
    return (
      <div>
          <input className="session-form-input" type="text" name="email" onChange={this.handleChange} value={this.state.email} placeholder="Email" maxLength="60" />
      </div>
    )
  }

  handleDemo(e){
    e.preventDefault();

    document.querySelectorAll('button').forEach(btn => {
      btn.disabled = true;
      btn.classList.add('disabled');
      // btn.textContent = "Logging in...";
    });

    this.setState({username: 'test', password: 'password'});
    
    const demo = {
      username: 'test',
      password: 'password'
    }

    this.props.action(demo)
      .then(() => this.unset())
      .fail(() => this.unset());
  }

  unset(){
    document.querySelectorAll('button').forEach(btn => {
      btn.disabled = false;
      btn.classList.remove('disabled');
    });
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

  renderErrors(){
    const errorsList = this.state.errors.map(error => {
      return <li className="session-error">{error}</li>;
    });

    return (
      <ul className="session-errors-list">
        {errorsList}
      </ul>
    );
  }

  render(){
    let buttonText = this.props.formType === 'signup' ? 'Sign Up' : 'Log In';
    return (
      <form className="session-form">
        <span className="reposti">reposti</span>
          <input
            className="session-form-input"
            type="text"
            name="username"
            onChange={this.handleChange}
            value={this.state.username}
            placeholder="Username"
            maxLength="24" />
        { this.props.formType === 'signup' ? this.showEmail() : null } 
          <input
            className="session-form-input"
            type="password"
            name="password"
            onChange={this.handleChange}
            value={this.state.password}
            placeholder="Password"
            maxLength="24" />
        <button onClick={this.handleSubmit} className="main-button" >{buttonText}</button>
        { this.props.formType === 'login' ? this.demoLogin() : this.loginButtonRender() }
        { this.renderErrors() }
      </form>
    );
  }
}