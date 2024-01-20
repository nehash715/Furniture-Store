import React from 'react'

export default function Product13(props) {
    let {product}=props
    console.log(product)
  return (
    <div className='container'>
<div className='mainbox'>
      {product.map((p)=>{
        return <div className='box'>
{p.name}<br></br>
Code:{p.code}<br></br>
Price:{p.price}<br></br>
Quantity:{p.quantity}<br></br>
<div className='row'>
  <div  className='col'> <button onClick={()=>props.increase(p.code)} >Increase</button></div>
  <div  className='col'> <button onClick={()=>props.decrease(p.code)} disabled={p.quantity==0?true:false} >
    Decrease</button></div>
 </div>
        </div>
      })}
      </div>
    </div>
  )
}
