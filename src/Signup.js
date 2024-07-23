import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Link } from 'react-router-dom';
import './signup.css';

const Signup = () => {
  return (
    <div className="signup-container">
      <h2>Signup</h2>
      <Form>
        <FormGroup>
          <Label for="name">Name</Label>
          <Input type="text" name="name" id="name" placeholder="Enter your name" className="form-control" />
        </FormGroup>
        <FormGroup>
          <Label for="email">Email</Label>
          <Input type="email" name="email" id="email" placeholder="Enter your email" className="form-control" />
        </FormGroup>
        <FormGroup>
          <Label for="password">Password</Label>
          <Input type="password" name="password" id="password" placeholder="Enter your password" className="form-control" />
        </FormGroup>
        <Button color="primary" className="btn-primary">Signup</Button>
        <div className="links">
          <Link to="/login">Login</Link>
          {' | '}
          <Link to="/forgotpassword">Forgot Password</Link>
        </div>
      </Form>
    </div>
  );
};

export default Signup;
