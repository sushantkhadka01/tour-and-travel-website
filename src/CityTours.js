import React from 'react';
import { useNavigate } from 'react-router-dom';
import kathmanduImage from './assets/kathmandu.jpg';
import pokharaImage from './assets/pokhara.jpg';
import lalitpurImage from './assets/lalitpur.jpg';
import bhaktapurImage from './assets/bhaktapur.jpg';
import janakpurImage from './assets/janakpur.jpg';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import './CityTours.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const CityTours = () => {
  const navigate = useNavigate();

  const tours = [
    {
      title: 'Kathmandu',
      description: 'The capital city, known for its historic temples, vibrant culture, and bustling markets.',
      image: kathmanduImage,
      route: '/booking-form/kathmandu'
    },
    {
      title: 'Pokhara',
      description: 'Famous for its breathtaking views of the Himalayas, serene lakes, and adventure activities.',
      image: pokharaImage,
      route: '/booking-form/pokhara'
    },
    {
      title: 'Lalitpur',
      description: 'Known for its ancient temples, intricate woodwork, and rich history.',
      image: lalitpurImage,
      route: '/booking-form/lalitpur'
    },
    {
      title: 'Bhaktapur',
      description: 'Renowned for its well-preserved medieval architecture and traditional Newari culture.',
      image: bhaktapurImage,
      route: '/booking-form/bhaktapur'
    },
    {
      title: 'Janakpur',
      description: 'A historic and religious city known for its association with the Hindu epic Ramayana.',
      image: janakpurImage,
      route: '/booking-form/janakpur'
    },
  ];

  const handleBookTripClick = (route) => {
    navigate(route);
  };

  return (
    <Container className="mt-5">
      <h1 className="mb-4 text-center">City Tours in Nepal</h1>
      <Row>
        {tours.map((tour, index) => (
          <Col md={6} lg={4} key={index} className="mb-4">
            <Card className="tour-card">
              <Card.Img variant="top" src={tour.image} alt={tour.title} className="tour-image" />
              <Card.Body>
                <Card.Title>{tour.title}</Card.Title>
                <Card.Text>{tour.description}</Card.Text>
                <Button 
                  variant="primary" 
                  onClick={() => handleBookTripClick(tour.route)}
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

export default CityTours;
