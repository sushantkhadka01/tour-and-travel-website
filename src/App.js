import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './Login';
import Signup from './Signup';
import ForgotPassword from './ForgotPassword';
import Home from './Home';
import Services from './Services';
import About from './About';
import Domestic from './Domestic';
import AdventureTrip from './AdventureTrip';
import CityTours from './CityTours';
import BookingForm from './BookingForm';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/domestic-tour" element={<Domestic />}>
            <Route path="adventure-trip" element={<AdventureTrip />} />
            <Route path="city-tours" element={<CityTours />} />
          </Route>
          <Route path="/booking-form/:tripName" element={<BookingForm />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
