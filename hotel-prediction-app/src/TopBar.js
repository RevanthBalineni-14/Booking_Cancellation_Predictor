// TopBar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './TopBar.css';

const TopBar = () => {
  return (
    <div className="top-bar">
      <h1>Booking Cancellation Predictor</h1>
      <nav>
        <Link to="/eda">EDA</Link>
      </nav>
    </div>
  );
};

export default TopBar;
