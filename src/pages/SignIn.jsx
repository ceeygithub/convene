// import React, { useState } from 'react';
// import '../styles/SignIn.css';
// import { Link } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';
// import SigninSvg from '../assets/13245914_5186395.svg';
// // import logoImg from '../assets/Capture4-removebg-preview.png';

// const SignIn = () => {
//   const [formData, setFormData] = useState({
//     username: '',
//     password: '',
//   });

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Implement your sign-in logic here
//     console.log('Sign In Form Submitted:', formData);
//     // Add logic to authenticate user (e.g., send data to backend)
//   };

//   const navigate = useNavigate();
//    const handleReset = () => {
//     // Redirect to the sign-up page
//      navigate('./ResetPassword');
//   };

//   return (
//     <>
//       <div className="LoginPageContainer">
//         <div className="LoginPageInnerContainer">
     
//              <div className="ImageContianer">
//             <img src={SigninSvg} className="GroupImage"  alt="GroupImage"/>
            
//         </div>
//           <div className="LoginFormContainer">
//             <div className="LoginFormInnerContainer">
  
//               <header className="header">Sign in</header>
//               <header className="subHeader">
//                 Welcome back to <b>Convene!</b> Please Enter your Details
//               </header>

//               <form onSubmit={handleSubmit}>
//                 <div className="inputContainer">
//                   <label className="label" htmlFor="emailAddress">
//                     <img src="https://i.imgur.com/Hn13wvm.png" className="labelIcon" alt="Email Icon" />
//                     <span>Email Address*</span>
//                   </label>
//                   <input
//                     type="email"
//                     className="input"
//                     id="emailAddress"
//                     name="username"
//                     value={formData.username}
//                     onChange={handleInputChange}
//                     placeholder="Enter your Email Address"
//                     required
//                   />
//                 </div>
//                 <div className="inputContainer">
//                   <label className="label" htmlFor="password">
//                     <img src="https://i.imgur.com/g5SvdfG.png" className="labelIcon" alt="Password Icon" />
//                     <span>Password*</span>
//                   </label>
//                   <input
//                     type="password"
//                     className="input"
//                     id="password"
//                     name="password"
//                     value={formData.password}
//                     onChange={handleInputChange}
//                     placeholder="Enter your Password"
//                     required
//                   />
//                 </div>
//                 <div className="OptionsContainer">
//                   <div className="checkboxContainer">
//                     <input type="checkbox" id="RememberMe" className="checkbox" />
//                     <label htmlFor="RememberMe">Remember me</label>
//                   </div>
            
//                      <Link  to="/ResetPassword" className="SignInLink" onClick={ handleReset} >
//            Forgot Password?
//           </Link>
//                 </div>
//                 <button type="submit" className="LoginButton">
//                   SignIn
//                 </button>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default SignIn;

import React, { useState } from 'react';
import '../styles/SignIn.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import SigninSvg from '../assets/13245914_5186395.svg';

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

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Make a POST request to your backend endpoint
      const response = await fetch('http://localhost:3002/:username', {
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
    } catch (error) {
      console.error('Error during login:', error);
    }
  };

  const handleReset = () => {
    // Redirect to the reset password page
    navigate('/ResetPassword');
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
                  <label className="label" htmlFor="emailAddress">
                    <img src="https://i.imgur.com/Hn13wvm.png" className="labelIcon" alt="Email Icon" />
                    <span>Email Address*</span>
                  </label>
                <input
                    type="email"
                    className="input"
                    id="emailAddress"
                    name="username"
                    value={formData.username}
                    onChange={handleInputChange}
                    placeholder="Enter your Email Address"
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
    </>
  );
};

export default SignIn;
