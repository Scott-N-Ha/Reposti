import React from 'react';
import { Link } from 'react-router-dom';

import UserProfileImageContainer from '../users/user_profile_img_container.js';

export default class NavBar extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      dropdown: false,
    }

    this.loginInfo = this.loginInfo.bind(this);
    this.logoutInfo = this.logoutInfo.bind(this);
    this.userDropdown = this.userDropdown.bind(this);
    this.handleUserDropdown = this.handleUserDropdown.bind(this);
    this.hideDropdown = this.hideDropdown.bind(this);
    this.showDropdown = this.showDropdown.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  componentDidMount(){
    if (this.props.currentUser !== undefined) this.props.getUser(this.props.currentUser.username);

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
        {this.props.location.pathname === "/login" ? <Link className="nav-bar-button" to='/signup'>Sign Up</Link> : <Link className="nav-bar-button" to='/login'>Log In</Link>}
      </div>
    )
  }

  logoutInfo(){
    const { currentUser } = this.props;

    if (currentUser === undefined || currentUser.likes === undefined) return null;

    return (
      <div className="logout-info">
        <Link to="/"><i className="fas fa-home"></i></Link> 
        <i className="fas fa-user" onClick={this.handleUserDropdown}></i>
        { this.state.dropdown ? this.userDropdown() : null }
      </div>
    )
  }

  userDropdown(){
    const { currentUser } = this.props;

    if (currentUser === undefined || currentUser.likes === undefined) return null;

    return (
      <div className="user-dropdown">
        <ul className="user-dropdown-account">
          <li className="dropdown-account">
            <div>
              <span>ACCOUNT</span> <span className="account-logout" onClick={this.handleLogout}>Log out</span>
            </div>
          </li>
          <Link to="/likes"><li className="dropdown-li">
            <div className="dropdown-account-separator">
              <i className="fas fa-heart"></i> Likes
            </div>
            { currentUser.likes.length }
          </li></Link>
          <Link to="/following"><li className="dropdown-li">
            <div>
              <i className="far fa-address-book"></i> Following
            </div>
            { currentUser.leaders.length }
          </li></Link>
          <Link to="/settings"><li className="dropdown-li">
            <div>
              <i className="fas fa-cog"></i> Settings
            </div>
          </li></Link>
          <a href="https://www.appacademy.io/"><li className="dropdown-li">
            <div>
              <i className="fas fa-question-circle"></i> Help 
            </div>
          </li></a>
          <li className="dropdown-account">
            TUMBLRS
          </li>
          <li>
            <ul className="tumblrs-info">
              <li className="tumblrs-info-main">
                <Link to={`/${currentUser.username}`} >
                  <UserProfileImageContainer userId={currentUser.id} />
                  <div className="tumblrs-info-username">
                    {currentUser.username}
                  </div>
                </Link>
              </li>
                <li className="tumblrs-li">
                  <div>
                    Post
                  </div>
                  {currentUser.posts.length}
                </li>
              <li className="tumblrs-li">
                <div>
                  Followers
                </div>
                {currentUser.followers.length}
              </li>
            </ul>
          </li>
        </ul>
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

    return (
      <div className="nav-bar">
        <Link to="/"><i className="fab fa-resolving"></i></Link>
        { (currentUser === undefined || currentUser.likes === undefined) ? this.loginInfo() : this.logoutInfo()}
      </div>
    );
  }
}