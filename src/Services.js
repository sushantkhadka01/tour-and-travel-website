import React from 'react';
import Header from './Header'; // Import Header component
import './Services.css';
import madridImage from './assets/madrid.jpg'; 
import adventureImage from './assets/adventure.jpg'; 
import beachImage from './assets/beach.jpg';
import pashupatuImage from './assets/pashupati.jpg';
import safariImage from './assets/safari.jpg';

const services = [
  {
    title: 'City Tours',
    description: 'Explore the best city tours with expert guides and comfortable transport.',
    image: madridImage 
  },
  {
    title: 'Adventure Trips',
    description: 'Experience thrilling adventure trips that get your adrenaline pumping.',
    image: adventureImage
  },
  {
    title: 'Beach Holidays',
    description: 'Relax and unwind on the most beautiful beaches around the world.',
    image: beachImage
  },
  {
    title: 'Cultural Experiences',
    description: 'Immerse yourself in the local culture with our specially curated experiences.',
    image: pashupatuImage
  },
  {
    title: 'Wildlife Safaris',
    description: 'Get up close with nature on our exciting wildlife safaris.',
    image: safariImage
  }
];

const Services = () => {
  return (
    <div className="services">
      <Header /> 
      <div className="header-container">
        <h2>Our Services</h2>
      </div>
      <div className="services-list">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <img src={service.image} alt={service.title} />
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
