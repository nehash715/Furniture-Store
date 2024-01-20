import React, { Component } from 'react'
import { connect } from 'react-redux'
class StockComp extends Component {
/*state={
    fruits:["Apple","Banana","Orange","Guava"],
stocks:[],
orders:[],
purchase:[]
}*/

render(){
    return(
        <div className='container'>
            <h4>Stocks</h4>
            {this?.props.stocks.map((st,index)=>(
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
    console.log(state)
    return {stocks:state.stocks}
}

export default connect(mapStateToProps)(StockComp)