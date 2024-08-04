import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addToCart } from '../utils/cartSlice';

const Cart = () => {
    const dispatch = useDispatch();
    const addingToCart = () =>{
        dispatch(addToCart());
    }

  return (
    <div >
      <button style={{
        background:"green",
        padding:16,
        border:"none",
        color:"white",
        fontSize:"24px",
        marginTop:20,
        cursor:"pointer"
      }}
      onClick={addingToCart}
      >
         Add to Cart {0}</button>
    </div>
  )
}

export default Cart
