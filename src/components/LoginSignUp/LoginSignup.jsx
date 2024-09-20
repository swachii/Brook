import React from 'react';
import './LoginSignup.css'; // Import CSS for styling

function LoginSignup({ pageType }) {
  return (
    <div className="container">
      <div className="header">
        <h1 className="text">{pageType === 'login' ? 'Login' : 'Sign Up'}</h1>
        <div className="underline"></div>
      </div>

      <div className="inputs">
        <div className="input">
          <input type="email" placeholder="Enter your email" />
        </div>
        <div className="input">
          <input type="password" placeholder="Enter your password" />
        </div>

        {pageType === 'signup' && (
          <div className="input">
            <input type="password" placeholder="Confirm your password" />
          </div>
        )}

        <div className="forgetpassword">Forgot password?</div>
      </div>

      <div className="submit-container">
        <button className="submit">{pageType === 'login' ? 'Login' : 'Sign Up'}</button>
      </div>
    </div>
  );
}

export default LoginSignup;
