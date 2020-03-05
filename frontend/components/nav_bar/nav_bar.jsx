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
  <div className='logout-info'>
    <h2>Welcome {currentUser.username}</h2>
    <NavLink to="/"><i class="fas fa-home"></i></NavLink> 
    <NavLink to="/settings"><i class="fas fa-user"></i></NavLink>
    <button onClick={logout}>Log Out</button>
  </div>
)

const NavBar = ({ currentUser, logout }) => {
  return (
    <div>
      {currentUser === undefined ? loginInfo() : logoutInfo(currentUser, logout)}
    </div>
  );
};

export default NavBar;