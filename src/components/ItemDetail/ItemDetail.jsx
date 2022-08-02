import React, { useState } from 'react';
import ItemCount from '../ItemCount/ItemCount';

const ItemDetail = ({prod}) => {
    const[toCart, setTocart] = useState(true);
    const onAdd = (count)=>{
        alert(`Usted agrego ${count} relojes`);
    }

  return (
    <div className="card">
        <div className="card__imagen">
            <img src={prod.img} alt="" />
        </div>
        <div className="card__body">
            <h3>{prod.name}</h3>
            <p>{prod.description}</p> 
        </div>
        {
            toCart ?
            <ItemCount initial={1} stock={ prod.stock } onAdd={onAdd} />
                    :
            <button >Ir al home</button>
        }

    </div>    
  )
}

export default ItemDetail