import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import Header from './Header';
import 'bootstrap/dist/css/bootstrap.min.css';

const Booking = () => {
  const { tripName } = useParams();
  const [tripDetails, setTripDetails] = useState({
    priceOption: '1000',
    name: '',
    email: '',
    phone: '',
    address: ''
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTripDetails((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!tripDetails.name) newErrors.name = 'Name is required';
    if (!tripDetails.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(tripDetails.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!tripDetails.phone) newErrors.phone = 'Phone number is required';
    if (!tripDetails.address) newErrors.address = 'Address is required';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length === 0) {
      setSubmitted(true);
      console.log('Booking Details:', tripDetails);
    } else {
      setErrors(formErrors);
    }
  };

  return (
    <>
      <Header />
      <Container className="mt-5">
        <h2>Book Your Trip: {tripName.replace(/-/g, ' ')}</h2>
        {submitted ? (
          <Alert variant="success" className="mt-3">Thank you for your booking!</Alert>
        ) : (
          <Form onSubmit={handleSubmit}>
            {[
              { label: 'Name:', type: 'text', name: 'name' },
              { label: 'Email:', type: 'email', name: 'email' },
              { label: 'Phone:', type: 'tel', name: 'phone' },
              { label: 'Address:', type: 'text', name: 'address' }
            ].map(({ label, type, name }) => (
              <Form.Group as={Row} className="mb-3" key={name}>
                <Form.Label column sm={3}>{label}</Form.Label>
                <Col sm={9}>
                  <Form.Control
                    type={type}
                    name={name}
                    value={tripDetails[name]}
                    onChange={handleChange}
                    required
                  />
                  {errors[name] && <span className="text-danger">{errors[name]}</span>}
                </Col>
              </Form.Group>
            ))}
            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm={3}>Select Price Option:</Form.Label>
              <Col sm={9}>
                <Form.Select
                  name="priceOption"
                  value={tripDetails.priceOption}
                  onChange={handleChange}
                  required
                >
                  {['8 days - US$1000', '12 days - US$1250', '14 days - US$1300', '16 days - US$1500']
                    .map((option, index) => (
                      <option key={index} value={option.split(' ')[3].slice(1)}>{option}</option>
                    ))}
                </Form.Select>
              </Col>
            </Form.Group>
            <Button type="submit" className="mt-3">Submit Booking</Button>
          </Form>
        )}
      </Container>
    </>
  );
};

export default Booking;
