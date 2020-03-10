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

  componentDidMount(prevProps){
    this.props.getUser(this.props.currentUser.username);

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
        <Link className="currentPage" to='/signup'>Sign Up</Link> or <Link className="currentPage" to='/login'>Log In</Link>
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
            <div>
              <span>Account</span> <span className="account-logout" onClick={this.handleLogout}>Log out</span>
            </div>
          </li>
          <li className="dropdown-li">
          <i className="fas fa-heart"></i> Likes { currentUser.likes.length }<br/>
          </li>
          <Link to="/following"><li className="dropdown-li">
          <i className="far fa-address-book"></i> Following { currentUser.leaders.length }
          </li></Link>
          <Link to="/settings"><li className="dropdown-li">
          <i className="fas fa-cog"></i> Settings
          </li></Link>
          <li className="dropdown-li">
          <i className="fas fa-question-circle"></i> Help 
          </li>
        </ul>
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