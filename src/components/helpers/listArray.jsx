// export const listArray = (stock) => {
//   return new Promise ( (resolve, reject)=>{

//       setTimeout(()=>{
//         resolve(stock)
//       }, 2000)

//   })
//  }

 import { stock } from "./products";
 export const listArray = (stock) => {
   return new Promise((resolve) => {
     setTimeout(() => {
       resolve(stock);
     }, 2000);
   });
 };