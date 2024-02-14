

import React from 'react';
import { Link , useNavigate} from 'react-router-dom';
import NavCSS from './Navbar.module.css';
// import logoImg from '../../assets/Capture4-removebg-preview.png';
import logoImg from '../../assets/Screenshot_2024-02-14_024738-removebg-preview.png';
// import home from '../../pages/Home';


  
const Navbar = ({ isAuthenticated, isAdmin }) => {

    const navigate = useNavigate();

  const handleLogout = () => {
    // Implement your logout logic here
    // Example: Clear user session, redirect to login page
    console.log('Logout');
    navigate('/');
  };
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
        
        
            {isAuthenticated && (
          <>
            <li><Link to="/profile">Profile</Link></li>
               <Link to="/" className={NavCSS.navbarLink} onClick={ handleLogout}>
             Log out
            </Link>
            {isAdmin && <li><Link to="/create-meetup">Create Meetup</Link></li>}
            <li><button onClick={handleLogout}>Logout</button></li>
          </>
        )}
           {!isAuthenticated && (
          <>
         <Link to="/signup"  className={NavCSS.navbarLink}>Sign Up</Link>
          <Link to="/signin" className={`${NavCSS.navbarLink} ${NavCSS.signin}`}>Sign In</Link>

          </>
        )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
