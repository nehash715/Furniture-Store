import React, { Component } from 'react'
import { connect } from 'react-redux'
 class Todo extends Component {
    state={
        todo:""
    }
    addtask=(todo)=>{this.props.dispatch(addAction(todo))
        let s1={...this.state}
        s1.todo=""
        this.setState(s1)
    }
    deltask=(index)=>this.props.dispatch(delAction(index))
    handleChange=(e)=>{
        const {currentTarget:input}=e;
        let s1={...this.state}
        s1.todo=input.value;
        this.setState(s1)
    }
   
  render() {
    let {todo}=this.state
    console.log(this.props.todoList)

return (
      <div className='container'>
        <div className='todo'>
        <div className='form-group'>
                 <input type='text' name='todo' value={todo}  className='todo'
                
                onChange={this.handleChange} />
            </div>

            <div className='btn btn-primary' onClick={()=>this.addtask(todo)} >Add Todo</div>
            </div>
           <ul>
            {this.props.todoList.map((p,index)=>{
                return <li><h6>{p.todo}
                <button className='btn btn-danger' onClick={()=>this.deltask(index)}>Delete</button></h6>
                </li>
            })}
           </ul>
      </div>
    )
  }
}

const addAction=(todo)=>({
    type:"ADDTASK",
    payload:{todo:todo}
    })

    const delAction=(index)=>({
        type:"DELETETASK",
        payload:{index:index}
        })
const mapStateToProps=(state)=>{
    return {
       todoList:state.todoList
    }
}
export default connect(mapStateToProps)(Todo);


