import React, { Component } from 'react'
import Hello from './Hello'
import Bye from './Bye'
import Lectures from './lectures'
export default class Main1task extends Component {
state={
    lectures:[
        {name:"Lectures 1:Introduction to React",likes:0},
        {name:"Lectures 2:State and Props",likes:0},
        {name:"Lectures 3:Component Lifecycle",likes:0},
        {name:"Lectures 2:Functional Component",likes:0}
    ]
}

handleLike=(name)=>{
    let lectures=this.state.lectures
    let lec=lectures.find((p)=>{
        return p.name==name
    })
    lec.likes++;
    this.setState({lectures:lectures})
}
  render() {
    let {lectures}=this.state
    return (
        <div className=' container'>
        {/*<Hello name="Jack" course="React"/>
        <Bye  topic="Functional Component" />*/}
        <Lectures lectures={lectures} clickLike={this.handleLike} ></Lectures>
        </div>
    )
  }
}
