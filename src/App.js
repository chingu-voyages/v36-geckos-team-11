import React from 'react';
import './index.css';
// import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Navbar from './Navbar.jsx'
import RestaurantCard from './RestaurantCard.jsx';


const App = () => {
  return (
    <div className='lg' >
      <Row >
        <Navbar />
        <RestaurantCard />
      </Row>
    </div>
  );
};

export default App;

// className="justify-content-md-center"