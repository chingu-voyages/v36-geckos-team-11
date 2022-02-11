import React from 'react';
import './index.css';
import Row from 'react-bootstrap/Row';
import Navbar from './components/Navbar.jsx';
import RestaurantCardsContainer from './RestaurantCardsContainer.jsx';

const App = () => {
  return (
    <div>
      <div className="lg">
        <Row>
          <Navbar />
        </Row>
      </div>
      <RestaurantCardsContainer />
    </div>
  );
};

export default App;

// className="justify-content-md-center"
