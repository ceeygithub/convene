

import React, { useState } from 'react';
import '../styles/SignIn.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import SigninSvg from '../assets/13245914_5186395.svg';
import UserNotExistModal from '../components/modal/UserNotExistModal'; 
import { CiUser } from "react-icons/ci";

const SignIn = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const checkExistingUser = async () => {
    try {
      // Make a GET request to check if the user exists
 const response = await fetch(`http://localhost:3002/${formData.username}`);
      
      
      if (response.ok) {
        // The user exists, you can proceed with login
        // setShowModal(false);
        return true;
      } else {
        // The user doesn't exist, show the modal
         console.error('User does not exist:', response.statusText);
        setShowModal(true);
        return false;
      }
    } catch (error) {
      console.error('Error checking user existence:', error);
      return false;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Check if the user exists before proceeding with login
      const userExists = await checkExistingUser();

      if (userExists) {
        // User exists, proceed with the login process

        // Make a POST request to your backend endpoint for authentication
        const response = await fetch('http://localhost:3002/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          // The login was successful, you can redirect to the profile page or perform other actions
          const responseData = await response.json();
          console.log('Login successful:', responseData);

          // Example: Redirect to the profile page
          navigate('/profile');
        } else {
          // Handle errors or show appropriate messages
          console.error('Login Failed:', response.statusText);
        }
      } else {
        // User does not exist, do nothing (modal is already shown)
      }
    } catch (error) {
      console.error('Error during login:', error);
    }
  };

  const handleReset = () => {
    // Redirect to the reset password page
    navigate('/ResetPassword');
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleCreateAccount = () => {
    // Redirect to the sign-up page
    navigate('/signup');
  };

  return (
    <>
      <div className="LoginPageContainer">
        <div className="LoginPageInnerContainer">
          <div className="ImageContianer">
            <img src={SigninSvg} className="GroupImage" alt="GroupImage" />
          </div>
          <div className="LoginFormContainer">
            <div className="LoginFormInnerContainer">
              <header className="header">Sign in</header>
              <header className="subHeader">
                Welcome back to <b>Convene!</b> Please Enter your Details
              </header>
              <form onSubmit={handleSubmit}>
             <div className="inputContainer">
                    <label className="label" htmlFor="Username">
                    <CiUser className="labelIcon" alt="labelIcon" /><span>Username*</span>
                  </label>
                  <input
                    type="text"
                    className="input"
                    id="Username"
                    placeholder="Enter your Username"
                    value={formData.username}
                    name="username"
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="inputContainer">
                  <label className="label" htmlFor="password">
                    <img src="https://i.imgur.com/g5SvdfG.png" className="labelIcon" alt="Password Icon" />
                    <span>Password*</span>
                  </label>
                  <input
                    type="password"
                    className="input"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    placeholder="Enter your Password"
                    required
                  />
                </div>
                <div className="OptionsContainer">
                  <div className="checkboxContainer">
                    <input type="checkbox" id="RememberMe" className="checkbox" />
                    <label htmlFor="RememberMe">Remember me</label>
                  </div>
            
                     <Link  to="/ResetPassword" className="SignInLink" onClick={ handleReset} >
           Forgot Password?
          </Link>
                </div>
                <button type="submit" className="LoginButton">
                  SignIn
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Conditionally render the modal */}
      {showModal && (
        <UserNotExistModal closeModal={closeModal} handleCreateAccount={handleCreateAccount} />
      )}
    </>
  );
};

export default SignIn;
