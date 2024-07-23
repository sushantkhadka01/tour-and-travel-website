import React from 'react';
import { useNavigate } from 'react-router-dom';
import everestImage from './assets/everest-base-camp.jpg';
import annapurnaImage from './assets/annapurna-circuit.jpg';
import langtangImage from './assets/langtang-valley.jpg';
import manasluImage from './assets/manaslu-circuit.jpg';
import './AdventureTrip.css';

const AdventureTrip = () => {
  const navigate = useNavigate();

  const trips = [
    {
      title: 'Everest Base Camp Trek',
      description: 'A trek to the base camp of the world’s highest peak. Its a challenging trek with breathtaking views of the Himalayas.',
      image: everestImage,
      route: '/booking-form/everest-base-camp-trek'
    },
    {
      title: 'Annapurna Circuit',
      description: 'A classic trek offering diverse landscapes, from lush subtropical forests to high-altitude deserts, and incredible mountain views.',
      image: annapurnaImage,
      route: '/booking-form/annapurna-circuit'
    },
    {
      title: 'Langtang Valley Trek',
      description: 'A less crowded trek that offers stunning views of the Langtang range and an opportunity to experience the culture of the Tamang people.',
      image: langtangImage,
      route: '/booking-form/langtang-valley-trek'
    },
    {
      title: 'Manaslu Circuit',
      description: 'A remote trek around Mount Manaslu, offering a mix of lush forests, high mountain passes, and traditional Nepalese villages.',
      image: manasluImage,
      route: '/booking-form/manaslu-circuit'
    },
  ];

  const handleBookTripClick = (route) => {
    navigate(route);
  };

  return (
    <div className="adventure-trip">
      <h1>Adventure Trips in Nepal</h1>
      <ul>
        {trips.map((trip, index) => (
          <li key={index} className="trip-item">
            <img src={trip.image} alt={trip.title} className="trip-image" />
            <h2>{trip.title}</h2>
            <p>{trip.description}</p>
            <button 
              className="book-trip-button" 
              onClick={() => handleBookTripClick(trip.route)}
            >
              Book Trip
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdventureTrip;
