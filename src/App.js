
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
import Footer from './components/footer/Footer'

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch('/user/login'); // Replace with your actual endpoint
        if (response.ok) {
          const userData = await response.json();
          setUser(userData);
        }
      } catch (error) {
        console.error('Error fetching user:', error);
      }
    };

    fetchUser();
  }, []);

  // const isAuthenticated = !!user;
  const isAuthenticated = Auth.isAuthenticated();
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
        <Route path="/UserProfile" element={<UserProfile  />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer/>
    </Router>
  );
};

export default App;
