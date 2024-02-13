import React, { useState } from 'react';

const ResetPassword = () => {
  const [email, setEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [resetSuccess, setResetSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Implement your password reset logic here
    // Example: Call a backend API to handle password reset

    // Simulate a successful password reset for the sake of the example
    setResetSuccess(true);
  };

  return (
    <>
     {resetSuccess ? (
        <p>Password reset successful! You can now login with your new password.</p>
      ) : (
      <div className="LoginPageContainer">
        <div className="LoginPageInnerContainer">
          <div className="ImageContianer">
            <img src="https://i.imgur.com/MYZd7of.png" className="GroupImage" alt="Group" />
          </div>
          <div className="LoginFormContainer">
            <div className="LoginFormInnerContainer">
              <div className="LogoContainer">
                <img
                  src="https://www.pngkey.com/png/full/529-5291672_sample-logo-png-transparent-background.png"
                  className="logo"
                  alt="Convene Logo"
                />
              </div>
              <header className="header">Log in</header>
              <header className="subHeader">
                 <h1>Reset Password</h1>
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
                    name="email"
                     value={email}
                    onChange={(e) => setEmail(e.target.value)}
              required
                  />
                </div>
                <div className="inputContainer">
                  <label className="label" htmlFor="password">
                    <img src="https://i.imgur.com/g5SvdfG.png" className="labelIcon" alt="Password Icon" />
                    <span>New Password*</span>
                  </label>
                  <input
                    className="input"
                    type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
                  />
                </div>
 <div className="inputContainer">
                  <label className="label" htmlFor="password">
                    <img src="https://i.imgur.com/g5SvdfG.png" className="labelIcon" alt="Password Icon" />
                    <span>Confirm Password*</span>
                  </label>
                  <input
                    className="input"
                     type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
                  />
                </div>
               
              
               <button type="submit" className="LoginButton">Reset Password</button>
              </form>
            </div>
          </div>
        </div>
      </div>
        )}
    </>
    // <div>
    //   <h1>Reset Password</h1>
    //   {resetSuccess ? (
    //     <p>Password reset successful! You can now login with your new password.</p>
    //   ) : (
    //     <form onSubmit={handleSubmit}>
    //       <label>
    //         Email:
    //         <input
    //           type="email"
    //           value={email}
    //           onChange={(e) => setEmail(e.target.value)}
    //           required
    //         />
    //       </label>
    //       <br />
    //       <label>
    //         New Password:
    //         <input
    //           type="password"
    //           value={newPassword}
    //           onChange={(e) => setNewPassword(e.target.value)}
    //           required
    //         />
    //       </label>
    //       <br />
    //       <label>
    //         Confirm Password:
    //         <input
    //           type="password"
    //           value={confirmPassword}
    //           onChange={(e) => setConfirmPassword(e.target.value)}
    //           required
    //         />
    //       </label>
    //       <br />
    //       <button type="submit">Reset Password</button>
    //     </form>
    //   )}
    // </div>
  );
};

export default ResetPassword;
