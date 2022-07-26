import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { listArray } from '../helpers/listArray';
import ItemDetail from '../ItemDetail/ItemDetail';

const ItemDetailContainer = () => {
    const [prod, setProd] = useState({})
    const [loading, setLoading] = useState(false)
   const {id} = useParams()
    useEffect(()=>{
        setLoading(true)
        listArray(id)
        .then((res) => {
            setProd(res)
        })
        .catch((rej) =>  console.log(rej))
        .finally(()=>{
            setLoading(false)
        })
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