import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import './BookingForm.css';
import Header from './Header';

const Booking = () => {
  const { tripName } = useParams();
  const [tripDetails, setTripDetails] = useState({
    numberOfTravelers: 1,
    priceOption: '1000',
    name: '',
    email: '',
    phone: '',
    address: ''
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleTripDetailChange = (event) => {
    const { name, value } = event.target;
    setTripDetails({
      ...tripDetails,
      [name]: value,
    });
    setErrors({
      ...errors,
      [name]: ''
    });
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

  const handleSubmit = (event) => {
    event.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length === 0) {
      setSubmitted(true);
      console.log('Booking Details:', tripDetails);
    } else {
      setErrors(formErrors);
    }
  };

  return (
    <div className="booking-form">
      <Header />
      <div className="form-content">
        <h2>Book Your Trip: {tripName.replace(/-/g, ' ')}</h2>
        {submitted ? (
          <div className="success-message">Thank you for your booking!</div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="form-section trip-details">
              <h3>Trip Details</h3>
              <label>
                Number of Travelers:
                <input
                  type="number"
                  name="numberOfTravelers"
                  value={tripDetails.numberOfTravelers}
                  min="1"
                  onChange={handleTripDetailChange}
                  required
                />
              </label>
              <br />
              <label>
                Select Price Option:
                <select
                  name="priceOption"
                  value={tripDetails.priceOption}
                  onChange={handleTripDetailChange}
                  required
                >
                  <option value="1000"> 8 days- US$1000</option>
                  <option value="1250"> 12 days- US$1250</option>
                  <option value="1300"> 14 days- US$1300</option>
                  <option value="1500"> 16 days- US$1500</option>
                </select>
              </label>
            </div>
            <br />
            <div className="form-section personal-information">
              <h3>Personal Information</h3>
              <label>
                Name:
                <input
                  type="text"
                  name="name"
                  value={tripDetails.name}
                  onChange={handleTripDetailChange}
                  required
                />
                {errors.name && <span className="error">{errors.name}</span>}
              </label>
              <br />
              <label>
                Email:
                <input
                  type="email"
                  name="email"
                  value={tripDetails.email}
                  onChange={handleTripDetailChange}
                  required
                />
                {errors.email && <span className="error">{errors.email}</span>}
              </label>
              <br />
              <label>
                Phone:
                <input
                  type="tel"
                  name="phone"
                  value={tripDetails.phone}
                  onChange={handleTripDetailChange}
                  required
                />
                {errors.phone && <span className="error">{errors.phone}</span>}
              </label>
              <br />
              <label>
                Address:
                <input
                  type="text"
                  name="address"
                  value={tripDetails.address}
                  onChange={handleTripDetailChange}
                  required
                />
                {errors.address && <span className="error">{errors.address}</span>}
              </label>
              <br />
              <button type="submit" className="submit-button">Submit Booking</button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default Booking;
