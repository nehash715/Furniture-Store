import React, { Component } from 'react'
import { connect } from 'react-redux'

 class ReduxMain1 extends Component {
    //state={apple:20}
   state={ stocks:[
      {name:"Apple",quantity:1},
      {name:"Banana",quantity:2},
      {name:"Orange",quantity:3},
     
  ],
  //numOfOrders:0,
  //totalOrderQty:0
  orders:[],
  purchase:[]
}
    sell=(name)=>this.props.dispatch(sellAction(name))
    buy=(name,qty)=>this.props.dispatch(buyAction(name,qty))
    
  render() {
    console.log(this.props.orders)
    return (
      <div className='container'>
        <h4>Stocks:{this.props.stocks.map((p)=>{
          return <div className='row'>
            Name:{p.name},
            Quantity:{p.quantity}
          </div>
        })}</h4>
        <h4>Orders:{this.props.orders.map((p)=>(
          <h6>name:{p.name}</h6>
        ))}</h4>
        <h4>Purchases:{this.props.purchase.map((p)=>(
          <h6>name:{p.name}</h6>
        ))}</h4>
        <button className='btn btn-primary mr-2' onClick={()=>this.sell()} >Sell</button>
        <button className='btn btn-primary mr-2' onClick={()=>this.buy(1)} >Buy 1</button>
        <button className='btn btn-primary mr-2' onClick={()=>this.buy(5)} >Buy 5</button>
      </div>
    )
  }
}

const sellAction=(name)=>({
type:"SELL",
payload:{name:name}
})
const buyAction=(name,qty)=>({
    type:"BUY",
    payload:{name:name,quantity:qty}
    })

const mapStateToProps=(state)=>{
    return {
        //apple:state.apple
        stocks:state.stocks,
        ///numOfOrders:state.numOfOrders,
        //totalOrderQty:state.totalOrderQty
        orders:state.orders,
        purchase:state.purchase
    }
}
export default connect(mapStateToProps)(ReduxMain1);