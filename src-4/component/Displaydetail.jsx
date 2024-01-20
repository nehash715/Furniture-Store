import React, { Component } from 'react'

export default class Displaydetail extends Component {
    addPerson=()=>{
        this.props.history.push("/add")
    }
    editPerson=(index)=>{
      this.props.history.push(`/person/${index}/edit`)
    }
  render() {
    const {persons}=this.props
    console.log(persons)
    return (
      <div className='container'>
        <h4>Details of persons</h4>
        {persons.map((p1,index)=>{
            return <div className='row' key={index}>
              {/*  <div className='col-2 border'>{p1.name}</div>
                <div className='col-2 border'>{p1.gender}</div>
                <div className='col-2 border'>{p1.deliveryOption}</div>
                <div className='col-3 border'>{p1.paymentOption.join(",")}</div>
        <div className='col-1 border'>{p1.deliverySlot}</div>*/}
        <div className='col-2'>{p1.name}</div>
        <div className='col-2'>{p1.age}</div>
        <div className='col-2'>{p1.country}</div>
        <div className='col-2'>{p1.countryStatus}</div>
        <div className='col-2'>{p1.tech.join(",")}</div>
                <div className='col-2 border'>
                <button className='btn btn-warning btn-sm' onClick={()=>this.editPerson(index)}>Edit</button>
                </div>
                </div>
        })}
        <button className='btn btn-primary btn-sm' onClick={()=>this.addPerson()}>Add</button>
      </div>
    )
  }
}
