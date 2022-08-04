import React from 'react'
import { useCartContext } from '../CartContext/CartContext'

const Cart = () => {
  const { cartList } =useCartContext();
  return (
    <div>
      <h2>Carrito</h2>http://127.0.0.1:5173/
      <ul>
        {
          cartList.map( item => (
            <div>
              <li key={item.id} > <p>Elegiste:{item.quantity} {item.name}  Precio:{item.price}</p></li>
            </div>

          ))
        }
      </ul>

    </div>
  )
}

export default Cart