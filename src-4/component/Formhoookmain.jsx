import React, { Component } from 'react'
import { Link, Route, Switch } from 'react-router-dom'
import Formhook from './Formhook'
import Persons from './Persons'
import Navbar from './navbar'
export default class Formhoookmain extends Component {
state={
 persons: [  {name:"Jack",age:34
,city:"London",designation:"Senior Developer",
techKnown:["React","Javascript"]},
    {name:"Anna",age:23
    ,city:"Paris",designation:"Team Lead",
    techKnown:["React","Javascript","Node.js"]}
]
}
handleSubmit=(person,index)=>{
  console.log(index)
let s1={...this.state}
index?s1.persons[+index]=person:s1.persons.push(person)
this.setState(s1)

    
}

  render() {
    const {persons}=this.state
    return (
      <div className='container'>
        <Navbar/>
        <Switch>
        <Route path="/all" render={(props)=>(<Persons {...props} persons={persons} />) }/>
<Route path="/add" render={(props)=>(<Formhook {...props} onSubmit={this.handleSubmit}/>) }/>
<Route path="/person/:index/edit" render={(props)=>(<Formhook {...props} onSubmit={this.handleSubmit} persons={persons}/>) }/>

        </Switch>
      </div>
    )
  }
}
