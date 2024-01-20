import React ,{useState,useEffect} from 'react'

export default function ShowNums(props) {
    const [num,setNum]=useState(0);
    const [square,setSquare]=useState(0)
    let n1=props.match.params.num
    useEffect(()=>{
        console.log(`updating number ${n1}`)
        setNum(n1)
        setSquare(n1*n1)
    },[n1])
  return (
    <div className='container'>
      Hooks Code<br></br>
      Number:{num},Square:{square}<br></br>
    </div>
  )
}
