

// import React, { useState, useEffect } from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Navbar from './components/navabar/Navbar'; 
// import Home from './pages/Home';
// import Explore from './pages/Explore';
// import CreateMeetup from './pages/CreateMeetup';
// import Profile from './pages/Profile';
// import UserProfile from './pages/UserProfile';
// import NotFound from './pages/NotFound';
// import Auth from './services/Auth';
// import SignIn from './pages/SignIn';
// import SignUp from './pages/SignUp';
// import ResetPassword from './pages/ResetPassword';




// const App = () => {
//   const [user, setUser] = useState(null);
//   const [isLoading, setIsLoading] = useState(true);
  

//   useEffect(() => {
//     const fetchUser = async () => {
//       try {
//         // Check if there is no user object in state
//         if (!user) {
//           const storedUser = Auth.getCurrentUser();
//           console.log('Fetched User:', storedUser);
//           setUser(storedUser);
//         }
//       } catch (error) {
//         console.error('Error fetching user:', error);
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     fetchUser();
//   }, [user]);


//   const isAuthenticated = !!user;
//   const isAdmin = user?.isAdmin || false;
//   const isNewUser = !!user?.user;

//   return (
//     <Router>

//       <Navbar isAuthenticated={isAuthenticated} isAdmin={isAdmin} isNewUser={isNewUser} />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/signup" element={<SignUp />} />
//         <Route path="/signin" element={<SignIn />} />
//         <Route path="/ResetPassword" element={<ResetPassword />} />
//         <Route path="/explore" element={<Explore />} />
//         {isAuthenticated && (
//           <Route path="/create-meetup" element={<CreateMeetup />} />
//         )}
     
//         <Route path="/profile" element={<Profile />} />
//         <Route path="/UserProfile" element={<UserProfile />} />
//         <Route path="*" element={<NotFound />} />
//       </Routes>
//     </Router>
//   );


// };

// export default App;


import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/navabar/Navbar';
import Home from './pages/Home';
import Explore from './pages/Explore';
import CreateMeetup from './pages/CreateMeetup';
import Profile from './pages/Profile';
import UserProfile from './pages/UserProfile';
import NotFound from './pages/NotFound';
import Auth from './services/Auth';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import ResetPassword from './pages/ResetPassword';

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        // Check if there is no user object in state
        if (!user) {
          const storedUser = Auth.getCurrentUser();
          console.log('Fetched User:', storedUser);
          setUser(storedUser);
        }
      } catch (error) {
        console.error('Error fetching user:', error);
      }
    };

    fetchUser();
  }, [user]);

  const isAuthenticated = !!user;
  const isAdmin = user?.isAdmin || false;
  const isNewUser = !!user?.user;

  return (
    <Router>
      <Navbar isAuthenticated={isAuthenticated} isAdmin={isAdmin} isNewUser={isNewUser} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/ResetPassword" element={<ResetPassword />} />
        <Route path="/explore" element={<Explore />} />
        {isAdmin && (
          <Route path="/create-meetup" element={<CreateMeetup />} />
        )}
        <Route path="/profile" element={<Profile />} />
        <Route path="/UserProfile" element={<UserProfile />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
