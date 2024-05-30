// EDAPage.js
import React from 'react';
import './EdaPage.css';

// Import images
import arrivalsVsMonth from './images/ArrivalsVsMonth.png';
import countryOrigin from './images/CountryOrigin.png';
import hotelTypes from './images/HotelTypes.png';
import mealTypes from './images/MealTypes.png';
import monthVsStaytype from './images/MonthVsStaytype.png';
import priceVsType from './images/PriceVsType.png';
import rateVsHotel from './images/RateVsHotel.PNG';
import specialReqVsCanc from './images/SpecialReqVsCanc.png';

const EDAPage = () => {
  const images = [
    { src: arrivalsVsMonth, alt: 'Arrivals vs. Month', description: 'Histogram of Arrivals vs Month' },
    { src: countryOrigin, alt: 'Country of Origin', description: 'Histogram of No.Of customers vs Origin Country' },
    { src: hotelTypes, alt: 'Hotel Types', description: 'Histogram of No.Of customers vs Types of Hotels' },
    { src: mealTypes, alt: 'Meal Types', description: 'Pie Chart of Meal Types' },
    { src: monthVsStaytype, alt: 'Month vs. Stay Type', description: 'Arrival Month vs. Stay Type' },
    { src: priceVsType, alt: 'Price vs. Type', description: 'Price vs. Room Type' },
    { src: rateVsHotel, alt: 'Rate vs. Hotel', description: 'Pie chart of Rate vs. Hotel' },
    { src: specialReqVsCanc, alt: 'Special Requests vs. Cancellations', description: 'Histogram of Special Requests vs. Cancellations' },
  ];

  return (
    <div className="eda-page">
      <h1>Exploratory Data Analysis (EDA) Page</h1>
      <div className="eda-images-container">
        {images.map((image, index) => (
          <div key={index} className="eda-image">
            <img src={image.src} alt={image.alt} />
            <p>{image.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EDAPage;
