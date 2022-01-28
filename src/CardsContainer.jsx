import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import RestaurantCard from './RestaurantCard.jsx';

const CardsContainer = () => {
  return(
    <Container>
      <Row>
        <Col sm={4}>
          <RestaurantCard />
        </Col>
        <Col sm={4}>
          <RestaurantCard />
        </Col>
        <Col sm={4}>
          <RestaurantCard />
        </Col>
        <Col sm={4}>
          <RestaurantCard />
        </Col>
        <Col sm={4}>
          <RestaurantCard />
        </Col>
        <Col sm={4}>
          <RestaurantCard />
        </Col>
        <Col sm={4}>
          <RestaurantCard />
        </Col>
        <Col sm={4}>
          <RestaurantCard />
        </Col>
        <Col sm={4}>
          <RestaurantCard />
        </Col>
        <Col sm={4}>
          <RestaurantCard />
        </Col>
      </Row>
    </Container>
  )
}

export default CardsContainer;