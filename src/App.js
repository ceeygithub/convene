

import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/navabar/Navbar'; 
import Home from './pages/Home';
import Explore from './pages/Explore';
import CreateMeetup from './pages/CreateMeetup';
import Profile from './pages/Profile';
import NotFound from './pages/NotFound';
import Auth from './services/Auth';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import ResetPassword from './pages/ResetPassword';

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    setUser(Auth.getCurrentUser());
  }, []);

  const isAuthenticated = !!user;
  const isAdmin = user?.isAdmin || false;
  return (
    <Router>
      {/* <Navbar isAuthenticated={isAuthenticated} isAdmin={user?.isAdmin || false} /> */}
      <Navbar isAuthenticated={isAuthenticated} isAdmin={isAdmin} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/ResetPassword" element={<ResetPassword />} />
        <Route path="/explore" element={<Explore />} />
        {isAuthenticated && (
          <Route path="/create-meetup" element={<CreateMeetup />} />
        )}
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
