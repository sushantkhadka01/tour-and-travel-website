import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './InternationalTour.css';
import Header from './Header';
import { useNavigate } from 'react-router-dom';
import cologneCathedral from './assets/CologneCathedral.jpg';
import buckinghamPalace from './assets/buckhingham.jpg';
import colosseum from './assets/colosseym.jpg';
import bernabeu from './assets/bernabeu.jpg';

const InternationalTour = () => {
  const navigate = useNavigate();

  const handleBookClick = (tripName) => {
    navigate(`/booking-form/${tripName}`);
  };

  return (
    <div className="international-tour">
      <Header />
      <div className="container mt-5">
        <h1 className="mb-4">International Tours</h1>
        <p>Explore the world with our diverse range of international tours.</p>
        <div className="row mt-4">
          <div className="col-md-3">
            <div className="card equal-height">
              <img src={cologneCathedral} className="card-img-top equal-image" alt="Cologne Cathedral" />
              <div className="card-body">
                <h5 className="card-title">Cologne Cathedral, Germany</h5>
                <p className="card-text">Marvel at the Gothic architecture of Cologne's famous cathedral.</p>
                <button className="btn btn-primary" onClick={() => handleBookClick('Cologne-Cathedral')}>Book a Trip</button>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card equal-height">
              <img src={buckinghamPalace} className="card-img-top equal-image" alt="Buckingham Palace" />
              <div className="card-body">
                <h5 className="card-title">Buckingham Palace, UK</h5>
                <p className="card-text">Visit the iconic residence of the British monarch.</p>
                <button className="btn btn-primary" onClick={() => handleBookClick('Buckingham-Palace')}>Book a Trip</button>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card equal-height">
              <img src={colosseum} className="card-img-top equal-image" alt="Colosseum" />
              <div className="card-body">
                <h5 className="card-title">Colosseum, Italy</h5>
                <p className="card-text">Explore the ancient amphitheater in the heart of Rome.</p>
                <button className="btn btn-primary" onClick={() => handleBookClick('Colosseum')}>Book a Trip</button>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card equal-height">
              <img src={bernabeu} className="card-img-top equal-image" alt="Bernabeu Stadium" />
              <div className="card-body">
                <h5 className="card-title">Bernabeu Stadium, Spain</h5>
                <p className="card-text">Tour the home of Real Madrid football club.</p>
                <button className="btn btn-primary" onClick={() => handleBookClick('Bernabeu-Stadium')}>Book a Trip</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InternationalTour;
