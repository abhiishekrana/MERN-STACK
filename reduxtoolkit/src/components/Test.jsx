import React from 'react'
import { useSelector } from 'react-redux'

const Test = () => {
    const k = useSelector(store=>store.cart.k)
  return (
    <div>
      <h2>Test value<span>{k}</span></h2>
    </div>
  )
}

export default Test
