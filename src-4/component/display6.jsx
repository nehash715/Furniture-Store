import React, { Component } from 'react'

export default class Display6 extends Component {

    editList=(index)=>{
        this.props.history.push(`/course/${index}/edit`)
    }
    addList=()=>{
        this.props.history.push('/course/add')
    }
  render() {
    const {lists}=this.props
    return (
      <div>
          <h4>Details of Course</h4>
        {lists.map((l1,index)=>{
         return <div className='row'>
            <div className='col-2 border'>{l1.course}</div>
            <div className='col-8 border'>
              {l1.students.map((x)=>x.student+"-"+x.quiz1+"-"+x.quiz2).join(",")}
            </div>
            <div className='col-2 border'>
<button className='btn btn-warning btn-sm'
onClick={()=>this.editList(index)}>Edit</button>


            </div>
          </div>
        })}

        <button className='btn btn-primary mr-3' onClick={()=>this.addList()}>Add new </button>
      </div>
    )
  }
}
