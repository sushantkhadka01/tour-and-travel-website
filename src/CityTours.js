import React from 'react';
import kathmanduImage from './assets/kathmandu.jpg';
import pokharaImage from './assets/pokhara.jpg';
import lalitpurImage from './assets/lalitpur.jpg';
import bhaktapurImage from './assets/bhaktapur.jpg';
import janakpurImage from './assets/janakpur.jpg';
import './CityTours.css';

const CityTours = () => {
  return (
    <div className="tour-details">
      <div className="city">
        <img src={kathmanduImage} alt="Kathmandu" className="city-image" />
        <h3>Kathmandu</h3>
        <p>The capital city, known for its historic temples, vibrant culture, and bustling markets.</p>
      </div>
      
      <div className="city">
        <img src={pokharaImage} alt="Pokhara" className="city-image" />
        <h3>Pokhara</h3>
        <p>Famous for its breathtaking views of the Himalayas, serene lakes, and adventure activities.</p>
      </div>
      
      <div className="city">
        <img src={lalitpurImage} alt="Lalitpur" className="city-image" />
        <h3>Lalitpur</h3>
        <p>Known for its ancient temples, intricate woodwork, and rich history.</p>
      </div>
      
      <div className="city">
        <img src={bhaktapurImage} alt="Bhaktapur" className="city-image" />
        <h3>Bhaktapur</h3>
        <p>Renowned for its well-preserved medieval architecture and traditional Newari culture.</p>
      </div>
      
      <div className="city">
        <img src={janakpurImage} alt="Janakpur" className="city-image" />
        <h3>Janakpur</h3>
        <p>A historic and religious city known for its association with the Hindu epic Ramayana.</p>
      </div>
    </div>
  );
};

export default CityTours;
