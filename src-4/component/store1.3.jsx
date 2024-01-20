import React, { Component } from 'react'
import Player from './Player'
import Product13 from './Product1.3'

export default class Store13 extends Component {
    state={
        product:[
            {name:"Coca Cola",code:"C332",price:20,quantity:10},
            {name:"5Star",code:"C323",price:5,quantity:4},
            {name:"Maggi",code:"C336",price:15,quantity:10},
            {name:"Pepsi",code:"C389",price:20,quantity:18},
            {name:"Dairy Milk",code:"C124",price:10,quantity:13},
            {name:"Mirinda",code:"C987",price:25,quantity:8},
            {name:"Kitkat",code:"C456",price:10,quantity:7},
            {name:"Red Bull",code:"C777",price:90,quantity:3},


          
        ]

        
    }
   handleincrease=(code,disable)=>{
    let {product}=this.state
    let prod=product.find((p)=>{
        return p.code==code
    })
    prod.quantity++;
    this.setState({product:product})
   }
   handledecrease=(code)=>{
    let {product}=this.state
    let prod=product.find((p)=>{
        return p.code==code
    })
    if(prod.quantity!==0){
        prod.quantity--
    }
  
    this.setState({product:product})
   }



  render() {
    let{product}=this.state
    return (
      <div className='container'>
    <Product13 product={product} increase={this.handleincrease} decrease={this.handledecrease} 
   />
      </div>
    )
  }
}
