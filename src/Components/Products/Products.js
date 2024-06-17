import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import Typography from '@mui/material/Typography';

export default function Products() {
  return (
    <Card className='mt-5' style={{backgroundColor: '#a09e9e'}} sx={{ maxWidth: 250 }}>
      <CardMedia
        sx={{ height: 240 }}
        image="assets/banner.jfif"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Shoe
        </Typography>
        <Typography variant="h5" >
          400$
        </Typography>
      </CardContent>
      <CardActions>
      <Button variant="contained" endIcon={<AddIcon />}>
        Add To Cart
      </Button>
      </CardActions>
    </Card>
  )
}
