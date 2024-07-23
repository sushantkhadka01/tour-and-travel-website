import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Link } from 'react-router-dom';
import './forgotpassword.css'; // Import your CSS file

const ForgotPassword = () => {
  const [formData, setFormData] = useState({
    email: '',
    newPassword: '',
    confirmNewPassword: ''
  });

  const { email, newPassword, confirmNewPassword } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement your reset password logic here
    console.log(formData);
  };

  return (
    <div className="forgot-password-container">
      <h2>Forgot Password</h2>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label for="email">Email</Label>
          <Input
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email to reset password"
            value={email}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="newPassword">New Password</Label>
          <Input
            type="password"
            name="newPassword"
            id="newPassword"
            placeholder="Enter your new password"
            value={newPassword}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="confirmNewPassword">Confirm New Password</Label>
          <Input
            type="password"
            name="confirmNewPassword"
            id="confirmNewPassword"
            placeholder="Confirm your new password"
            value={confirmNewPassword}
            onChange={handleChange}
          />
        </FormGroup>
        <Button color="primary">Reset Password</Button>
        <div className="links">
          <Link to="/login">Login</Link>
          {' | '}
          <Link to="/signup">Signup</Link>
        </div>
      </Form>
    </div>
  );
};

export default ForgotPassword;
