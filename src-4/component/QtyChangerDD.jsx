import React, { useEffect, useState } from 'react'

export default function QtychangerDD(props) {
    let {cartdata}=props
   let cities=['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20'];
    

    const [qty,setQty]=useState()
 
console.log(qty)

  return (
    <div className='container'>
      {cartdata.map((p,index)=>(
        <div className='row border'>
            <div className='col-2 border'>Product:{p.product}</div>
            <div className='col-2 border'>Quantity:{p.quantity}</div>
            <div className='col-2 border'>Value:{p.price}</div>
            <div className='col-3 border'>
            <div className='form-group'>
                 
                  <select name={p.product} value={p.qty} className="form-control"

         onChange={(e)=>setQty(e.currentTarget.value)} 
         onClick={(e)=>props.changeCart(e.currentTarget.value,index)}>
                      <option  value="">
                    {p.quantity}
                </option>
                     {cities.map(c1=><option>{c1}</option>)}
                     </select>
                 
      </div>
            </div>

            <div className='col-3'>
            <button className='btn btn-sm btn-success' onClick={()=>props.add(index)}>+1</button>
               {p.quantity!=0? <button className='btn btn-sm btn-warning' onClick={()=>props.dec(index)}>-1</button>:""}
              {p.quantity!=0?  <button className='btn btn-sm btn-danger'onClick={()=>props.setzero(index)}>X</button>:""}
            </div>
        </div>
      ))}
    </div>
  )
}
