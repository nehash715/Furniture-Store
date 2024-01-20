import React from 'react'

export default function MyButton(props) {
function handleClick(){
    console.log()
}

  return (
    <div>
      <button onClick={props.handleClick}>{props.label}</button>
    </div>
  )
}
