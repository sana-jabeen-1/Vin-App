import React, { useState } from 'react';
import axios from 'axios'; // Import axios for making API calls
import './VinDetailsForm.css'; // Import custom CSS for styling (optional)

const VinDetailsForm = () => {
  const [vin, setVin] = useState(''); // State to track the VIN input
  const [vinDetails, setVinDetails] = useState(null); // State to store VIN details
  const [loading, setLoading] = useState(false); // Loading state
  const [message, setMessage] = useState(''); // Message state for validation and errors

  // Function to fetch VIN details from the API
  const fetchVinDetails = async (vin) => {
    setLoading(true);
    const config = {
      method: 'get',
      url: `https://api.vehicledatabases.com/vin-decode/${vin}`,
      headers: {
        'x-AuthKey': '3a4b3c05de634ec98e38a3406717362a',
      },
    };

    try {
      const response = await axios(config);
      const data = response.data;

      if (data && data.data) {
        setVinDetails(data.data);
        setMessage('VIN details fetched successfully!');
      } else {
        setMessage('No details found for this VIN.');
        setVinDetails(null);
      }
    } catch (error) {
      setMessage('Error fetching VIN details.');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (vin.length !== 17) {
      setMessage('Invalid VIN. Please enter a valid 17-character VIN.');
      setVinDetails(null);
    } else {
      fetchVinDetails(vin); // Fetch VIN details if valid
    }
  };

  return (
    <div className="vin-details-form-container">
      {/* Form for VIN input */}
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label>Enter VIN Number</label>
          <input
            type="text"
            placeholder="Enter VIN Number"
            value={vin}
            onChange={(e) => setVin(e.target.value.toUpperCase())}
            className="vin-input"
            maxLength="17"
            required
          />
        </div>
        <button type="submit" className="submit-button">Get VIN Details</button>
      </form>

      {/* Display Loading Spinner */}
      {loading && <p>Loading...</p>}

      {/* Display Message */}
      {message && <p className="message">{message}</p>}

      {/* Display VIN details if available */}
      {vinDetails && (
        <div className="vin-details">
          <h3>Vehicle Information</h3>

          {/* Basic Information */}
          <div className="section">
            <h4>Basic Information</h4>
            <div className="field">
              <label>VIN:</label>
              <span>{vinDetails.intro?.vin}</span>
            </div>
            <div className="field">
              <label>Make:</label>
              <span>{vinDetails.basic?.make}</span>
            </div>
            <div className="field">
              <label>Model:</label>
              <span>{vinDetails.basic?.model}</span>
            </div>
            <div className="field">
              <label>Year:</label>
              <span>{vinDetails.basic?.year}</span>
            </div>
            <div className="field">
              <label>Trim:</label>
              <span>{vinDetails.basic?.trim}</span>
            </div>
            <div className="field">
              <label>Body Type:</label>
              <span>{vinDetails.basic?.body_type}</span>
            </div>
            <div className="field">
              <label>Vehicle Type:</label>
              <span>{vinDetails.basic?.vehicle_type}</span>
            </div>
          </div>

          {/* Engine Information */}
          <div className="section">
            <h4>Engine Information</h4>
            <div className="field">
              <label>Engine Size:</label>
              <span>{vinDetails.engine?.engine_size}</span>
            </div>
            <div className="field">
              <label>Engine Capacity:</label>
              <span>{vinDetails.engine?.engine_capacity}</span>
            </div>
          </div>

          {/* Manufacturer Information */}
          <div className="section">
            <h4>Manufacturer Information</h4>
            <div className="field">
              <label>Manufacturer:</label>
              <span>{vinDetails.manufacturer?.manufacturer}</span>
            </div>
            <div className="field">
              <label>Region:</label>
              <span>{vinDetails.manufacturer?.region}</span>
            </div>
            <div className="field">
              <label>Country:</label>
              <span>{vinDetails.manufacturer?.country}</span>
            </div>
            <div className="field">
              <label>Plant City:</label>
              <span>{vinDetails.manufacturer?.plant_city}</span>
            </div>
          </div>

          {/* Additional Information (if required) */}
          <div className="section">
            <h4>Additional Information</h4>
            <div className="field">
              <label>Drive Type:</label>
              <span>{vinDetails.drivetrain?.drive_type}</span>
            </div>
            <div className="field">
              <label>Fuel Type:</label>
              <span>{vinDetails.fuel?.fuel_type}</span>
            </div>
            <div className="field">
              <label>Restraint Systems:</label>
              <span>{vinDetails.restraint?.others}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default VinDetailsForm;
