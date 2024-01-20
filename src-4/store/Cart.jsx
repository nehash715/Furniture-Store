import React, { Component } from 'react'

export default class Cart extends Component {









  render() {
    let {cart,add,remove}=this.props
    //console.log(cart)

let a=cart.map((curr)=>{
  let b= curr.ingredients.reduce((acc,curr)=>{
    let item={ingName:curr.ingName,qty:curr.qty}
     acc.push(item)
     return acc
  },[])
  //console.log(b)
  return b
})

//console.log(a)
const merge3 = a.flat(1)
 let name=merge3.reduce((acc,curr)=>{
  acc.push(curr.ingName)
  return acc
 },[])

console.log(merge3)
let final=[]
for(let i=0;i<merge3.length;i++){

  let c=+merge3[i].qty
  let item
  let f=final.find((p)=>{
    return p.ingName==merge3[i].ingName
  })
  console.log(f)
  if(f){
    f.qty=f.qty+c
   
  }
  else{
item={ingName: merge3[i].ingName,qty:c}
final.push(item)
  }
 
}
console.log(final)

//let uname=[...new Set(name)]
//console.log(uname)




    return (
      <div className='container'>
        <h4 className='text-center'>Product in Cart</h4>
        {cart.map((p)=>{
            return <div className='row'>
                <div className='col-3'>
                    <img  className='cartimg' src={p.img}/>
                </div>
                <div className='col-6'><h6>{p.title}</h6></div>
                <div className='col-3'>
                    <button className='btn btn-success btn-sm' onClick={()=>add(p.prodCode)} >+</button>
                    <button className='btn btn-secondary btn-sm'>{p.quantity}</button>
                    <button className='btn btn-danger btn-sm'  onClick={()=>remove(p.prodCode)}>-</button>
                </div>
             
            </div>
        })}

        <h4 className='text-center'>List of Items in Cart</h4>
        <div className='tablecon'>
        <div className='row border'>
            <div className='col-6'>
   Item Name
            </div>
       
        <div className='col-6'>Count</div>
        </div>
      
      {final.map((p)=>{
        return <div className='row'>
        <div className='col-6'>{p.ingName}</div>
        <div className='col-6'>{p.qty}</div>
        </div>

      })}

        </div>
      </div>
    )
  }
}
