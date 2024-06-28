import React, { useState } from 'react';
import './LoginSignup.css';
import user_icon from '../Assests/person.png';
import email_icon from '../Assests/email.png';
import password_icon from '../Assests/password.png';

const LoginSignup = () => {
  const [action, setAction] = useState("Sign Up");
  const [submitted, setSubmitted] = useState(false);

  const handleActionClick = (newAction) => {
    setAction(newAction);
    setSubmitted(false); // Reset the submitted state when switching actions
  };

  const handleSubmit = () => {
    // Add your submit logic here
    setSubmitted(true);
  };

  return (
    <div className='container'>
      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        {action === "Sign Up" && (
          <div className="input-group">
            <img src={user_icon} alt="User Icon" />
            <input type="text" placeholder="Name" />
          </div>
        )}
        <div className="input-group">
          <img src={email_icon} alt="Email Icon" />
          <input type="email" placeholder="Email Id" />
        </div>
        <div className="input-group">
          <img src={password_icon} alt="Password Icon" />
          <input type="password" placeholder="Password" />
        </div>
        
        {action === "Login" && !submitted && (
          <div className="forgot-password">
            Lost Password?<span> Click here</span>
          </div>
        )}
        <div className="submit-container">
          <button
            className={`submit ${action === "Sign Up" && !submitted ? "active" : ""}`}
            onClick={() => handleActionClick("Sign Up")}
          >
            Sign Up
          </button>
          <button
            className={`submit ${action === "Login" && !submitted ? "active" : ""}`}
            onClick={() => handleActionClick("Login")}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
