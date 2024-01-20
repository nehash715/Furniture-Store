import React, { Component } from 'react'
import {Route,Switch} from "react-router-dom";
import PersonForm from './PersonForm';
import Displaydetail from './Displaydetail';

export default class MainComp extends Component {
    state={
        persons:[
            {
                name:"Brad Williams",
                age:27,
                country:"USA",
                tech:["Javascript","React"],
                countryStatus:"Student"
            },
            {
                name:"Anna Smith",
                age:31,
                country:"Canada",
                tech:["Javascript","React","Node.js"],
                countryStatus:"Working"
            },
        ],

        arr:[]
    }

    handleSubmitPerson=(person,index)=>{
        const {arr,persons}=this.state;
        //let person1=[...arr]
        let person1={...persons}
        index?(person1[+index]=person):
        person1.push(person)
        this.setState({arr:person1})
    }
  render() {
let {arr,persons}=this.state;
console.log(arr)
    return (
      <div className='container'> 
        <Switch>
       
              <Route path="/person/:index/edit" render={(props)=>(
                <PersonForm {...props} persons={persons} onSubmit={this.handleSubmitPerson}/>
            )}/>
        <Route path="/add" render={(props)=>(
                <PersonForm {...props} onSubmit={this.handleSubmitPerson}/>
            )}/>
             <Route path="/" render={(props)=><Displaydetail {...props} persons={persons} />}/>
           
        </Switch>
      </div>
    )
  }
}
