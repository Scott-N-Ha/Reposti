import React from 'react';
import { Link } from 'react-router-dom';

export default ({ currentUser, logout}) => {
  const show = currentUser ? (
    <div className="nav-bar-current-user">
      <h3>{currentUser}</h3>
      <button onClick={logout}>Log Out</button>
    </div>
  ) : (
    <div className="nav-bar-no-user">
      <Link className="nav-bar-btn" to="/signup">Sign Up</Link>
      <Link className="nav-bar-btn" to="/login">Log In</Link>
    </div>
  )
  return (
    <header className="nav-bar">
      {show}
    </header>
  );
};