import React, { useState } from 'react';
import SignupSvg from '../assets/Sign up-bro.svg';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
// import logoImg from '../assets/Capture4-removebg-preview.png';
import { CiUser } from "react-icons/ci";

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
     navigate('./signIn');
  };
  return (
      <>

    <div className="LoginPageContainer">
    <div className="LoginPageInnerContainer">
        <div className="ImageContianer">
            <img src={SignupSvg} className="GroupImage"  alt="GroupImage"/>
            
        </div>
        <div className="LoginFormContainer">
            <div className="LoginFormInnerContainer">
                <div className="LogoContainer">
                   
                    {/* <div className='LoginLogo'>
                      <img src={ logoImg} alt="" className='logoImg'/> Convene
                      </div>  */}
                </div>
                <header className="header">Sign Up</header>
                <header className="subHeader">Welcome to <b>Convene!</b> Please Enter your Details</header>

                <form onSubmit={handleSubmit}>
                     <div className="inputContainer" >
                        <label className="label" htmlFor="Username">
                    
                        <CiUser className="labelIcon"  alt="labelIcon" /><span>Username*</span></label>
                        <input type="email" className="input" id="Username" placeholder="Enter your Username"
                         value={formData.email}
            onChange={handleInputChange}
          required/>
                    </div>
                    <div className="inputContainer" >
                        <label className="label" htmlFor="emailAddress"><img src="https://i.imgur.com/Hn13wvm.png" className="labelIcon"  alt="labelIcon"/><span>Email
                                Address*</span></label>
                        <input type="email" className="input" id="emailAddress" placeholder="Enter your Email Address"
                         value={formData.email}
            onChange={handleInputChange}
          required/>
                    </div>
                    <div className="inputContainer">
                        <label className="label" htmlFor="password"><img src="https://i.imgur.com/g5SvdfG.png"
                                className="labelIcon"  alt="labelIcon"/><span>Password*</span></label>
                        <input type="password" className="input" id="password" placeholder="Enter your Password"
                         value={formData.password}
      onChange={handleInputChange}
     required/>
                    </div>
                  
                    <button className="LoginButton" id='SignUP'>Create Account</button>
                </form>
               
                  <Link  to="/signin" className="SignInLink" onClick={handleSignIn} >
           Already have an account? <b> Sign In</b> 
          </Link>

            </div>
        </div>
    </div>
</div>
    </>
  );
};

export default SignUp;
