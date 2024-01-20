import React, { useState } from 'react'

export default function CountAB() {
    const [countA,setCountA]=useState(0)
    const [countB,setCountB]=useState(0)

    function incrementAB(name){
        name=="A"?setCountA(countA+2):setCountB(countB+1)
    }
  return (
    <div>
    <h1>Counter AB hooks demo</h1>  
    <h2>You clicked A:{countA} and B:{countB} times</h2>

    <button className='btn btn-primary mr-2'
    onClick={()=>incrementAB("A")} >
Click A
    </button>
    <button className='btn btn-primary mr-2'
    onClick={()=>incrementAB("B")} >
Click B
    </button>
    </div>
  )
}
