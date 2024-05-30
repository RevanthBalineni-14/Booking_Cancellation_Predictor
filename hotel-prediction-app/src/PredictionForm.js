import React, { useState } from 'react';
import axios from 'axios';

const PredictionForm = () => {
  const [inputData, setInputData] = useState({
    hotel: 0,
    meal: 0,
    market_segment: 0,
    distribution_channel: 0,
    reserved_room_type: 0,
    deposit_type: 0,
    customer_type: 0,
    family: 0,
    lead_time: 0,
    // arrival_date_month: 0,
    // arrival_date_day_of_month: 0,
    stays_in_weekend_nights: 0,
    stays_in_week_nights: 0,
    adults: 0,
    children: 0,
    // babies: 0,
    is_repeated_guest: 0,
    previous_cancellations: 0,
    previous_bookings_not_canceled: 0,
    adr: 0,
    required_car_parking_spaces: 0,
    total_of_special_requests: 0,
    // kids: 0,
    total_nights: 0,
  });

  const [prediction, setPrediction] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputData({
      ...inputData,
      [name]: value,
    });
  };

  const [selectedModel, setSelectedModel] = useState('1'); 

  const handleModelChange = (e) => {
    setSelectedModel(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const numericInputData = Object.fromEntries(
        Object.entries(inputData).map(([key, value]) => [key, parseFloat(value)])
      );
  
      const response = await axios.post('http://127.0.0.1:5000/predict', {
        input_data: numericInputData,
        selectedModel: selectedModel,
      });
      
      // Extract predictions from the response
      const predictions = response.data.predictions;

      // Set the prediction state
      setPrediction(predictions[0]);

      // Handle the prediction response as needed
      console.log(response.data);
    } catch (error) {
      console.error('Error predicting:', error);
    }
  };
  
  const optionsHotel = {
    'Resort Hotel': 0,
    'City Hotel': 1,
  };

  const optionsMeal = {
    'BB': 0,
    'FB': 1,
    'HB': 2,
    'SC': 3,
    'Undefined': 4,
  };

  const optionsMarketSegment = {
    'Direct': 0,
    'Corporate': 1,
    'Online TA': 2,
    'Offline TA/TO': 3,
    'Complementary': 4,
    'Groups': 5,
    'Undefined': 6,
    'Aviation': 7,
  };

  const optionsDistributionChannel = {
    'Direct': 0,
    'Corporate': 1,
    'TA/TO': 2,
    'Undefined': 3,
    'GDS': 4,
  };

  const optionsDepositType = {
    'No Deposit': 0,
    'Refundable': 1,
    'Non Refund': 3,
  };

  const optionsCustomerType = {
    'Transient': 0,
    'Contract': 1,
    'Transient-Party': 2,
    'Group': 3,
  };

  return (
    <div className="prediction-form-container">
      <form onSubmit={handleSubmit} className="form-grid">
        {/* Hotel */}
        <div className="form-field">
          <label htmlFor="hotel">Hotel:</label>
          <select
            name="hotel"
            value={inputData.hotel}
            onChange={handleInputChange}
          >
            {Object.entries(optionsHotel).map(([label, value]) => (
              <option key={value} value={value}>
                {label}
              </option>
            ))}
          </select>
        </div>

        {/* Meal */}
        <div className="form-field">
          <label htmlFor="meal">Meal:</label>
          <select
            name="meal"
            value={inputData.meal}
            onChange={handleInputChange}
          >
            {Object.entries(optionsMeal).map(([label, value]) => (
              <option key={value} value={value}>
                {label}
              </option>
            ))}
          </select>
        </div>

        {/* Market Segment */}
        <div className="form-field">
          <label htmlFor="market_segment">Market Segment:</label>
          <select
            name="market_segment"
            value={inputData.market_segment}
            onChange={handleInputChange}
          >
            {Object.entries(optionsMarketSegment).map(([label, value]) => (
              <option key={value} value={value}>
                {label}
              </option>
            ))}
          </select>
        </div>

        {/* Distribution Channel */}
        <div className="form-field">
          <label htmlFor="distribution_channel">Distribution Channel:</label>
          <select
            name="distribution_channel"
            value={inputData.distribution_channel}
            onChange={handleInputChange}
          >
            {Object.entries(optionsDistributionChannel).map(([label, value]) => (
              <option key={value} value={value}>
                {label}
              </option>
            ))}
          </select>
        </div>

        {/* Reserved Room Type */}
        <div className="form-field">
          <label htmlFor="reserved_room_type">Reserved Room Type:</label>
          <input
            type="number"
            name="reserved_room_type"
            value={inputData.reserved_room_type}
            placeholder="Enter reserved room type value"
            onChange={handleInputChange}
          />
        </div>
        

        {/* Deposit Type */}
        <div className="form-field">
          <label htmlFor="deposit_type">Deposit Type:</label>
          <select
            name="deposit_type"
            value={inputData.deposit_type}
            onChange={handleInputChange}
          >
            {Object.entries(optionsDepositType).map(([label, value]) => (
              <option key={value} value={value}>
                {label}
              </option>
            ))}
          </select>
        </div>

        {/* Customer Type */}
        <div className="form-field">
          <label htmlFor="customer_type">Customer Type:</label>
          <select
            name="customer_type"
            value={inputData.customer_type}
            onChange={handleInputChange}
          >
            {Object.entries(optionsCustomerType).map(([label, value]) => (
              <option key={value} value={value}>
                {label}
              </option>
            ))}
          </select>
        </div>

        {/* Family */}
        <div className="form-field">
          <label htmlFor="family">Family:</label>
          <input
            type="number"
            name="family"
            value={inputData.family}
            placeholder="Enter family value"
            onChange={handleInputChange}
          />
        </div>

        {/* Lead Time */}
        <div className="form-field">
          <label htmlFor="lead_time">Lead Time:</label>
          <input
            type="number"
            name="lead_time"
            value={inputData.lead_time}
            placeholder="Enter lead time value"
            onChange={handleInputChange}
          />
        </div>


        {/* Stays in Weekend Nights */}
        <div className="form-field">
          <label htmlFor="stays_in_weekend_nights">Stays in Weekend:</label>
          <input
            type="number"
            name="stays_in_weekend_nights"
            value={inputData.stays_in_weekend_nights}
            placeholder="Enter stays in weekend nights value"
            onChange={handleInputChange}
          />
        </div>

        {/* Stays in Week Nights */}
        <div className="form-field">
          <label htmlFor="stays_in_week_nights">Stays in Weekdays:</label>
          <input
            type="number"
            name="stays_in_week_nights"
            value={inputData.stays_in_week_nights}
            placeholder="Enter stays in week nights value"
            onChange={handleInputChange}
          />
        </div>

        {/* Adults */}
        <div className="form-field">
          <label htmlFor="adults">Adults:</label>
          <input
            type="number"
            name="adults"
            value={inputData.adults}
            placeholder="Enter adults value"
            onChange={handleInputChange}
          />
        </div>

        {/* Children */}
        <div className="form-field">
          <label htmlFor="children">Children:</label>
          <input
            type="number"
            name="children"
            value={inputData.children}
            placeholder="Enter children value"
            onChange={handleInputChange}
          />
        </div>

      

        {/* Is Repeated Guest */}
        <div className="form-field">
          <label htmlFor="is_repeated_guest">Is Repeated Guest:</label>
          <input
            type="number"
            name="is_repeated_guest"
            value={inputData.is_repeated_guest}
            placeholder="Enter is repeated guest value"
            onChange={handleInputChange}
          />
        </div>

        {/* Previous Cancellations */}
        <div className="form-field">
          <label htmlFor="previous_cancellations">Previous Cancellations:</label>
          <input
            type="number"
            name="previous_cancellations"
            value={inputData.previous_cancellations}
            placeholder="Enter previous cancellations value"
            onChange={handleInputChange}
          />
        </div>

        {/* Previous Bookings Not Canceled */}
        <div className="form-field">
          <label htmlFor="previous_bookings_not_canceled">Bookings Canceled:</label>
          <input
            type="number"
            name="previous_bookings_not_canceled"
            value={inputData.previous_bookings_not_canceled}
            placeholder="Enter previous bookings not canceled value"
            onChange={handleInputChange}
          />
        </div>

        {/* ADR */}
        <div className="form-field">
          <label htmlFor="adr">ADR:</label>
          <input
            type="number"
            name="adr"
            value={inputData.adr}
            placeholder="Enter ADR value"
            onChange={handleInputChange}
          />
        </div>

        {/* Required Car Parking Spaces */}
        <div className="form-field">
          <label htmlFor="required_car_parking_spaces">No.of Parking Spaces:</label>
          <input
            type="number"
            name="required_car_parking_spaces"
            value={inputData.required_car_parking_spaces}
            placeholder="Enter required car parking spaces value"
            onChange={handleInputChange}
          />
        </div>

        {/* Total of Special Requests */}
        <div className="form-field">
          <label htmlFor="total_of_special_requests">No.of Special Requests:</label>
          <input
            type="number"
            name="total_of_special_requests"
            value={inputData.total_of_special_requests}
            placeholder="Enter total of special requests value"
            onChange={handleInputChange}
          />
        </div>

        {/* Total Nights */}
        <div className="form-field">
          <label htmlFor="total_nights">Total Nights:</label>
          <input
            type="number"
            name="total_nights"
            value={inputData.total_nights}
            placeholder="Enter total nights value"
            onChange={handleInputChange}
          />
        </div>

        {/* Model Selection Drop-down */}
        <div className="form-field">
          <label htmlFor="model">Select Model:</label>
          <select
            name="model"
            value={selectedModel}
            onChange={handleModelChange}
          >
            <option value="1">Logistic Regression</option>
            <option value="2">KNN Neighbors</option>
            <option value="3">SVM Classifier</option>
            <option value="4">Naive Bayes</option>
            <option value="5">Random Forest</option>
            <option value="6">Decision Tree</option>
          </select>
        </div>

        <div className="button-container">
          <button type="submit">Predict</button>
        </div>
      </form>
      
      {prediction !== null && (
        <div className="prediction-result">
          <h2>Prediction Result:</h2>
          <p>{prediction}</p>
        </div>
      )}
      </div>
  );
};

export default PredictionForm;