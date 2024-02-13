import React, { useState } from 'react';
import SignupSvg from '../assets/Sign up-bro.svg';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const SignUp = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement your sign-up logic here
    console.log('Sign Up Form Submitted:', formData);
    // Add logic to create a new user (e.g., send data to backend)
  };
const navigate = useNavigate();

  const handleSignIn = () => {
    // Redirect to the sign-up page
    // history.push('/signup');
     navigate('./signIn');
    // Alternatively, you can use history.push('/signin') for the sign-in page
  };
  return (
    // <div>
    //   <h1>Sign Up</h1>
    //   <form onSubmit={handleSubmit}>
    //     <label>
    //       Username:
    //       <input
    //         type="text"
    //         name="username"
    //         value={formData.username}
    //         onChange={handleInputChange}
    //         required
    //       />
    //     </label>
    //     <br />
    //     <label>
    //       Email:
    //       <input
    //         type="email"
    //         name="email"
    //         value={formData.email}
    //         onChange={handleInputChange}
    //         required
    //       />
    //     </label>
    //     <br />
    //     <label>
    //       Password:
    //       <input
    //         type="password"
    //         name="password"
    //         value={formData.password}
    //         onChange={handleInputChange}
    //         required
    //       />
    //     </label>
    //     <br />
    //     <button type="submit">Sign Up</button>
    //   </form>
    // </div>

      <>

    <div className="LoginPageContainer">
    <div className="LoginPageInnerContainer">
        <div className="ImageContianer">
            <img src={SignupSvg} className="GroupImage"/>
        </div>
        <div className="LoginFormContainer">
            <div className="LoginFormInnerContainer">
                <div className="LogoContainer">
                    <img src="https://www.pngkey.com/png/full/529-5291672_sample-logo-png-transparent-background.png" className="logo"/>
                </div>
                <header className="header">Sign Up</header>
                <header className="subHeader">Welcome to <b>Convene!</b> Please Enter your Details</header>

                <form>
                    <div className="inputContainer" onSubmit={handleSubmit}>
                        <label className="label" htmlFor="emailAddress"><img src="https://i.imgur.com/Hn13wvm.png" className="labelIcon"/><span>Email
                                Address*</span></label>
                        <input type="email" className="input" id="emailAddress" placeholder="Enter your Email Address"
                         value={formData.email}
            onChange={handleInputChange}
          required/>
                    </div>
                    <div className="inputContainer">
                        <label className="label" htmlFor="password"><img src="https://i.imgur.com/g5SvdfG.png"
                                className="labelIcon"/><span>Password*</span></label>
                        <input type="password" className="input" id="password" placeholder="Enter your Password"
                         value={formData.password}
      onChange={handleInputChange}
     required/>
                    </div>
                  
                    <button className="LoginButton" id='SignUP'>Login</button>
                </form>
                 <a href="#" className="ForgotPasswordLink" onClick={ handleSignIn}>Already have an account? Sign In</a>

            </div>
        </div>
    </div>
</div>
    </>
  );
};

export default SignUp;
