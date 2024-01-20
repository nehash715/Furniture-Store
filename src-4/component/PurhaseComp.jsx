import React, { Component } from 'react'
import { connect } from 'react-redux'
class PurhaseComp extends Component {
/*state={
    fruits:["Apple","Banana","Orange","Guava"],
stocks:[],
orders:[],
purchase:[]
}*/

render(){
    return(
        <div className='container'>
            <h4>Purchases</h4>
            {this?.props.purchases.map((st,index)=>(
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
    return {purchases:state.purchases}
}

export default connect(mapStateToProps)(PurhaseComp)