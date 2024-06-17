import React from 'react'
import './Shop.css'
import NavMenu from '../NavMenu/NavMenu'
import Banner from '../Banner/Banner'
import Products from '../Products/Products'
import Container from 'react-bootstrap/Container';

export default function Shop() {
  return (
    <div className='Shop'> 
      <Container fluid>
        <NavMenu />
        <Banner />
        <h1>Products</h1>
        <Products />
      </Container>
    </div>
  )
}
