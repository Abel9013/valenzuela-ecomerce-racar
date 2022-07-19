import { useState } from "react"

const itemCount = ({stock,initial}) => {
    const [count, setCount] = useState(initial)
    const handleCount = (add)=>{

        setCount(count + add)
    }
console.log(count);
  return (
    <div>
        <div>
            <div>
                {`cuentaProductos:  ${count}`}
               <button 
                    onClick={()=>{
                            if(count < stock){
                                handleCount(1)
                            } 
                    }}>+
                    </button> 
               <button
                    onClick={()=>{
                        if(count > 1){
                            handleCount(-1)

                        }
                    }}
                    >-</button>
               <button
                    onClick={console.log(`Ud lleva ${count} productos`)}
                    >Agregar al carrito</button>
            </div>
        </div>
    </div>
  )
}

export default itemCount