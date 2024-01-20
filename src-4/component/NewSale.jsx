import React, { Component } from 'react'
import { connect } from 'react-redux';
class NewSale extends Component  {
    state={form:{name:"",quantity:""}}
    
    sell=()=>{
      let {name,quantity}=this.state.form; 
      this.props.dispatch(sellAction(name,+quantity))
      this.setState({form:{name:"",quantity:""}})
     // this.props.history.push("/stocks")
          }
      
      handleChange=(e)=>{
          const {currentTarget:input}=e;
          let s1={...this.state}
          s1.form[input.name]=input.value;
          this.setState(s1)
      }
      render()
      {
          const {stocks}=this.props;
          let {name,quantity}=this.state.form;
          let qtyOption=[];
          if(name){
           let selFruit=stocks.find((st)=>st.name==name);
           if(selFruit){
            let maxQty=selFruit.quantity

            for(let i=1;i<=maxQty;i++){
              qtyOption.push(i)
            }
           }
          }
          return(
              <div className='container'>
      
                  <h4>New Sale</h4>
                  <div className='form-group'>
                      <label>Fruit Name</label>
                      <select name='name' className='form-control' value={name} onChange={this.handleChange}>
                          <option value="">Select Fruit</option>
                          {stocks.map((f)=>(
                              <option value={f.name}>{f.name}</option>
                          ))}
                      </select>
                  </div>

                  <div className='form-group'>
                      <label>Quantity</label>
                      <select name='quantity' className='form-control' value={quantity} onChange={this.handleChange}>
                          <option value="">Select Quantity</option>
                          {qtyOption.map((f)=>(
                              <option value={f}>{f}</option>
                          ))}
                      </select>
                  </div>


      
      
                  <div className='form-group'>
                      <button className='btn btn-primary'onClick={()=>this.sell()} >New Sale</button>
                  </div>
              </div>
          )
      } 
      
}

const sellAction=(name,quantity)=>({
  type:"SELL",
  payload:{name:name,quantity:quantity}
})
const mapStateToProps=(state)=>{
return {stocks:state.stocks}
}

export default connect(mapStateToProps)(NewSale)