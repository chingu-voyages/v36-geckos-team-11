import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import '../index.css';
import { Container, Nav, FormControl, Form } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const Navigationbar = () => {
  return (
    <Navbar>
      <Container fluid>
        <Navbar.Brand href='#'>Food ordering app</Navbar.Brand>
        <Navbar.Collapse id='navbarScroll'>
          <Nav
            className='me-auto my-2 my-lg-0'
            style={{ maxHeight: '100px' }}
          ></Nav>
          <Form className='d-flex'>
            <FontAwesomeIcon icon={faSearch} />
            <FormControl
              type='search'
              placeholder='Search'
              className='me-2'
              aria-label='Search'
            />
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigationbar;
