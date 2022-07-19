import { useState } from "react"

const itemCount = ({stock,initial}) => {
    const [count, setCount] = useState(initial)
    const handleCount = (add)=>{

        setCount(count + add)
    }
console.log(count);
  return (
    <div className="card">
        <div className="card__imagen">
            <img src="https://http2.mlstatic.com/D_NQ_NP_2X_641378-MLA31319156080_072019-F.webp" alt="producto" />
        </div>
    
            <div className="card__body">
                    <div className="card__cant">
                            <button
                                className="card__btn"
                                onClick={()=>{
                                        if(count > 1 ){
                                            handleCount(-1)
                                        }
                                }}>-
                            </button> 
                            <h3>{count}</h3>
                            <button
                                className="card__btn"
                                onClick={()=>{
                                    if(count < stock){
                                        handleCount(1)
                                    }
                                }}
                                >+
                            </button>
                    </div>
                    <div className="card__buy">
                            <button
                                    className="card__btn"
                                    onClick={console.log(`Ud lleva ${count} productos`)}
                            >Agregar al carrito</button>
                    </div>
            </div>
        
    </div>
  )
}

export default itemCount