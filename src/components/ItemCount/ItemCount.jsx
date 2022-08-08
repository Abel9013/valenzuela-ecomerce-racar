import { useState } from "react"

const ItemCount = ({stock,initial, onAdd}) => {
    const [count, setCount] = useState(initial)
    const increment = () => {
        if(count < stock){
            handleCount(1);
        }
    }
    const decrement = () => {
        if(count > 1 ){
            handleCount(-1)
        }
    }
    const handleCount = (add)=>{

        setCount(count + add)
    }
    const addToCart = ()=>{
        onAdd(count);
        
    }

  return (
    <div >
            <div className="card__body">
                    <div className="card__cant">
                            <button
                                className="card__btn"
                                onClick={decrement}>-
                            </button> 
                            <h3>{count}</h3>
                            <button
                                className="card__btn"
                                onClick={increment }>+
                            </button>
                    </div>
                    <div className="card__buy">
                            <button
                                     className="card__btn"
                                    onClick={addToCart}>Agregar al carrito
                                    </button>
                    </div>
            </div>
        
    </div>
  )
}

export default ItemCount;