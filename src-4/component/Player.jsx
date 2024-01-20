import React from 'react'

export default function Player(props) {
  return (
    <div className='container'>
      {props.player.map((p)=>{
        return  <div className='container'>
            Name:{p.name}<br></br>
            Score:{p.score}<br></br>
            <button className='btn btn-success btn-sm' onClick={()=>props.score(p.name)} >Score</button>
        </div>
      })}
    </div>
  )
}
