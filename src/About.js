import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Header from './Header'; 
import './About.css';

const About = () => {
  return (
    <div className="home-page">
      <Header /> 

      <Container>
        <Row>
          <Col>
            <h1>About Us</h1>
            <p>Welcome to our Siuuuushant travel and tours company, where your dream adventures come to life! We specialize in curating unforgettable experiences, whether you're looking to explore vibrant cityscapes, embark on thrilling adventures, unwind on serene beach holidays, immerse yourself in rich cultural experiences, or embark on exciting wildlife safaris.</p>
            
            <div className="section-box">
              <h2>City Tours</h2>
              <p>Discover the heart of bustling cities with our expertly guided city tours. Explore iconic landmarks, hidden gems, and local hotspots that capture the essence of each metropolis.</p>
            </div>

            <div className="section-box">
              <h2>Adventure Trips</h2>
              <p>For the thrill-seekers, our adventure trips offer adrenaline-pumping experiences in breathtaking landscapes. From mountain trekking to white-water rafting, we ensure every adventure is safe and exhilarating.</p>
            </div>

            <div className="section-box">
              <h2>Beach Holidays</h2>
              <p>Relax and rejuvenate on pristine beaches with our tailor-made beach holiday packages. Enjoy sun-soaked days, crystal-clear waters, and luxurious accommodations that promise a perfect getaway.</p>
            </div>

            <div className="section-box">
              <h2>Cultural Experiences</h2>
              <p>Dive deep into local traditions, festivals, and cuisines with our cultural experiences. Our itineraries are designed to give you a genuine insight into the cultural heritage of each destination.</p>
            </div>

            <div className="section-box">
              <h2>Wildlife Safaris</h2>
              <p>Experience the wonders of nature with our wildlife safaris. Witness majestic animals in their natural habitat and be part of conservation efforts that help protect wildlife.</p>
            </div>

            <p>Join us and let us turn your travel dreams into reality. Our dedicated team is committed to providing exceptional service and ensuring every journey is a memorable one.</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
