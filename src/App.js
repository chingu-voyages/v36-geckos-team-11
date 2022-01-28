import React from 'react';
import './index.css';
// import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Navbar from './Navbar.jsx'
import CardsContainer from './CardsContainer.jsx';


const App = () => {
  return (
    <div>
      <div className='lg' >
        <Row >
          <Navbar />
        </Row>
      </div>
    <CardsContainer />
    </div>
  );
};

export default App;

// className="justify-content-md-center"