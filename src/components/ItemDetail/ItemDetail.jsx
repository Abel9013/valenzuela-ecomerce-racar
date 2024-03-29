import React, { useState } from 'react';
import AfterBuy from '../AfterBuy/AfterBuy';
import { useCartContext } from '../CartContext/CartContext';
import ItemCount from '../ItemCount/ItemCount';

const ItemDetail = ({prod}) => {
    const{applyCart, cartList}= useCartContext([])  ;
    const[toCart, setToCart] = useState(true);
    const onAdd = (count)=>{
        applyCart({...prod, quantity: count});
        setToCart(false)
    }
  return (
    <>
        <div className="card">
            <div className="card__imagen">
                <img src={prod.img} alt="" />
            </div>
            <div className="card__body">
                <h3>{prod.name}</h3>
                <h4>{prod.price}</h4>
                <p>{prod.description}</p> 
            </div>

        {
            toCart ?
            <ItemCount initial={1} stock={ prod.stock } onAdd={onAdd} />
            :
            <AfterBuy />
        }
        </div>    
    </>
  )
}

export default ItemDetail