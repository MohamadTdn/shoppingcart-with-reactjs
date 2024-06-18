import React from 'react'
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';

export default function CartItem(props) {

  const removeHandler = (id) => {
    props.onRemove(id)
  }

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
                <Button onClick={() => removeHandler(props.id)} variant="contained" startIcon={<DeleteIcon />} color='error' size="small">
                    Delete
                </Button>
            </td>
        </tr>
    </>
  )
}