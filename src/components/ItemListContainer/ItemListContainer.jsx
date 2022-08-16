import { useState, useEffect } from 'react'
import { listArray } from '../helpers/listArray';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
import { collection, doc, getDoc, getDocs, getFirestore, query, where } from 'firebase/firestore';

const ItemListContainer = () => {
  
  const [items, setItems] = useState([]); {/* en items voy a ir guardando los productos */}
  const [loading, setLoading] = useState(true); {/* variable paara controlar el spin de carga */}
  const {categoryId} = useParams()
    
  useEffect(()=>{
    // console.log(categoryId)
    if(categoryId){
        const db = getFirestore()
        const queryCollection = collection(db, 'productos')
        const queryFilter = query(
            queryCollection,
            where('category', '==' , categoryId),
          )
        getDocs(queryFilter)
          .then(res => setItems( res.docs.map(prod => ({id: prod.id, ...prod.data()}) ) ))
          .catch(err => console.log(err) )
          .finally(()=> setLoading(false) )
      }
      else{
        const db = getFirestore()
        const queryCollection = collection( db, 'productos' )
        getDocs(queryCollection)
        .then(res => setItems( res.docs.map( prod => ({ id:prod.id, ...prod.data() }  ) )))
        .catch(err => console.log(err) )
        .finally(()=> setLoading(false) )
      }
  },[categoryId])
//  console.log(items);
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
