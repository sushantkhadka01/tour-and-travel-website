import React from 'react';
import Header from './Header'; 
import './Home.css';
import floranceImage from './assets/florance.jpg';
import parisImage from './assets/paris.jpg';
import tokyoImage from './assets/tokyo.jpg';
import newYorkImage from './assets/newYork.jpg';
import sydneyImage from './assets/sydney.jpg';

const Home = () => {
  return (
    <div className="home-page">
      <Header />
      <main className="main-content">
        <section className="hero" style={{ backgroundImage: `url(${floranceImage})` }}>
          <div className="hero-overlay">
            <h1 className="hero-title">Discover Your Next Adventure</h1>
            <p className="hero-subtitle">Explore the world with our tailored tours and expert guides.</p>
           
          </div>
        </section>
        <section className="features">
          <div className="feature">
            <h3>Customized Tours</h3>
            <p>We offer tailored tours to suit your preferences and interests.</p>
          </div>
          <div className="feature">
            <h3>Experienced Guides</h3>
            <p>Our guides are knowledgeable and passionate about their regions.</p>
          </div>
          <div className="feature">
            <h3>24/7 Support</h3>
            <p>We are here to assist you at any time during your journey.</p>
          </div>
        </section>
        <section className="destinations">
          <h2>Popular Destinations</h2>
          <div className="destination-list">
            <div className="destination-box">
              <img src={parisImage} alt="Paris" className="destination-image" />
              <h3>Paris, France</h3>
              <p>Explore the city of love and its iconic landmarks.</p>
            </div>
            <div className="destination-box">
              <img src={tokyoImage} alt="Tokyo" className="destination-image" />
              <h3>Tokyo, Japan</h3>
              <p>Experience the vibrant culture and modern marvels of Tokyo.</p>
            </div>
            <div className="destination-box">
              <img src={newYorkImage} alt="New York" className="destination-image" />
              <h3>New York, USA</h3>
              <p>Discover the bustling metropolis and its famous attractions.</p>
            </div>
            <div className="destination-box">
              <img src={sydneyImage} alt="Sydney" className="destination-image" />
              <h3>Sydney, Australia</h3>
              <p>Enjoy the stunning harbor and beautiful beaches of Sydney.</p>
            </div>
          </div>
        </section>
      </main>
      <footer className="footer">
        <p>&copy; 2024 My Travel and Tour Website. All rights reserved by Siuuu shant Khadka.</p>
      </footer>
    </div>
  );
};

export default Home;
