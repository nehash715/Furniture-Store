import React, { Component } from 'react'
import { Link } from 'react-router-dom'
export default class Persons extends Component {

handleEdit=(index)=>{
  this.props.history.push(`/person/${index}/edit`)
}

  render() {
    const {persons}=this.props
    return (
      <div className='container'>
        <h4>Welcome to    Persons Page</h4>
        {persons.map((pr,index)=>(
            <div className='row ' key={pr.name}>
            <div className='col-4 ' >{pr.name}</div>
            <div className='col-2 ' >{pr.age}</div>
            <div className='col-1 ' >{pr.city}</div>
            <div className='col-2 ' >{pr.designation}</div>
            <div className='col-2 ' >{pr.techKnown.join(",")}</div>
            <div className='col-1'>
              <button className='btn btn-sm btn-warning'>
           <Link to={`/person/${index}/edit`}>Edit</Link>

              </button>
            </div>
            </div>
        )

        )}
      </div>
    )
  }
}
