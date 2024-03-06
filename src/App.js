
import React, { useEffect,useContext } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/navabar/Navbar';
import Home from './pages/Home';
import Explore from './pages/Explore';
import CreateMeetup from './pages/CreateMeetup';
import Profile from './pages/Profile';
import UserProfile from './pages/UserProfile';
import NotFound from './pages/NotFound';
import {  AuthContext } from './context/useAuth';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import ResetPassword from './pages/ResetPassword';

const App = () => {
  const { user, login, isAdmin } = useContext(AuthContext);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch('http://localhost:3002/user/login');
        if (response.ok) {
          const userData = await response.json();
         login(userData);
          console.log(userData)
        }
      } catch (error) {
        console.error('Error fetching user:', error);
      }
    };

    fetchUser();
  }, [login]);


  return (

    <Router>
        <Navbar isAuthenticated={!!user} Admin={isAdmin}  />
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

  );
};

export default App;
