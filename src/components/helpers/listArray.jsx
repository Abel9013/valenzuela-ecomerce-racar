 import { stock } from "./products";
 export const listArray = (id) => {   
        return new Promise(( resolve, reject )=>{
            setTimeout(()=>{
                if(id){
                    resolve(stock.find(producto => producto.id === id))                
                }
                else{
                    resolve(stock)                

                }
            }, 1000)            
        })       
  }


