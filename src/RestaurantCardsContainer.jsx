import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import RestaurantCard from './RestaurantCard.jsx';

class RestaurantCardsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurants: []
    };
  }

  componentDidMount() {
    fetch('https://learnreact.avicndugu.repl.co/restaurants.json')
      .then(res => res.json())
      .then(
        data => this.setState({
          restaurants: data.restaurants
        })
      );
  }

  render() {
    const { restaurants } = this.state;
    return (
      <Container>
        <Row xs={1} md={3}>
        {
          restaurants.map((restaurant, index) => (
            <Col>
              <RestaurantCard key={index} name={restaurant.restaurantName} address={restaurant.address} hours={restaurant.hours} />
            </Col>
          ))
        }
        </Row>
      </Container>
    );
  }
}

export default RestaurantCardsContainer;
