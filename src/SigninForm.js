import React from 'react';
import './SigninForm.css';
import halamadrid from './assets/realmadrid.png';
const SigninForm = () => {
  return (
    <div className="full-container">
      <div className="form-wrapper">
        <div className="image-container">
        <img src={halamadrid} alt="Logo" />
        </div>
        <div className="form-container">
          <h2>Sign In To Real Madrid</h2>
          <form>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" name="password" required />
            </div>
            <div className="forgot-password">
              <a href="/forgot-password">Forgot Password?</a>
            </div>
            <button type="submit" className="signin-button">Login</button>
          </form>
          <div className="signup-link">
            <span>Don't have an account? <a href="/signup">Sign Up</a></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SigninForm;
