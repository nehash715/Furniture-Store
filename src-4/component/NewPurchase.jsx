
import React, { Component } from 'react'
import { connect } from 'react-redux';
class NewPurchase extends Component  {
    state={form:{name:"",quantity:""}}

    buy=()=>{
let {name,quantity}=this.state.form; 
this.props.dispatch(buyAction(name,+quantity))
this.setState({form:{name:"",quantity:""}})
//this.props.history.push("/stocks")
    }

handleChange=(e)=>{
    const {currentTarget:input}=e;
    let s1={...this.state}
    s1.form[input.name]=input.value;
    this.setState(s1)
}

    render()
{
    const {fruits}=this.props;
    let {name,quantity}=this.state.form;
    return(
        <div className='container'>

            <h4>New Purchase</h4>
            <div className='form-group'>
                <label>Fruit Name</label>
                <select name='name' className='form-control' value={name} onChange={this.handleChange}>
                    <option value="">Select Fruit</option>
                    {fruits.map((f)=>(
                        <option value={f}>{f}</option>
                    ))}
                </select>
            </div>

            <div className='form-group'>
                <label>Quantity</label>
                <br></br>
                <input type='number' name='quantity' value={quantity}  className='quantity'
                placeholder='Enter the quanitty'
                onChange={this.handleChange} />
            </div>

            <div className='form-group'>
                <button className='btn btn-primary'onClick={()=>this.buy()} >New Purchase</button>
            </div>
        </div>
    )
} 
}

const buyAction=(name,quantity)=>({
    type:"BUY",
    payload:{name:name,quantity:quantity}
})
const mapStateToProps=(state)=>{
return {fruits:state.fruits}
}

export default connect(mapStateToProps)(NewPurchase)