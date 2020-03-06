import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const loginInfo = () => {
  
  return (
    <div className='login-info'>
      <NavLink activeClassName="currentPage" to='/signup'>Sign Up</NavLink> or <NavLink activeClassName="currentPage" to='/login'>Log In</NavLink>
    </div>
  )
};

const logoutInfo = (currentUser, logout) => (
  <div className='nav-bar-logged-in'>
    <NavLink to="/"><i class="fab fa-resolving"></i></NavLink>
    <h2>Welcome {currentUser.username}</h2>
    <div className="logout-info">
      <NavLink to="/"><i class="fas fa-home"></i></NavLink> 
      <NavLink to="/settings"><i class="fas fa-user"></i></NavLink>
      <button onClick={logout}>Log Out</button>
    </div>
  </div>
)

const NavBar = ({ currentUser, logout }) => {
  return (
    <div className="nav-bar">
      {currentUser === undefined ? loginInfo() : logoutInfo(currentUser, logout)}
    </div>
  );
};

export default NavBar;