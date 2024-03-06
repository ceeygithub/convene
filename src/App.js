// import React, { useEffect, useContext } from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Navbar from './components/navabar/Navbar';
// import Home from './pages/Home';
// import Explore from './pages/Explore';
// import CreateMeetup from './pages/CreateMeetup';
// import Profile from './pages/Profile';
// import UserProfile from './pages/UserProfile';
// import NotFound from './pages/NotFound';
// import { useAuth } from './context/useAuth'; // Fix the import statement
// import SignIn from './pages/SignIn';
// import SignUp from './pages/SignUp';
// import ResetPassword from './pages/ResetPassword';
// import Footer from './components/footer/Footer';

// const App = () => {
//   const { user, login, logout } = useAuth();

//   useEffect(() => {
//     const fetchUser = async () => {
//       try {
//         const response = await fetch('http://localhost:3002/user/login');
//         if (response.ok) {
//           const userData = await response.json();
//           // Update user state using the context function
//           login(userData);
//         }
//       } catch (error) {
//         console.error('Error fetching user:', error);
//         // Handle error or set user to null if needed
//         // logout();
//       }
//     };

//     fetchUser();
//   }, [login]); // Include login function in the dependency array

//   const isAuthenticated = !!user;
//   const isAdmin = user?.role === 'Admin';
//   const isNewUser = user?.isNewUser || false;

//   return (
//     <Router>
//       <Navbar isAuthenticated={isAuthenticated} isAdmin={isAdmin} isNewUser={isNewUser} />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/signup" element={<SignUp />} />
//         <Route path="/signin" element={<SignIn />} />
//         <Route path="/resetpassword" element={<ResetPassword />} />
//         <Route path="/explore" element={<Explore />} />
//         {isAdmin && <Route path="/create-meetup" element={<CreateMeetup />} />}
//         <Route path="/profile" element={<Profile />} />
//         <Route path="/userprofile" element={<UserProfile />} />
//         <Route path="*" element={<NotFound />} />
//       </Routes>
//       {/* <Footer /> */}
//     </Router>
//   );
// };

// export default App;

// App.js
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/navabar/Navbar';
import Home from './pages/Home';
import Explore from './pages/Explore';
import CreateMeetup from './pages/CreateMeetup';
import Profile from './pages/Profile';
import UserProfile from './pages/UserProfile';
import NotFound from './pages/NotFound';
// import { useAuth } from './context/useAuth';
import { AuthProvider } from './context/useAuth';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import ResetPassword from './pages/ResetPassword';

const App = () => {
  const { user, login } = useAuth();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch('http://localhost:3002/user/login');
        if (response.ok) {
          const userData = await response.json();
          login(userData);
        }
      } catch (error) {
        console.error('Error fetching user:', error);
      }
    };

    fetchUser();
  }, [login]);

  return (
    <AuthProvider>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
                <Route path="/signup" element={<SignUp />} />
                 <Route path="/signin" element={<SignIn />} />
                 <Route path="/resetpassword" element={<ResetPassword />} />
                 <Route path="/explore" element={<Explore />} />
                {isAdmin && <Route path="/create-meetup" element={<CreateMeetup />} />}
                 <Route path="/profile" element={<Profile />} />
                 <Route path="/userprofile" element={<UserProfile />} />
                <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
      </AuthProvider>
  );
};

export default App;
