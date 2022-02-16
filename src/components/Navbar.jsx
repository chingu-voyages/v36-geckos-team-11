import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import '../index.css';
import { Container, Nav, FormControl, Form, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const Navigationbar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container className="py-3">
        <Navbar.Brand href="#">Food Ordering App</Navbar.Brand>
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">
              <FontAwesomeIcon icon={faSearch} />
            </Button>
          </Form>
      </Container>
    </Navbar>
  );
};

export default Navigationbar;
