import React from 'react'

const Card = () => {
  return (
    
    <div className="card">
        <div className="card__imagen">
            <img src="https://http2.mlstatic.com/D_NQ_NP_2X_641378-MLA31319156080_072019-F.webp" alt="" />
        </div>
        <div className="card__body">
            <div className="card__cant">
                <button className="card__btn">+</button>
                <h3>5</h3>
                <button className="card__btn">-</button>
            </div>
            <div className="card__buy">
                <button className="card__btn">Agregar al carrito</button>
            </div>
        </div>
    </div>    
    
  )
}

export default Card;