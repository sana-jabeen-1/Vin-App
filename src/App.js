import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './Routes';
import Header from './Header';


function App() {
  return (
    <div className="App">
      <>
      
     
      <Router>
        <Header/>
      {/* Include the Header component */}
      <AppRoutes /> {/* Include the separate Routes component */}
      
    </Router>
    
   
    </>
    </div>
  );
}

export default App;
