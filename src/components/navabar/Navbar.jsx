// Navbar.js

import React from 'react';
import { Link } from 'react-router-dom';
import NavCSS from './Navbar.module.css';
import logoImg from '../../assets/Capture4-removebg-preview.png'

const Navbar = ({ isAuthenticated, isAdmin }) => {
  return (
    <nav className={NavCSS.navbar}>
      <div className={NavCSS.navbarContainer}>
        <Link to="/" className={ NavCSS.navbarLogo}>
           <img src={ logoImg} alt="" className={ NavCSS.logoImg}/>
           Convene
        </Link>
        <div className={NavCSS.navbarLinks}>
          <Link to="/explore" className={NavCSS.navbarLink}>
            Explore
          </Link>
          {isAdmin && (
            <Link to="/create-meetup" className={NavCSS.navbarLink}>
              Create Meetup
            </Link>
          )}
          <Link to="/profile" className={NavCSS.navbarLink}>
            My Profile
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
