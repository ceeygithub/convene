// import React, { useState } from 'react';
// import { useFormik } from 'formik';
// import * as Yup from 'yup';
// import '../styles/SignIn.css';
// import { Link } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';
// import SigninSvg from '../assets/13245914_5186395.svg';
// import UserNotExistModal from '../components/modal/UserNotExistModal'; 
// import { CiUser } from "react-icons/ci";
// import { PiLockKeyThin } from "react-icons/pi";

// const SignIn = () => {
//   const navigate = useNavigate();
//   const [showModal, setShowModal] = useState(false);

//   const checkExistingUser = async (username) => {
//     try {
//       const response = await fetch(`http://localhost:3002/login`);
//       return response.ok;
//     } catch (error) {
//       console.error('Error checking user existence:', error);
//       return false;
//     }
//   };

//   const validationSchema = Yup.object({
//     username: Yup.string().required('Username is required'),
//     password: Yup.string().required('Password is required'),
//   });

//   const formik = useFormik({
//     initialValues: {
//       username: '',
//       password: '',
//     },
//     validationSchema,
//     onSubmit: async (values) => {
//       try {
//         const userExists = await checkExistingUser(values.username);

//         if (userExists) {
//           const response = await fetch('http://localhost:3002/login', {
//             method: 'GET',
//             headers: {
//               'Content-Type': 'application/json',
//             },
//             body: JSON.stringify(values),
//           });

//           if (response.ok) {
//             const responseData = await response.json();
//             console.log('Login successful:', responseData);
//             navigate('/profile');
//           } else {
//             console.error('Login Failed:', response.statusText);
//           }
//         } else {
//           setShowModal(true);
//         }
//       } catch (error) {
//         console.error('Error during login:', error);
//       }
//     },
//   });

//   const handleReset = () => {
//     navigate('/ResetPassword');
//   };

//   const closeModal = () => {
//     setShowModal(false);
//   };

//   const handleCreateAccount = () => {
//     navigate('/signup');
//   };

//   return (
//     <>
//       <div className="LoginPageContainer">
//         <div className="LoginPageInnerContainer">
//           <div className="ImageContianer">
//             <img src={SigninSvg} className="GroupImage" alt="GroupImage" />
//           </div>
//           <div className="LoginFormContainer">
//             <div className="LoginFormInnerContainer">
//               <header className="header">Sign in</header>
//               <header className="subHeader">
//                 Welcome back to <b>Convene!</b> Please Enter your Details
//               </header>
//               <form onSubmit={formik.handleSubmit}>
//                 <div className="inputContainer">
//                   <label className="label" htmlFor="Username">
//                     <CiUser className="labelIcon" alt="labelIcon" /><span>Username*</span>
//                   </label>
//                   <input
//                     type="text"
//                     className="input"
//                     id="Username"
//                     placeholder="Enter your Username"
//                     {...formik.getFieldProps('username')}
//                     required
//                   />
//                   {formik.touched.username && formik.errors.username && <div className="error-message">{formik.errors.username}</div>}
//                 </div>
//                 <div className="inputContainer">
//                   <label className="label" htmlFor="password">
//                     <PiLockKeyThin className="labelIcon" alt="Password Icon" />
//                     <span>Password*</span>
//                   </label>
//                   <input
//                     type="password"
//                     className="input"
//                     id="password"
//                     name="password"
//                     placeholder="Enter your Password"
//                     {...formik.getFieldProps('password')}
//                     required
//                   />
//                   {formik.touched.password && formik.errors.password && <div className="error-message">{formik.errors.password}</div>}
//                 </div>
//                 <div className="OptionsContainer">
//                   <div className="checkboxContainer">
//                     <input type="checkbox" id="RememberMe" className="checkbox" />
//                     <label htmlFor="RememberMe">Remember me</label>
//                   </div>
//                   <Link to="/ResetPassword" className="SignInLink" onClick={handleReset}>
//                     Forgot Password?
//                   </Link>
//                 </div>
//                 <button type="submit" className="LoginButton">
//                   SignIn
//                 </button>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Conditionally render the modal */}
//       {showModal && (
//         <UserNotExistModal closeModal={closeModal} handleCreateAccount={handleCreateAccount} />
//       )}
//     </>
//   );
// };

// export default SignIn;


import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import '../styles/SignIn.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import SigninSvg from '../assets/13245914_5186395.svg';
// import UserNotExistModal from '../components/modal/UserNotExistModal'; 
import { CiUser } from "react-icons/ci";
import { PiLockKeyThin } from "react-icons/pi";

const SignIn = () => {
  const navigate = useNavigate();
  

  const validationSchema = Yup.object({
    username: Yup.string().required('Username is required'),
    password: Yup.string().required('Password is required'),
  });

  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    validationSchema,
  //    onSubmit: async (values) => {
  //     // In a real-world scenario, you would perform server-side authentication here
  //     // For simplicity, let's assume authentication is successful
  //     const user = {
  //       username: values.username,
  //       // Add other user details as needed
  //     };

  //     // Save user information in local storage
  //     localStorage.setItem('user', JSON.stringify(user));

  //     // Navigate to the profile page
  //     navigate('/UserProfile');
  //   },
     
  // });
      onSubmit: async (values) => {
      try {
   const response = await fetch('http://localhost:3002/user/login', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(values),
});


        if (response.ok) {
          navigate('/UserProfile');
        } else {
          console.error('Error during signup:', response.statusText);
          throw new Error('Response not OK');
        }
      } catch (error) {
        console.error('Error during user creation:', error);
        formik.setFieldError('submit', 'Registration failed. Please check your information and try again.');
      }
    },
  });
const handleReset = () => {
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
            
              <header className="header">
                Hi, Welcome back to <b>Convene!</b> <br/> Please Enter your Details
              </header>
              <form onSubmit={formik.handleSubmit}>
                <div className="inputContainer">
                  <label className="label" htmlFor="Username">
                    <CiUser className="labelIcon" alt="labelIcon" /><span>Username*</span>
                  </label>
                  <input
                    type="text"
                    className="input"
                    id="Username"
                    placeholder="Enter your Username"
                    {...formik.getFieldProps('username')}
                    required
                  />
                  {formik.touched.username && formik.errors.username && <div className="error-message">{formik.errors.username}</div>}
                </div>
                <div className="inputContainer">
                  <label className="label" htmlFor="password">
                    <PiLockKeyThin className="labelIcon" alt="Password Icon" />
                    <span>Password*</span>
                  </label>
                  <input
                    type="password"
                    className="input"
                    id="password"
                    name="password"
                    placeholder="Enter your Password"
                    {...formik.getFieldProps('password')}
                    required
                  />
                  {formik.touched.password && formik.errors.password && <div className="error-message">{formik.errors.password}</div>}
                </div>
                <div className="OptionsContainer">
                  <div className="checkboxContainer">
                    <input type="checkbox" id="RememberMe" className="checkbox" />
                    <label htmlFor="RememberMe">Remember me</label>
                  </div>
                  <Link to="/ResetPassword" className="SignInLink" onClick={handleReset}>
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
