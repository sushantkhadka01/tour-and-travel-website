import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Header from './Header'; 

const Domestic = () => {
  return (
    <div>
      <Header /> 
      
      <div className="domestic-content">
        <h1>Explore Domestic Tours</h1>
        <nav className="tour-nav">
          <ul>
            <li><Link to="adventure-trip">Adventure Trip</Link></li>
            <li><Link to="city-tours">City Tours</Link></li>
          </ul>
        </nav>
        <Outlet />
      </div>
    </div>
  );
};

export default Domestic;
