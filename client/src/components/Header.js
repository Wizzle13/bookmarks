import React from 'react';
import { Link } from 'react-router-dom';
import Auth from '../utils/auth';
import { slide as Menu } from 'react-burger-menu'

const Header = () => {
  const logout = event => {
    event.preventDefault();
    Auth.logout();
  };
  return (
    <header className="bg-secondary mb-4 py-2 flex-row align-center">
      <div className="container flex-row justify-space-between-lg justify-center align-center">
      <Link to="/">
          <h1>The Bookmark!</h1>
        </Link>

        
          {/* https://www.npmjs.com/package/react-burger-menu */}
          <Menu right>
            <a id="add" className="menu-item" href="/">+ Add Bookmark</a>
            <a id="profile" className="menu-item" href="/about">Profile</a>
            <a id="about" className="menu-item" href="/about">About</a>
            <a id="log out" className="menu-item" href="/contact">Logout</a>
            
          </Menu>
        
      </div>
    </header>
  );
};

export default Header;