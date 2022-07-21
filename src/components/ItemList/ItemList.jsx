import React from 'react'
import Item from '../Item/Item'
 const ItemList = ({items}) => {
  return (

    <div className="main">
        <div className='grid'>
            {
                items.map( (item) => <Item {...item} key={item.id} /> )
            }
        </div>
    </div>
  )
}

export default ItemList