import React, { Component } from 'react'
import { connect } from 'react-redux'
 class CartRedux extends Component {
    addToCart=(name)=>this.props.dispatch(addAction(name))
      decQuantity=(index)=>this.props.dispatch(DecAction(index))
      incQuantity=(index)=>this.props.dispatch(IncAction(index))
      remProduct=(index)=>this.props.dispatch(RemAction(index))
   
  render() {

   let total=this.props.cart.reduce((acc,curr)=>{
     acc=acc+curr.price*curr.quantity
return acc

   },0)
   
    return (
      <div className='container'>
          {this.props.products.map((p)=>{
        return  <div className='container'>
            {p.name}-${p.price} x {p.quantity}
           <br></br>
           {p.quantity<1?<button className='btn btn-primary' disabled>Sold Out</button>:
            <button className='btn btn-primary btn-sm' onClick={()=>this.addToCart(p.name)}>Add to cart</button>}
        </div>
      })}
    <hr></hr>
<h4>Your Cart</h4>
{this.props.cart.length===0?<>
<i>Please add some Product to cart</i>
<br></br>
</>
:
this.props.cart.map((p,index)=>{
    return <div className='row'>
              <div className='col-6'>  {p.name}-${p.price} x {p.quantity}</div>

        <div className='col-1'>  <button className='btn btn-success btn-sm' onClick={()=>this.incQuantity(p.name)} >+</button></div>
         <div className='col-1'> <button className='btn btn-warning btn-sm'  onClick={()=>this.decQuantity(p.name)}>-</button></div>
      <div className='col-1'>    <button className='btn btn-danger btn-sm'  onClick={()=>this.remProduct(index)}>x</button></div>
    </div>
})

}
<br></br>
{this.props.cart.length===0?
<h6>Total:$0.00</h6>:
<h6>Total:${total}</h6>
}

      </div>
    )
  }
}

const addAction=(name)=>({
    type:"ADDTOCART",
    payload:{name:name}
    })

  const IncAction=(name)=>({
    type:"INCREASEQUANTITY",
    payload:{name:name}
    })
    const DecAction=(name)=>({
    type:"DECREASEQUANTITY",
    payload:{name:name}
    })
    const RemAction=(index)=>({
    type:"REMOVE",
    payload:{index:index}
    })

const mapStateToProps=(state)=>{
    return {
       products:state.products,
       cart:state.cart
    }
}
export default connect(mapStateToProps)(CartRedux);


