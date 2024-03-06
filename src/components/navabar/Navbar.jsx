
// import React from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import NavCSS from './Navbar.module.css';
// import logoImg from '../../assets/Group 1.png';
// import Auth from '../../services/Auth';
// import DropdownAvatar from '../DropdownAvatar';
// import SearchBar from '../SearchBar';
// import { IoMdNotificationsOutline } from 'react-icons/io';
// import { FiMessageSquare } from 'react-icons/fi';

// const Navbar = ({ isAuthenticated, isAdmin, isNewUser }) => {
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     Auth.logout();
//     console.log('Logout');
//     navigate('/');
//   };

//   const handleSearch = () => {
//     // Implement your search logic here
//     console.log('Search');
//   };

// // const isAuthenticatedd = Auth.isAuthenticated(); 

//   return (
//     <nav className={NavCSS.navbar}>
//       <div className={NavCSS.navbarContainer}>
//         <Link to="/" className={NavCSS.navbarLogo}>
//           <img src={logoImg} alt="" className={NavCSS.logoImg} />
//         </Link>
//         {isAuthenticated && (
//           <>
//             <SearchBar onChange={handleSearch} />
//             <div className={NavCSS.navbarLinks}>
//               <Link to="/explore" className={NavCSS.navbarLink}>
//                 <FiMessageSquare />
//                 Messages
//               </Link>
//               <Link to="/explore" className={NavCSS.navbarLink}>
//                 <IoMdNotificationsOutline />
//                 Notifications
//               </Link>
//               <DropdownAvatar
//                 isAdmin={Auth.isAdmin()} // Use Auth.isAdmin() to get isAdmin status
//                 onLogout={handleLogout}
//                 onCloseDropdown={() => {}}
//               />
//               {isAdmin && <Link to="/create-meetup">Create Meetup</Link>}
//             </div>
//           </>
//         )}
//         {!isAuthenticated && !isNewUser && (
//           <div className={NavCSS.navbarLinks}>
//             <Link to="/signup" className={`${NavCSS.navbarLink} ${NavCSS.signup}`}>
//               Sign Up
//             </Link>
//             <Link to="/signin" className={`${NavCSS.navbarLink} ${NavCSS.signin}`}>
//               Sign In
//             </Link>
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default Navbar;


// Navbar.js
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import NavCSS from './Navbar.module.css';
import logoImg from '../../assets/Group 1.png';
import Auth from '../../services/Auth';
import DropdownAvatar from '../DropdownAvatar';
import SearchBar from '../SearchBar';
import { IoMdNotificationsOutline } from 'react-icons/io';
import { FiMessageSquare } from 'react-icons/fi';

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    Auth.logout();
    navigate('/');
  };

  const handleSearch = () => {
    console.log('Search');
  };

  return (
    <nav className={NavCSS.navbar}>
      <div className={NavCSS.navbarContainer}>
        <Link to="/" className={NavCSS.navbarLogo}>
          <img src={logoImg} alt="" className={NavCSS.logoImg} />
        </Link>
        {Auth.isAuthenticated() && (
          <>
            <SearchBar onChange={handleSearch} />
            <div className={NavCSS.navbarLinks}>
              <Link to="/explore" className={NavCSS.navbarLink}>
                <FiMessageSquare />
                Messages
              </Link>
              <Link to="/explore" className={NavCSS.navbarLink}>
                <IoMdNotificationsOutline />
                Notifications
              </Link>
              <DropdownAvatar
                isAdmin={Auth.isAdmin()}
                onLogout={handleLogout}
                onCloseDropdown={() => {}}
              />
              {Auth.isAdmin() && <Link to="/create-meetup">Create Meetup</Link>}
            </div>
          </>
        )}
        {!Auth.isAuthenticated() && (
          <div className={NavCSS.navbarLinks}>
            <Link to="/signup" className={`${NavCSS.navbarLink} ${NavCSS.signup}`}>
              Sign Up
            </Link>
            <Link to="/signin" className={`${NavCSS.navbarLink} ${NavCSS.signin}`}>
              Sign In
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
