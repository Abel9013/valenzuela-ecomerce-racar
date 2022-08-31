import React, { useEffect, useState } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';
import { listArray } from '../helpers/listArray';
import { doc, getDoc, getFirestore } from 'firebase/firestore';


const ItemDetailContainer = () => {
    const [prod, setProd] = useState({})
    const [loading, setLoading] = useState(true)
    const {id} = useParams()

    useEffect(()=>{      
        const db = getFirestore()
        const queryCollection = doc(db, 'productos', id)
        getDoc(queryCollection)
          .then(res => setProd( {id: res.id, ...res.data() } ))
          .catch(err => console.log(err) )
          .finally(()=> setLoading(false) )
    },[prod])
  return (
    <>
    {
        loading ? //Si es true muestra spiner de carga
          <h3>Cargando detalles..</h3>   
                :
         <ItemDetail prod={prod} />
    

    }

</>
  )
}

export default ItemDetailContainer
