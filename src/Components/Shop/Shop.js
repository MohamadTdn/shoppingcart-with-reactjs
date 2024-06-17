import React from 'react'
import './Shop.css'
import NavMenu from '../NavMenu/NavMenu'
import Banner from '../Banner/Banner'
import Products from '../Products/Products'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';

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
         <div className='Cart'>
         <Table striped bordered hover>
            <thead>
              <tr>
                <th>Product Image</th>
                <th>Product Name</th>
                <th>Product Price</th>
                <th>Count</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <img style={{width: '80px'}} src="assets/banner.jfif" alt="" />
                </td>
                <td>Shoe</td>
                <td>400 $</td>
                <td>
                  <input type="number" style={{width: '70px'}} />
                </td>
                <td>
                <Button variant="contained" startIcon={<DeleteIcon />} color='error' size="small">
                  Delete
                </Button>
                </td>
              </tr>
            </tbody>
          </Table>
         </div>
      </Container>
    </div>
  )
}
