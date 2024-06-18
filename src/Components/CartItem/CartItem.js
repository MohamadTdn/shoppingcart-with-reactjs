import React from 'react'
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';

export default function CartItem(props) {
  return (
    <>
        <tr>
            <td>
                <img style={{width: '80px'}} src={props.imgSrc} alt="" />
            </td>
            <td>{props.productName}</td>
            <td>{props.productPrice} $</td>
            <td>
                <input type="number" style={{width: '70px'}} />
            </td>
            <td>
                <Button variant="contained" startIcon={<DeleteIcon />} color='error' size="small">
                    Delete
                </Button>
            </td>
        </tr>
    </>
  )
}