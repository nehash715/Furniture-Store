import React, { Component } from 'react'
import { connect } from 'react-redux'
 class MyShop extends Component {
   
    increase=(name)=>this.props.dispatch(increaseAction(name))
    decrease=(name)=>this.props.dispatch(decreaseAction(name))

  render() {
 return (
        <div className='container'>
<div className='mainbox'>
      {this.props.product.map((p)=>{
        return <div className='box'>
{p.name}<br></br>
Code:{p.code}<br></br>
Price:{p.price}<br></br>
Quantity:{p.quantity}<br></br>
<div className='row'>
  <div  className='col'> <button onClick={()=>this.increase(p.name)} >Increase</button></div>
  <div  className='col'> <button onClick={()=>this.decrease(p.name)} disabled={p.quantity==0?true:false} >
    Decrease</button></div>
 </div>
        </div>
      })}
      </div>
    </div>
    )
  }
}

const increaseAction=(name)=>({
    type:"INCREASE",
    payload:{name:name}
    })
    const decreaseAction=(name)=>({
        type:"DECREASE",
        payload:{name:name}
        })
const mapStateToProps=(state)=>{
    return {
       product:state.product
    }
}
export default connect(mapStateToProps)(MyShop);


