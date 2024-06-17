import React from 'react'
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';

export default function CartItem() {
  return (
    <>
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
    </>
  )
}