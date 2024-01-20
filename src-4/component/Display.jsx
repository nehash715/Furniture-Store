import React,{useState,useEffect} from 'react'
import http from './httpService'
import {Link} from "react-router-dom"

export default function Display(props) {
    const [info,setInfo]=useState(null)
    let id=props.match.params.id;
    /*useEffect(()=>{
        console.log(`fetcjhing data for ${id}`)
        let response= http.get(`/displayinfo/${id}`)
        let {data}=response
        console.log(data)
        setInfo(data)
    },[id])*/

    useEffect(() => {
        const asyncFn = async () => { 
            let response=await http.get(`/displayinfo/${id}`)
        let {data}=response
        console.log(data)
        setInfo(data)
         };
        asyncFn();
      }, [id]);

  return (
    <div className='container'>
      Hooks Code<br></br>
      Id:{id}<br></br>
      Info:{info}<br></br>
      <Link to={`/display/${+id +1}`}>Next</Link>
    </div>
  )
}
