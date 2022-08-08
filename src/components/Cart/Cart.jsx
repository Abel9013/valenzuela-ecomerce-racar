import React from 'react'
import { useCartContext } from '../CartContext/CartContext'
import { Link } from 'react-router-dom'

const Cart = () => {
  const { cartList, emptyCart, deleteItem, total } =useCartContext();
  return (
    <div>
      {cartList && cartList.length ?
        <>
              <div>
                <ul>
                  {
                  cartList.map( (item) => (
                      <div key={item.id}>
      
                        <li  >
                              <p>Elegiste:{item.quantity} {item.name}  Precio:{item.price}
                                <button onClick={()=>deleteItem(item.id)} > X </button>
                              </p>
                        </li>
      
                      </div>
                    ))
                  }
                </ul>
                <h3>Total: {total()}</h3>
                <button onClick={emptyCart}>Vaciar carrito</button>
              </div>
      </>
      :
      <>
     
      <Link to="/" > <h3>Comienza a Agregar productos !</h3></Link>
      </>
      
                }
    </div>
  )
}

export default Cart