import React from 'react'

const ItemDetail = ({prod}) => {
  return (
    <div className="card">
        <div className="card__imagen">
            <img src={prod.img} alt="" />
        </div>
        <div className="card__body">
            <h3>{prod.name}</h3>
            <div className="card__cant">
                <button className="card__btn">+</button>
                <h4>stock:{prod.stock}</h4>
                <button className="card__btn">-</button>
            </div>
            <div className="card__buy">
                <button className="card__btn">Agregar al carrito</button>
            </div>
        </div>
    </div>    
  )
}

export default ItemDetail