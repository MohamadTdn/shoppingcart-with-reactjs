import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Typography from '@mui/material/Typography';

export default function Banner() {
  return (
    <Container fluid className='mt-3 text-center'>
    <Row>
      <Col xs={0} lg={6}>
        <img style={{width: '500px' , height: '350px'}} src="assets/banner.jfif" alt="" />
      </Col>
      <Col xs={12} lg={6}>
      <Typography className='pt-4' style={{lineHeight: '50px'}} variant="h5" gutterBottom>
        body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
        blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
        neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
        quasi quidem quibusdam.
      </Typography>
      </Col>
    </Row>
  </Container>
  )
}
