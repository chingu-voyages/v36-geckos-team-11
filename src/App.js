import React from 'react';
import './index.css';
// import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Navbar from './Navbar.jsx'
import CardsContainer from './CardsContainer.jsx';


const App = () => {
  return (
    <div className='lg' >
      <Row >
        <Navbar />
        <CardsContainer />
      </Row>
    </div>
  );
};

export default App;

// className="justify-content-md-center"