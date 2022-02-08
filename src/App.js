import React from 'react';
import './index.css';
import Row from 'react-bootstrap/Row';
import Navbar from './Navbar.jsx';
import CardsContainer from './CardsContainer.jsx';
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
      <CardsContainer />
    </div>
  );
};

export default App;

// className="justify-content-md-center"
