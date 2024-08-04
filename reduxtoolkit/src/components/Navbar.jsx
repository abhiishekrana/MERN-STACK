import React from 'react'
import { useSelector } from 'react-redux'

const Navbar = ({kvalue}) => {
    const k = useSelector(store=>store.cart.k)
    console.log(k)
  return (
    <div style={{
        backgroundColor:"tomato",
        border:"1px solid black",

    }}>
      <h1>Cart<span>{k}</span></h1>
    </div>
  )
}

export default Navbar
