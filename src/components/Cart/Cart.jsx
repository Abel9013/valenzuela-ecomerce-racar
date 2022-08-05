import React from 'react'
import { useCartContext } from '../CartContext/CartContext'

const Cart = () => {
  const { cartList, emptyCart } =useCartContext();
  return (
    <>
    <div>
      <h2>Carrito</h2>
      <ul>
        {
        cartList.map( item => (
            <div>
            
              <li  key={item.id}> <p>Elegiste:{item.quantity} {item.name}  Precio:{item.price}</p></li>
            </div>

          ))
        }
      </ul>

    </div>
      <button onClick={emptyCart}>Vaciar carrito</button>
    </>
  )
}

export default Cart