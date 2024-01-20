import React, { Component } from 'react'

export default class ShoppingList extends Component {

    editList=(index)=>{
        this.props.history.push(`/shoppingList/${index}/edit`)
    }
    addList=()=>{
        this.props.history.push('/shoppingList/add')
    }
  render() {
    const {lists}=this.props
    return (
      <div>
          <h4>Details of Shopping List</h4>
        {lists.map((l1,index)=>{
         return <div className='row'>
            <div className='col-2 border'>{l1.name}</div>
            <div className='col-8 border'>
              {l1.items.map((x)=>x.item+'-'+x.qty).join(",")}
            </div>
            <div className='col-2 border'>
<button className='btn btn-warning btn-sm'
onClick={()=>this.editList(index)}>Edit</button>


            </div>
          </div>
        })}

        <button className='btn btn-primary mr-3' onClick={()=>this.addList()}>Add new List</button>
      </div>
    )
  }
}
