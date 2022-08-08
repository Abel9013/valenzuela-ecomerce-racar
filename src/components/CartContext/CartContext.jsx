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
    const deleteItem = (id)=>{
      setCartList(cartList.filter((prod) => prod.id !== id));

    }
    const total = () => {
      return cartList.reduce((counter, prod) => counter = counter + (prod.price * prod.quantity),0)
    }
    // const prodCart = ()=>{
    //   return cartList.length;
    // }
  return (
    <CartContext.Provider value ={{
      emptyCart,
      cartList,
      applyCart,
      deleteItem,
      total
      // prodCart
    }} >
        {children}
    </CartContext.Provider>
  )
}

export default CartContextProvider