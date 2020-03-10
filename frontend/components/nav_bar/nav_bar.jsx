import React from 'react';
import { Link } from 'react-router-dom';

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
        <Link activeClassName="currentPage" to='/signup'>Sign Up</Link> or <Link activeClassName="currentPage" to='/login'>Log In</Link>
      </div>
    )
  }

  logoutInfo(){
    const { currentUser } = this.props;

    if (currentUser === undefined || currentUser.likes === undefined) return null;

    return (
      <div className="logout-info">
        <Link to={`/${currentUser.username}`}><i className="fas fa-home"></i></Link> 
        {/* <Link to="/settings"><i className="fas fa-user"></i></Link> */}
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
            <span>Account</span> <span className="account-logout" onClick={this.handleLogout}>Log out</span>
          </li>
          <li>
            Likes { currentUser.likes.length }<br/>
          </li>
          <li>
            <Link to="/following">Following { currentUser.leaders.length }</Link><br/>
          </li>
          <li>
            Settings <br/>
          </li>
          <li>
            Help 
          </li>
        </ul>
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

    return (
      <div className="nav-bar">
        <Link to="/"><i className="fab fa-resolving"></i></Link>
        { (currentUser === undefined || currentUser.likes === undefined) ? this.loginInfo() : this.logoutInfo()}
      </div>
    );
  }
}