import React from 'react'
import { useCartContext } from '../CartContext/CartContext'
import { Link } from 'react-router-dom'
import { addDoc, collection, getFirestore } from 'firebase/firestore';
import { useState } from 'react';


const Cart = () => {
  const { cartList, emptyCart, deleteItem, total } =useCartContext();
  const [ticket, setTicket] = useState('')
  const [message, setMessage] = useState(false)
  const [formData, setFormData] = useState({
    name:'', 
    phone:'',
    email:'', 
    remail:''
})

  const handleChange = (e) => {  
    setFormData({
        ...formData,
        [e.target.name]: e.target.value
    })
  }
  // Funcion para guardar la orden en la base de datos
  const saveBuy = (e)=>{
      e.preventDefault()
      if( !(([formData.name, formData.phone, formData.email, formData.rEmail].includes('')) || formData.email != formData.remail) ){
        setMessage(true)
      }
      if(message == true){
          const order = {}
          order.buyer = formData

          order.items = cartList.map(prod => {
              return {
                  product: prod.name,
                  id: prod.id,
                  price: prod.price
              }
          order.total = total();
         

          })

          const db = getFirestore()
          const queryOrders = collection(db, 'orders')
          addDoc(queryOrders, order)
            .then(resp =>setTicket(resp.id))
            .catch(err => console.log(err) )
            .finally(() => emptyCart())
      }
      
  } 
    
    return (
<>
  {
                ticket ?
                       <> <p className='center'> Su codigo para retirar la mercancia es:</p> <h3 className='center'>{ticket}</h3>  </>
                        :
                        ''
                }
  <div >

      <div>
      {cartList && cartList.length ?
      <div className='cart__grid'>
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
          <form className='cart__form'
                  onSubmit={ saveBuy }>
                <h3 className='center'>Fomulario de contacto</h3>
                {message == false ? (<h5>Los campos deben estar completos, y los emails iguales</h5>):''}
                <div className="">
                    <label htmlFor="name">Nombre</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="name" 
                        name="name"                           
                        placeholder="Ingrese el nombre" 
                        onChange={handleChange}
                    />                        
                </div>
                <div className="">
                    <label htmlFor="phone">Tefono</label>
                    <input 
                        id='phone'
                        name="phone"
                        type="tel" 
                        className=""  
                        placeholder="Ingrese el teléfono solo numeros"
                        onChange={handleChange}
                
                    />                        
                </div>
                <div className="">
                    <label htmlFor="email">Email</label>
                    <input 
                        type="email" 
                        className="" 
                        id="email" 
                        name="email"
                        onChange={handleChange}
                        placeholder="Enter email" 
                                          />
                    
                </div>
                <div className="">
                    <label htmlFor="emailr">Repetir Email</label>
                    <input 
                        type="email" 
                        className="" 
                        id='emailr'
                        name="remail"                            
                        placeholder="email" 
                        onChange={handleChange}
                    />
                </div>
                <button className="">Confirmar</button>
          </form>
      </div>
      :
      <>
      <button className='cart__start'>
      <Link to="/" className='cart__start' > Comienza a Agregar productos !</Link>
      </button>
      </>
      
                }
    </div>


  </div>
</>  
  )
}

export default Cart