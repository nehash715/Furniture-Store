import React,{useState,useEffect} from "react";
function Formhook(props){
   let cities=["London","Paris","Noida"]
   let designationarr=["Developer","Senio Developer","Team Lead"]
let techs=["React","Javascript","JQuery","AngularJS","Node.js"]

   const [designation,setDesignation]=useState("")
const [name,setName]=useState("");
const [age,setAge]=useState("");
const [city,setCity]=useState("")
const [techKnown,setTechKnown]=useState([])
let {index}=props.match.params;
let {persons}=props;
let person=index?persons[+index]:{name:"",age:"",city:"",designation:"",techKnown:[]}
useEffect(()=>{
    setName(person.name),
    setAge(person.age),
    setCity(person.city),
    setDesignation(person.designation),
    setTechKnown(person.techKnown)

},[index])

function updateCB(inpArr,checked,value){
    let inpArr1=[...inpArr]
    if(checked) inpArr1.push(value)
    else{
        let index=inpArr1.findIndex((ele)=>ele==value);
        if(index>=0) inpArr1.splice(index,1)
    }
    return inpArr1
}

function handleSubmit(e){
    e.preventDefault();
    let person={name:name,age:age,city:city,designation:designation,techKnown:techKnown}
    //let {index}=props.match.params;
    props.onSubmit(person,index)
    props.history.push("/all")

}

return(
    <div className="container">
        <div className="form-group">
            <label>Name</label>
            <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            placeholder="Enter Person Name"
            value={name}
            onChange={(e)=>setName(e.currentTarget.value)}
            />
        </div>
        <div className="form-group">
            <label>Age</label>
            <input
            type="text"
            className="form-control"
            id="age"
            name="age"
            placeholder="Enter Person Age"
            value={age}
            onChange={(e)=>setAge(e.currentTarget.value)}
            />
        </div>
        <div className='form-group'>
                  
                    <select name="country" value={city} className="form-control"
                     onChange={(e)=>setCity(e.currentTarget.value)}>
                       {cities.map(c1=><option>{c1}</option>)}
                       </select>
                   
        </div>

        {designationarr.map((d1)=>(
            <div className="form-check form-check-inline">
                <input
                className="form-check-input"
                type="radio"
                name="designation"
                value={d1}
                checked={designation===d1}
                onChange={(e)=>setDesignation(e.currentTarget.value )}
                />
                <label className="form-check-label">{d1}</label>
            </div>
        ))}


{techs.map((d1)=>(
            <div className="form-check form-check-inlie">
                <input
                className="form-check-input"
                type="checkbox"
                name="techKnown"
                value={d1}
                checked={techKnown.find((t)=>t==d1)}
                onChange={(e)=>setTechKnown(updateCB(techKnown,e.currentTarget.checked,e.currentTarget.value))}
                />
                <label className="form-check-label">{d1}</label>
            </div>
        ))}

        <button className="btn btn-sm btn-primary" onClick={handleSubmit}>
            {index?"Update":"Submit"}</button>
    </div>
)

}

export default Formhook