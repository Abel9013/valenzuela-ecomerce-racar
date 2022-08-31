import React, { createContext, useContext, useState } from 'react'

const CartContext = createContext([]);

export const useCartContext = ()=> useContext(CartContext);

const CartContextProvider = ({children}) => {
    const[cartList,setCartList] = useState([]);
    const applyCart = (prod)=>{
      const index = cartList.findIndex((product) => product.id === prod.id);
      if(index !== -1){
        let qty = cartList[index].quantity;  
        cartList[index].quantity = qty + prod.quantity;
        setCartList([...cartList]);

      }else{
        setCartList([...cartList, prod])
      }
      
    }
    const emptyCart = () => {
      setCartList([]);
    }
    const deleteItem = (id)=>{
      setCartList(cartList.filter((prod) => prod.id !== id));
    }
    const qtyTotal = ()=>{
      return cartList.reduce((contador, prod) => contador += prod.quantity, 0 );
    }
    const total = () => {
      return cartList.reduce((counter, prod) => counter = counter + (prod.price * prod.quantity), 0 )
    }

  return (
    <CartContext.Provider value ={{
      emptyCart,
      cartList,
      applyCart,
      deleteItem,
      total,
      qtyTotal,
    }} >
        {children}
    </CartContext.Provider>
  )
}

export default CartContextProvider