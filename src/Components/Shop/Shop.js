import React from 'react'
import './Shop.css'
import NavMenu from '../NavMenu/NavMenu'
import Banner from '../Banner/Banner'
import Products from '../Products/Products'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
import CartItem from '../CartItem/CartItem'
import { useState } from 'react'

export default function Shop() {

  const [products, setProducts] = useState([
    {id: 1, imgSrc: 'assets/1.png', productName: 'Air Jordan' , productPrice: 400 , count: 1},
    {id: 2, imgSrc: 'assets/prod1.png', productName: 'Nike Basketball' , productPrice: 600 , count: 1},
    {id: 3, imgSrc: 'assets/prod2.jfif', productName: 'Convers' , productPrice: 300 , count: 1},
    {id: 4, imgSrc: 'assets/prod3.jfif', productName: 'Nike Tennis' , productPrice: 400 , count: 1},
    {id: 5, imgSrc: 'assets/prod4.webp', productName: 'Nike Shoe' , productPrice: 250 , count: 1},
    {id: 6, imgSrc: 'assets/prod5.jfif', productName: 'Nike Football' , productPrice: 460 , count: 1},
    {id: 7, imgSrc: 'assets/prod6.jfif', productName: 'Volleyball Shoe' , productPrice: 700 , count: 1},
    {id: 8, imgSrc: 'assets/prod7.jfif', productName: 'Nike 2' , productPrice: 200 , count: 1},
    {id: 9, imgSrc: 'assets/prod8.jfif', productName: 'Nike 3' , productPrice: 400 , count: 1},
    {id: 10, imgSrc: 'assets/prod3.jfif', productName: 'Nike Limited Edition' , productPrice: 1000 , count: 1},
  ])

  const [cart, setCart] = useState([])

  const [total, setTotal] = useState(0)

  const addToCart = (productId) => {
    let allProducts = [...products]
    let mainCart = [...cart]
    let targetProduct = allProducts.find(product => {
      return productId === product.id
    })
    let totalPrice = 0

    mainCart.push(targetProduct)

    setCart(prevState => {
      return prevState = mainCart
    })

    mainCart.forEach(product => {
       totalPrice += product.productPrice * product.count
    })

    setTotal(prevState => {
      return prevState = totalPrice
    })
  }

  const removeFromCart = (productId) => {
    let mainCart = [...cart]
    let totalPrice = 0

    let targetProductIndex = mainCart.findIndex(product => {
      return productId === product.id
    })

    mainCart.splice(targetProductIndex, 1)

    setCart(prevState => {
      return prevState = mainCart
    })

    mainCart.forEach(product => {
      totalPrice += product.productPrice * product.count
   })

    setTotal(prevState => {
      return prevState = totalPrice
    })
  }

  return (
    <div className='Shop'> 
      <Container fluid>
        <NavMenu />
        <Banner />
        <h1>Products</h1>
        <Container>
          <Row>
            {products.map(product => {
              return (
                <Col key={product.id} xs={12} sm={6} md={4} lg={3}>
                  <Products onAdd={addToCart} {...product} />
                </Col>
              )
            })}
          </Row>
        </Container>
         <h1>Cart</h1>
         <div className='Cart'>
          <Row>
            <Col>
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
              <tbody className='CartItems'>
                {cart.map(cartItem => {
                  return (
                    <CartItem onRemove={removeFromCart} key={cartItem.id} {...cartItem} />
                  )
                })}
              </tbody>
              <h4 className='Total-price'>Total : {total}</h4>
              </Table>
            </Col>
          </Row>
         </div>
      </Container>
    </div>
  )
}
