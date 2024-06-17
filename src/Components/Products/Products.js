import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function Products() {
  return (
    <Card className='mt-5' style={{backgroundColor: 'blue'}} sx={{ maxWidth: 250 }}>
      <CardMedia
        sx={{ height: 240 }}
        image="assets/banner.jfif"
        title="green iguana"
      />
      <CardContent>
        <Typography className='text-white' gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" className='text-white'>
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
      </CardActions>
    </Card>
  )
}