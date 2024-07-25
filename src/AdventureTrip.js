import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import everestImage from './assets/everest-base-camp.jpg';
import annapurnaImage from './assets/annapurna-circuit.jpg';
import langtangImage from './assets/langtang-valley.jpg';
import manasluImage from './assets/manaslu-circuit.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
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
    <Container className="mt-5">
      <h1 className="mb-4 text-center">Adventure Trips in Nepal</h1>
      <Row>
        {trips.map((trip, index) => (
          <Col md={6} lg={4} key={index} className="mb-4">
            <Card className="trip-card">
              <Card.Img variant="top" src={trip.image} alt={trip.title} className="trip-image" />
              <Card.Body>
                <Card.Title>{trip.title}</Card.Title>
                <Card.Text>{trip.description}</Card.Text>
                <Button 
                  variant="primary" 
                  onClick={() => handleBookTripClick(trip.route)}
                >
                  Book Trip
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default AdventureTrip;
