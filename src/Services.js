import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Header from './Header'; 
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
    <div className="home-page">
      <Header /> 
      <Container>
        <Row>
          <Col>
            <h1>Our Services</h1>
            <p>Welcome to our Siuuuushant travel and tours company, where your dream adventures come to life! We specialize in curating unforgettable experiences, whether you're looking to explore vibrant cityscapes, embark on thrilling adventures, unwind on serene beach holidays, immerse yourself in rich cultural experiences, or embark on exciting wildlife safaris.</p>
            <div className="services-list">
              {services.map((service, index) => (
                <div className="service-card" key={index}>
                  <img src={service.image} alt={service.title} />
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>
              ))}
            </div>
            <p>Join us and let us turn your travel dreams into reality. Our dedicated team is committed to providing exceptional service and ensuring every journey is a memorable one.</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Services;

