import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Link, useNavigate } from 'react-router-dom'; 
import './login.css';
import logo from './assets/travel.png';

const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);

       
        if (formData.email === 'cristianosushant@gmail.com' && formData.password === 'realmadrid') {
            navigate('/');
        } else {
            
            console.log('Invalid email or password');
        }
    };

    return (
        <div className="background-container">
            <div className="login-container">
                <img src={logo} alt="Travel Logo" className="logo" />
                <h2>Login</h2>
                <Form onSubmit={handleSubmit}>
                    <FormGroup>
                        <Label for="email">Email</Label>
                        <Input type="email" name="email" id="email" placeholder="Enter your email" className="form-control" onChange={handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="password">Password</Label>
                        <Input type="password" name="password" id="password" placeholder="Enter your password" className="form-control" onChange={handleChange} />
                    </FormGroup>
                    <Button color="primary" className="btn-primary" type="submit">Login</Button>
                    <div className="links">
                        <Link to="/signup">Signup</Link>
                        {' | '}
                        <Link to="/forgotpassword">Forgot Password</Link>
                    </div>
                </Form>
            </div>
        </div>
    );
};

export default Login;
