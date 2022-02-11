import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import RestaurantCard from './RestaurantCard.jsx';

class RestaurantCardsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurants: [],
      error: null,
    };
  }

  componentDidMount() {
    fetch('https://learnreact.avicndugu.repl.co/resstaurants.json')
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw Error(response.status);
        }
      })
      .then(
        (data) => {
          this.setState({
            restaurants: data.restaurants,
          });
        },
        (error) => {
          this.setState({
            error: error,
          });
        }
      );
  }

  render() {
    const { restaurants, error } = this.state;
    if (error) {
      return <div>Error code/ message: {error.message}</div>;
    } else {
      return (
        <Container>
          <Row xs={1} md={3}>
            {restaurants.map((restaurant, index) => (
              <Col>
                <p>{error}</p>
                <RestaurantCard
                  key={index}
                  name={restaurant.restaurantName}
                  address={restaurant.address}
                  hours={restaurant.hours}
                />
              </Col>
            ))}
          </Row>
        </Container>
      );
    }
  }
}

export default RestaurantCardsContainer;
