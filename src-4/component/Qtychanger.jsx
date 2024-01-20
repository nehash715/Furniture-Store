import React, { useEffect, useState } from 'react'

export default function Qtychanger(props) {
    let {cartdata}=props
    



  return (
    <div className='container'>
      {cartdata.map((p,index)=>(
        <div className='row border'>
            <div className='col-3 border'>Product:{p.product}</div>
            <div className='col-3 border'>Quantity:{p.quantity}</div>
            <div className='col-3 border'>Value:{p.price}</div>
            <div className='col-3 border'>
                <button className='btn btn-sm btn-success' onClick={()=>props.add(index)}>+1</button>
               {p.quantity!=0? <button className='btn btn-sm btn-warning' onClick={()=>props.dec(index)}>-1</button>:""}
              {p.quantity!=0?  <button className='btn btn-sm btn-danger'onClick={()=>props.setzero(index)}>X</button>:""}
            </div>
        </div>
      ))}
    </div>
  )
}
