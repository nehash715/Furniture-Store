import React ,{useState} from 'react'

export default function Counter() {
    const [count ,setCount]=useState(0)
function addTocounter(num)
{
    setCount(count+num)
}

  return (
    <div>
      <h1>Counter Hooks Demo</h1>
      <h2>You clicked {count}  times!</h2>
      <button className='btn btn-danger mr-2' onClick={()=>addTocounter(-1)} >Decrement</button>
      <button className='btn btn-primary'onClick={()=>addTocounter(+1)}>Increment</button>
    </div>
  )
}
