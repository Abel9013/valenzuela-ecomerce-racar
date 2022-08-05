import React, { createContext, useContext, useState } from 'react'

const CartContext = createContext([]);

export const useCartContext = ()=> useContext(CartContext);

const CartContextProvider = ({children}) => {
    const[cartList,setCartList] = useState([]);

    const applyCart = (prod)=>{
      const index = cartList.findIndex((prod) => prod.id === prod.id);
      if(index !== -1){
        const oldqty = cartList[index].quantity;
        const newCart = cartList.filter(item => item.id !== prod.id)
        prod.quantity += oldqty; 
        setCartList([...newCart, prod]);
      }else{
        setCartList([...cartList, prod])

      }
      // console.log(index);
    }
    const emptyCart = () => {
      setCartList([]);
    }

  return (
    <CartContext.Provider value ={{
      emptyCart,
      cartList,
      applyCart
    }} >
        {children}
    </CartContext.Provider>
  )
}

export default CartContextProvider