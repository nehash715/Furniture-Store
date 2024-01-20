import React, { Component } from 'react'
import {Route,Switch} from "react-router-dom"
import ShoppingForm from './ShoppingForm'
import ShoppingList from './ShoppingList'

export default class Task5main extends Component {
state={
  lists:[
    {
      name:"List1",
      items:[{item:"Colgate",qty:1},{item:"Pepsi",qty:2},{item:"Maggi",qty:4}]
    },
    {
      name:"List2",
      items:[{item:"Nutties",qty:1},{item:"Coca Cola",qty:1}]
    }
  ]
}
handleSubmitList=(list,index='')=>{
  const {lists}=this.state
  let lists1=[...lists];
  index?(lists1[+index]=list):lists1.push(list);
  this.setState({lists:lists1})
}

  render() {
   const {lists}=this.state
    return (
      <div>
      
      <Switch>
      <Route path="/shoppingList/:index/edit" render={(props)=>(
                <ShoppingForm {...props} lists={lists} onSubmit={this.handleSubmitList}/>
            )}/>
      <Route path="/shoppingList/add" render={(props)=>(
                <ShoppingForm {...props} onSubmit={this.handleSubmitList}/>
            )}/>
      <Route path="/" render={(props)=><ShoppingList {...props} lists={lists} />}/>
      </Switch>
      </div>
    )
  }
}
