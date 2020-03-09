import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export default class NavBar extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      dropdown: false,
    }

    this.logoutInfo = this.logoutInfo.bind(this);
    this.userDropdown = this.userDropdown.bind(this);
    this.handleUserDropdown = this.handleUserDropdown.bind(this);
    this.hideDropdown = this.hideDropdown.bind(this);
    this.showDropdown = this.showDropdown.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  componentDidMount(){
    // this.props.getUser(this.props.currentUser.username);
    document.addEventListener('click', event => {
      if (!event.target.classList.contains('user-dropdown') && !event.target.classList.contains("fa-user")) this.hideDropdown();
    });
  }

  showDropdown(){
    this.setState({dropdown: true});
  }

  hideDropdown(){
    this.setState({dropdown: false});
  }

  loginInfo(){
    return (
      <div className='login-info'>
        <NavLink activeClassName="currentPage" to='/signup'>Sign Up</NavLink> or <NavLink activeClassName="currentPage" to='/login'>Log In</NavLink>
      </div>
    )
  }

  logoutInfo(){
    const { currentUser } = this.props;

    if (currentUser === undefined || currentUser.likes === undefined) return null;

    return (
      <div className='nav-bar-logged-in'>
        <NavLink to="/"><i className="fab fa-resolving"></i></NavLink>
        <h2>Welcome {currentUser.username}</h2>
        <div className="logout-info">
          <NavLink to="/"><i className="fas fa-home"></i></NavLink> 
          {/* <NavLink to="/settings"><i className="fas fa-user"></i></NavLink> */}
          <i className="fas fa-user" onClick={this.handleUserDropdown}></i>
          { this.state.dropdown ? this.userDropdown() : null }
        </div>
      </div>
    )
  }

  userDropdown(){
    const { currentUser } = this.props;

    if (currentUser === undefined || currentUser.likes === undefined) return null;

    return (
      <div className="user-dropdown">
        <div className="user-dropdown-account">
          Account <button onClick={this.handleLogout}>Log Out</button> <br/>
          Likes { currentUser.likes.length }<br/>
          Following { currentUser.leaders.length }<br/>
          Settings <br/>
          Help 
        </div>
        <br/>
        <div className="user-dropdown-tumblrs">

        </div>
      </div>
    );
  }

  handleUserDropdown(){
    let curr = this.state.dropdown;

    this.setState({
      dropdown: !curr,
    });
  }

  handleLogout(){
    const { logout } = this.props;

    logout().then(
      () => this.hideDropdown()
    );
  }

  render(){
    const { currentUser } = this.props;

    if (currentUser === undefined || currentUser.likes === undefined) return null;

    return (
      <div className="nav-bar">
        {currentUser === undefined ? this.loginInfo() : this.logoutInfo()}
      </div>
    );
  }
}