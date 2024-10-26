import React from 'react';
import { Link } from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu';
import { HiHomeModern, HiMiniInformationCircle } from "react-icons/hi2";
import { HiOutlineLogout } from "react-icons/hi";
import { GiPlagueDoctorProfile } from "react-icons/gi";

const Header = () => {
  const user = localStorage.getItem("token");
  return (
    <header className="bg-secondary mb-4 py-2 flex-row align-center">
      <div className="container flex-row justify-space-between-lg justify-center align-center">
      <Link to="/">
          <h1>The Bookmark! </h1>
        </Link>
        {/* https://www.npmjs.com/package/react-burger-menu */}
        {user &&
          <Menu right>
            <a id="home" className="menu-item" href="/"><HiHomeModern /> Home</a>
            <a id="profile" className="menu-item" href="/profile"><GiPlagueDoctorProfile /> Profile</a>
            <a id="about" className="menu-item" href="/about"><HiMiniInformationCircle /> About</a>
            <a id="log out" className="menu-item" href="/login"><HiOutlineLogout /> Logout</a>

          </Menu>
        }
      </div>
    </header>
  );
};

export default Header;