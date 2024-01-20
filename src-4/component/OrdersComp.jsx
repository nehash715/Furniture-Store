import React, { Component } from 'react'
import { connect } from 'react-redux'
class OrdersComp extends Component {
/*state={
    fruits:["Apple","Banana","Orange","Guava"],
stocks:[],
orders:[],
purchase:[]
}*/

render(){
    return(
        <div className='container'>
            <h4>Orders</h4>
            {this?.props.orders.map((st,index)=>(
                <div className='row' key={index}>
                    <div className='col-4 border'>{st.name}</div>
                    <div className='col-2 border'>{st.quantity}</div>
                </div>
            ))}
        </div>
    )
}

}
const mapStateToProps=(state)=>{
    //console.log(state)
    return {orders:state.orders}
}

export default connect(mapStateToProps)(OrdersComp)