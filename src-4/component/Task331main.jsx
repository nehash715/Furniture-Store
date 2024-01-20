import React,{useState} from 'react'
import MyButton from './MyButton'
import MyTable from './MyTable'
import Myform from './Myform'
export default function Task331main() {

let {tableData, formField}=require("./data.js")
const [table,setTable]=useState(tableData)
let {headers,data}=table
let delopts={deloptions:true,cols:4,onDelete:handleDelete}
/*function handleButton1(){
        console.log("btn 1 is clicked")
    }
    
    function handleButton2(){
        console.log("btn 2 is clicked")
    }*/
function  handleDelete(index){
    let newdata=[...data]
    newdata.splice(index,1)
    setTable({...table,data:newdata})
}
function handleSubmit(formdata){
    let newData=[...data,formdata];
    setTable({...table,data:newData})
}
  return (
    <div className='container'>
       <h2> Displaying details </h2>
      {/*<MyButton label="Button1"  handleClick={handleButton1} />
      <MyButton label="Button2" handleClick={handleButton2}/>*/}
      <MyTable headers={headers} data={data} delopts={delopts} />
      <h2>New Details</h2>
      <Myform formFields={formField} onSubmit={handleSubmit}/>
    </div>
  )
}
