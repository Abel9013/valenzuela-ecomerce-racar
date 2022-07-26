import { useState, useEffect } from 'react'
import { listArray } from '../helpers/listArray';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {
  
  const [items, setItems] = useState([]); {/* en items voy a ir guardando los productos */}
  const [loading, setLoading] = useState(false); {/* variable paara controlar el spin de carga */}
  
  const {categoryId} = useParams()
  
  useEffect(() => {
      setLoading(true)
      if(categoryId){(
          listArray()
          .then((res)=>{
            setItems(res.filter(prod => prod.category===categoryId))
          })
          .catch((rej) =>  console.log(rej))
          .finally(()=>{
            setLoading(false)
          })
      )} else {
            listArray()
            .then((res)=>{
              setItems(res)
            })
            .catch((rej) =>  console.log(rej))
            .finally(()=>{
              setLoading(false)
            })
      } 
      
      
  
  }, [categoryId])

  return (
    <>
        {
            loading ? //Si es true muestra spiner de carga
              <h3>Cargandooo</h3>   
              // <span class="loader"></span>
                    : 
            <ItemList items = {items} />
        }
    
    </>
  )
}
export default ItemListContainer;
