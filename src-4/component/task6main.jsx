import React, { Component } from 'react'
import {Route,Switch} from "react-router-dom"
import Form6 from './form6'
import Display6 from './display6'

export default class Task6main extends Component {
state={
  lists:[
    {
      course:"React",
      students:[{student:"Anna",quiz1:"A",quiz2:"B"},{student:"Mary",quiz1:"B",quiz2:"C"},{student:"Bob",quiz1:"A",quiz2:"D"}]
    },
    {
      course:"Node",
      students:[{student:"Steve",quiz1:"A",quiz2:"B"},{student:"John",quiz1:"C",quiz2:"B"},{student:"Bob",quiz1:"B",quiz2:"C"}]
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
      <Route path="/course/:index/edit" render={(props)=>(
                <Form6 {...props} lists={lists} onSubmit={this.handleSubmitList}/>
            )}/>
      <Route path="/course/add" render={(props)=>(
                <Form6 {...props} onSubmit={this.handleSubmitList}/>
            )}/>
      <Route path="/" render={(props)=><Display6 {...props} lists={lists} />}/>
      </Switch>
      </div>
    )
  }
}
