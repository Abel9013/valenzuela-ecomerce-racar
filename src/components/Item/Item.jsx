import React from 'react'
import { Link } from 'react-router-dom'

const Item = ( { item}) => {
    const{name,img,id} = item;
  return (
    <div className="card">
        <div className="card__imagen">
            <img src={img} alt="" />
        </div>
        <div className="card__body">
            <h3 className='card__name'>{name}</h3>
            <div className="card__buy">
                <Link to={`/detail/${id}`} >
                <button className="card__btn">Detalles del Producto</button>
                </Link>
            </div>
        </div>
    </div>    
  )
}

export default Item


/* 
      id: "1",
      name: "Skmei 9185",
      img: "https://http2.mlstatic.com/D_NQ_NP_2X_920540-MLA40389409712_012020-F.webp",
      description: "resistente al agua • 3agujas • caja redonda • no apto buceo ",
      stock: 5,
      price: 3700,
      category: "analogical",
*/

{/* <div className="card">
<div className="card__imagen">
    <img src={img} alt="" />
</div>
<div className="card__body">
    <h3 className='card__name'>{name}</h3>
    <div className="card__buy">
        <Link to={`/detail/${id}`} >
        <button className="card__btn">Detalles del Producto</button>
        </Link>
    </div>
</div> */}