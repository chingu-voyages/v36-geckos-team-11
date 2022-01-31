import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const RestaurantCard = () => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://picsum.photos/id/103/320/180" />
      <Card.Body>
        <Card.Title>Restaurant Name</Card.Title>
        <Card.Text>
          <p>Restaurant Location</p>
          <p>operation Hours</p>
        </Card.Text>
        <Button variant="primary">View Restaurant</Button>
      </Card.Body>
    </Card>
  );
};

export default RestaurantCard;
