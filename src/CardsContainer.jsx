import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import RestaurantCard from './RestaurantCard.jsx';

const CardsContainer = () => {
  return(
    <Container>
      <Row xs={1} md={3}>
        {Array.from({ length: 10 }).map((_, idx) => (
          <Col>
            <RestaurantCard />
          </Col>
        ))}  
      </Row>
    </Container>
  )
}

export default CardsContainer;