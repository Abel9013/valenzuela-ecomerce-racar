import React, { createContext, useContext, useState } from 'react'

const CartContext = createContext([]);

export const useCartContext = ()=> useContext(CartContext);

const CartContextProvider = ({children}) => {
    const[cartList,setCartList] = useState([]);
    const applyCart = (prod)=>{
      setCartList([...cartList, prod])
    }
  return (
    <CartContext.Provider value ={{
      cartList,
      applyCart
    }} >
        {children}
    </CartContext.Provider>
  )
}

export default CartContextProvider