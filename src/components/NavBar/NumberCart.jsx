import React, { useState } from 'react'
import { useCartContext } from '../CartContext/CartContext'
const NumberCart = () => {
    const { cartList } =useCartContext();
    const [number, setNumber] = useState(0);
    console.log(cartList.length);
    setNumber(cartList.length);
  return (
    <h3>{number}</h3>
  )
}

export default NumberCart