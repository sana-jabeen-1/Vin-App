import React from 'react';
import './VinSearch.css'; // Import custom CSS file for styling
import Header from '../Header';
import '../Header.css';
import FaqComp from '../FaqComp';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const VinSearch = () => {

  const [vin, setVin] = useState(''); // State for VIN input
  const [message, setMessage] = useState(''); // State for validation message
  const [loading, setLoading] = useState(false); // State for loading indicator

  const navigate = useNavigate(); // Initialize the navigate function

  // Transliterate each character to its respective value
  const transliterate = (c) => {
    return '0123456789.ABCDEFGH..JKLMN.P.R..STUVWXYZ'.indexOf(c) % 10;
  };

  // Calculate the check digit for VIN validation
  const getCheckDigit = (vin) => {
    const map = '0123456789X';
    const weights = '8765432X098765432';
    let sum = 0;
    for (let i = 0; i < 17; ++i) sum += transliterate(vin[i]) * map.indexOf(weights[i]);
    return map[sum % 11];
  };

  // Validate VIN number
  const validateVin = (vin) => {
    if (vin.length !== 17) return false;
    return getCheckDigit(vin) === vin[8];
  };

  // Handle VIN input change
  const handleVinChange = (e) => {
    setVin(e.target.value.toUpperCase());
    setMessage('');
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateVin(vin)) {
      setMessage('VIN is valid. Redirecting to details form...');
      setLoading(true);

      // Simulate an API call to validate VIN and then navigate to the PersonalInfo page
      setTimeout(() => {
        setLoading(false);
        // Navigate to the PersonalInfo page and pass the VIN as a state parameter
        navigate('/personal-info', { state: { vin: vin } });
      }, 1000);
    } else {
      setMessage('Invalid VIN number. Please check and enter a valid 17-character VIN.');
    }
  };
  
  return (
    <>
    <div>
    <Header/>
    
    <div className="vin-search-container">
      <div className="vin-search-content">
           {/* Heading Section */}
           <h3 className="vin-subtitle">Find cars audit by VIN numbers</h3>
        <h1 className="vin-title">
          Sell your vehicle easily by checking <br /> its history report
        </h1>
        {/* VIN Search Form */}
        <div className="vin-form-container sticky-searchbar">
        <form onSubmit={handleSubmit}>
        <div className="vin-input-wrapper">
          <input
            type="text"
            className="vin-input"
            minLength="17"
            maxLength="17"
            placeholder="Enter VIN Number"
            value={vin}
            onChange={handleVinChange}
          />
          <button type="submit" className="vin-submit-btn" disabled={loading}>
            {loading ? 'Loading...' : 'Get Report'}
          </button>
        </div>
      </form>
      {/* Display validation message */}
      {message && <p className="vin-message">{message}</p>}
    </div>


        {/* "How It Works" Section */}
        <section className="how-it-works">
          <div className="container mx-auto px-2 sm:px-6 lg:px-8">
            <div className="text-center">
              <h3 className="text-gray-500 text-[18px] font-medium mb-5">HOW IT WORKS?</h3>
              <h2 className="text-[#222] text-[30px] font-bold max-w-[720px] mx-auto leading-[1.2em]">
                Three easy steps to get your vehicle history report
              </h2>
            </div>
            <div className="steps-container mt-8 flex justify-center items-center flex-wrap md:flex-nowrap">
              {/* Step 1 */}
              <div className="step-item text-center">
                <img
                  src="https://www.autoauditpro.com/_next/static/media/how-it-work-1.e50c8ac5.png"
                  alt="Enter VIN Number"
                  className="step-image"
                />
                <h3 className="step-title">Enter VIN Number</h3>
                <p className="step-description">Enter VIN number in the search bar</p>
              </div>
              {/* Step 2 */}
              <div className="step-item text-center md:border-l-2 md:border-r-2 border-[#ddd]">
                <img
                  src="https://www.autoauditpro.com/_next/static/media/how-it-work-2.d9fa2745.png"
                  alt="Verify Payment"
                  className="step-image"
                />
                <h3 className="step-title">Verify Payment</h3>
                <p className="step-description">Select payment method to proceed</p>
              </div>
              {/* Step 3 */}
              <div className="step-item text-center">
                <img
                  src="https://www.autoauditpro.com/_next/static/media/how-it-work-3.bce2e4e5.png"
                  alt="Email Report"
                  className="step-image"
                />
                <h3 className="step-title">Email Report</h3>
                <p className="step-description">Get your Report Via Email</p>
              </div>
            </div>
          </div>
        </section>
      </div>
      <section class="card-container">
    <div class="card">
        <img src="" alt="Title History Icon"/>
        <h3>Title History</h3>
        <p>Current and historical state DMV title data from the National Motor Vehicle Title Information System (NMVTIS).</p>
    </div>
    <div class="card">
        <img src="path/to/icon2.png" alt="Junk / Salvage Info Icon"/>
        <h3>Junk / Salvage Info</h3>
        <p>Current and historical information from junk yards, dismantlers, salvage auctions, and insurance companies.</p>
    </div>
    <div class="card">
        <img src="path/to/icon3.png" alt="Title Brand Check Icon"/>
        <h3>Title Brand Check</h3>
        <p>Over 70 current and historical title brands, including negative brands such as Junk, Salvage, Rebuilt, and more.</p>
    </div>
    <div class="card">
        <img src="path/to/icon4.png" alt="Odometer History Icon"/>
        <h3>Odometer History</h3>
        <p>Current and historical odometer readings from DMV titles and other sources to track mileage over time.</p>
    </div>
    <div class="card">
        <img src="path/to/icon5.png" alt="Vehicle Values Icon"/>
        <h3>Vehicle Values</h3>
        <p>Vehicle valuation information reported from leading sources, providing trade-in and retail values.</p>
    </div>
    <div class="card">
        <img src="path/to/icon6.png" alt="Warranty Info Icon"/>
        <h3>Warranty Info</h3>
        <p>Factory warranty information for drive train and safety systems as reported by the vehicle’s manufacturer.</p>
    </div>
    <div class="card">
        <img src="path/to/icon6.png" alt="Inspection Information"/>
        <h3>Inspection Information</h3>
        <p>Federal highway inspection information provides inspection date, and safety, driver, and hazardous materials violations and more.</p>
    </div>
    <div class="card">
        <img src="path/to/icon6.png" alt="Safety Recalls"/>
        <h3>Safety Recalls</h3>
        <p>Open and issued NHTSA and manufacturer recalls. Shows recall date and description, risk severity, whether it should be driven, sold and more.</p>
    </div>
    <div class="card">
        <img src="path/to/icon6.png" alt="Open Liens"/>
        <h3>Open Liens</h3>
        <p>An open lien (loan from a bank or finance company that has not been fully paid) the report shows the bank name and date the loan was opened. Data is reported by major automotive lenders.</p>
    </div>
    <div class="card">
        <img src="path/to/icon6.png" alt="Active and Recovered Theft"/>
        <h3>Active and Recovered Theft</h3>
        <p>Active and recovered theft records show when a vehicle has been reported as stolen, either an active theft (not reported as located by law enforcement) or a recovered theft (located).</p>
    </div>
    <div class="card">
        <img src="path/to/icon6.png" alt="Registration Information"/>
        <h3>Registration Information</h3>
        <p>This section identifies this vehicle's current registration and any reported prior registration events by date. </p>
    </div>
    <div class="card">
        <img src="path/to/icon6.png" alt="Other Information"/>
        <h3>Other Information</h3>
        <p>Reports also include collision and damage information from limited state and federal sources, NHTSA 5-star crash ratings, and detailed vehicle specification information from VIN decode, vehicles available for sale and much more. </p>
    </div>
    
</section>
    </div>
    <FaqComp/>
</div>
    </> 
  );
};

export default VinSearch;
