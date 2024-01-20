import React,{useState} from 'react'

export default function MyTable(props) {
const {headers,data,delopts}=props
function handleDelete (index){
    delopts.onDelete(index)
}
//let delopts={deloptions:true,cols:4,onDelete:handleDelete}
  return (
    <div className='container'>
      <div className=' row bg-dark text-white'>
        {headers.map((h1,index)=>(
            <div className={`col-${h1.cols}`} key={index}>{h1.headers}</div>
        ))}
      </div>

      {data.map((trow,index)=>(
        <div className='row' key={index} >
            {headers.map((h1,index2)=>(
                <div className={`col-${h1.cols} border`}>{trow[h1.field]}</div>

            ))}
            <div className={`col-${delopts.cols} border`}>
                <button className='btn btn-danger' onClick={()=>handleDelete(index)} >Delete</button>
            </div>

        </div>
      ))}
    </div>
  )
}
