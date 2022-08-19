import React from 'react'
import { useCartContext } from '../CartContext/CartContext'
import { Link } from 'react-router-dom'
import { addDoc, collection, getFirestore } from 'firebase/firestore';
import { useState } from 'react';

const Cart = () => {
  const { cartList, emptyCart, deleteItem, total } =useCartContext();
  const [ticket, setTicket] = useState('')
  // Funcion para guardar la orden en la base de datos
  const saveBuy = (e)=>{
    // e.preventDefault()
    const order = {}
    order.buyer = {email: 'asdasdwa@mail.com', name:'Abel'}
    order.items = cartList.map(prod => {
        return{
              product: prod.name,
              id: prod.id,
              price: prod.price,
        }
    })
    order.total = total();
    console.log(order);
    console.log(order.buyer.name);
    // Guardar la orden en la base de datos
    const db = getFirestore()
    // Apunto a donde quiero guardar
    const queryOrders = collection(db, 'orders')
    // voy a insertar algo con AddDoc()(sino existe la coleccion la crea)
    addDoc(queryOrders, order)
      // .then(resp => console.log(resp.id))
      .then(resp => setTicket(resp.id))
  } 

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
            <button onClick={saveBuy}>Ticket</button>
            <button onClick={emptyCart}>Vaciar carrito</button>
            {
              ticket ?
                      <p> Su codigo para retirar la mercancia es: <h3>{ticket}</h3> </p> 
                      :
                      ''
              }
            {/* <input type="submit" value="Enviar check compra" onClick={endBuy(e)}></input> */}
          </div>
      </>
      :
      <>
      <button>
      <Link to="/" > <h3 className='button'>Comienza a Agregar productos !</h3></Link>
      </button>
      </>
      
                }
    </div>
  )
}

export default Cart