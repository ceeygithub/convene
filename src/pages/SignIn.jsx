import React, { useState } from 'react';
import  '../styles/SignIn.css'

const SignIn = () => {
  const [formData, setFormData] = useState({
    username: '',
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
    // Implement your sign-in logic here
    console.log('Sign In Form Submitted:', formData);
    // Add logic to authenticate user (e.g., send data to backend)
  };

  return (
    // <div>
    //   <h1>Sign In</h1>
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
    //     <button type="submit">Sign In</button>
    //   </form>
    // </div>
    <>

    <div className="LoginPageContainer">
    <div className="LoginPageInnerContainer">
        <div className="ImageContianer">
            <img src="https://i.imgur.com/MYZd7of.png" className="GroupImage"/>
        </div>
        <div className="LoginFormContainer">
            <div className="LoginFormInnerContainer">
                <div className="LogoContainer">
                    <img src="https://www.pngkey.com/png/full/529-5291672_sample-logo-png-transparent-background.png" className="logo"/>
                </div>
                <header className="header">Log in</header>
                <header className="subHeader">Welcome to <b>animal planet!</b> Please Enter your Details</header>

                <form>
                    <div className="inputContainer">
                        <label className="label" for="emailAddress"><img src="https://i.imgur.com/Hn13wvm.png" className="labelIcon"/><span>Email
                                Address*</span></label>
                        <input type="email" className="input" id="emailAddress" placeholder="Enter your Email Address"/>
                    </div>
                    <div className="inputContainer">
                        <label className="label" for="emailAddress"><img src="https://i.imgur.com/g5SvdfG.png"
                                className="labelIcon"/><span>Password*</span></label>
                        <input type="password" className="input" id="emailAddress" placeholder="Enter your Password"/>
                    </div>
                    <div className="OptionsContainer">
                        <div className="checkboxContainer">
                            <input type="checkbox" id="RememberMe" className="checkbox"/> <label for="RememberMe">Remember
                                me</label>
                        </div>
                        <a href="#" className="ForgotPasswordLink">Forgot Password?</a>
                    </div>
                    <button className="LoginButton">Login</button>
                </form>
            </div>
        </div>
    </div>
</div>
    </>
  );
};

export default SignIn;
