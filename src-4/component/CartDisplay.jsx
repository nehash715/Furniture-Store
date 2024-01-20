import React, { useEffect, useState } from 'react'
import Qtychanger from './Qtychanger'
import QtychangerDD from './QtyChangerDD'
export default function CartDisplay() {

    let {cartdata}=require("./CartData.js")
    const [cart,setCart]=useState(cartdata)
  function add(index){
  //let newData=[...cart]
  let prod=cartdata[+index]
   prod.quantity++;
setCart({...prod,quantity:prod.quantity})
  }
  function dec(index){
    //let newData=[...cart]
    let prod=cartdata[+index]
    if(prod.quantity>0){
      prod.quantity--;
    }
     
  setCart({...prod,quantity:prod.quantity})
    }

    function setzero(index){
      //let newData=[...cart]
      let prod=cartdata[+index]
      
        prod.quantity=0
      
       
    setCart({...prod,quantity:prod.quantity})
      }
  
 function changeCart(value,index){
  //console.log(index,value)
  //let newData=[...cart]
  let prod=cartdata[+index]
      
  prod.quantity=+value

 
setCart({...prod,quantity:prod.quantity})
 }
 

  return (
    <div>
     {/* <Qtychanger cartdata={cartdata} add={add} dec={dec} setzero={setzero}/>*/}
     <QtychangerDD changeCart={changeCart} cartdata={cartdata}  add={add} dec={dec} setzero={setzero} />
    </div>
  )
}
