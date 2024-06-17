import React from 'react'
import './Shop.css'
import NavMenu from '../NavMenu/NavMenu'
import Banner from '../Banner/Banner'
import Products from '../Products/Products'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Shop() {
  return (
    <div className='Shop'> 
      <Container fluid>
        <NavMenu />
        <Banner />
        <h1>Products</h1>
        <Container>
          <Row>
            <Col xs={12} sm={6} md={4} lg={3}>
              <Products />
            </Col>
            <Col xs={12} sm={6} md={4} lg={3}>
              <Products />
            </Col>
            <Col xs={12} sm={6} md={4} lg={3}>
              <Products />
            </Col>
            <Col xs={12} sm={6} md={4} lg={3}>
              <Products />
            </Col>
            <Col xs={12} sm={6} md={4} lg={3}>
              <Products />
            </Col>
            <Col xs={12} sm={6} md={4} lg={3}>
              <Products />
            </Col>
          </Row>
        </Container>
         <h1>Cart</h1>
      </Container>
    </div>
  )
}
