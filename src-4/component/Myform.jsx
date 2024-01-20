import React,{useState} from 'react'

export default function Myform(props) {

    let  {formFields}=props
   let initialform= formFields.reduce((acc,curr)=>{
acc[curr.name]=""
return acc
    },{})

    const [fields,setFields]=useState(initialform)

    function handleChange(e){
        const {currentTarget:input}=e
        let fields1={...fields}
        fields1[input.name]=input.value;
        setFields(fields1)
    }
function handleSubmit(){
    props.onSubmit(fields)
    setFields(initialform)
}

          return (
    <div className='container'>
      {formFields.map((field,index)=>(
        <div className='form-group' key={index}>
            <input name={field.name} type={field.type} value={fields[field.name]}
            placeholder={field.placeholder}
onChange={handleChange}
className='form-control'/>
        </div>
      ))}

      <div className='form-group'>
        <button className='btn btn-primary' onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  )
}
