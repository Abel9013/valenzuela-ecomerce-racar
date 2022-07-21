// import React, {useState, useEffect} from 'react';
import { useState, useEffect } from 'react'
import { stock } from '../helpers/products';
import { listArray } from '../helpers/listArray';
import ItemList from '../ItemList/ItemList';
// import Item from '../Item/Item';
const ItemListContainer = () => {
  console.log("Estoy aca"); 
  const [items, setItems] = useState([]); {/* en items voy a ir guardando los productos */}
  const [loading, setLoading] = useState(false); {/* variable paara controlar el spin de carga */}
  useEffect(() => {
    setLoading(true)
    console.log("Ahora estoy aca"); 
      setLoading(true)
      console.log(stock)
      listArray(stock)
        .then((res)=>{
          setItems(res)
        })
        .catch((rej) =>  console.log(rej))
        .finally(()=>{
          setLoading(false)
        })
  
  }, [])
  return (
    <>
        {
            loading ? //Si es true muestra spiner de carga
              <h3>Cargandooo</h3>   
                    : 
            <ItemList items = {items} />
        }
    
    </>
  )
}
export default ItemListContainer;
