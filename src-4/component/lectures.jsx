import React from 'react'

export default function Lectures(props) {
    let lecs=props.lectures
  return (
    <div className='container'>
      {lecs.map((l1)=>(
      <h5>{l1.name} Likes={l1.likes}{" "}
       <button className='btn btn-primary'onClick={()=>props.clickLike(l1.name)} >Like</button>
       </h5>
      ))}
    </div>
  )
}
