import React from 'react';
import { Link } from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu';


const Header = () => {
  
  return (
    <header className="bg-secondary mb-4 py-2 flex-row align-center">
      <div className="container flex-row justify-space-between-lg justify-center align-center">
      <Link to="/">
          <h1>The Bookmark! </h1>
        </Link>
        {/* https://www.npmjs.com/package/react-burger-menu */}
        <Menu right>
          <a id="home" className="menu-item" href="/">Home</a>
          <a id="add" className="menu-item" href="/addBookmark">+ Add Bookmark</a>
          <a id="profile" className="menu-item" href="/profile">Profile</a>
          <a id="about" className="menu-item" href="/about">About</a>
          <a id="log out" className="menu-item" href="/login">Logout</a>

        </Menu>
        
      </div>
    </header>
  );
};

export default Header;