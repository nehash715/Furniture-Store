import React,{Component} from "react";
import {Formik,Field,Form} from "formik";

class MyFormikForm extends Component{

state={
    locs:[
        {country:"India",cities:["New Delhi","Mumbai","Banglore","Chennai","Pune"]},
        
        {country:"USA",cities:["Los Angles","Chicago","New York","Seattle"]},
        {country:"France",cities:["Paris","Nice","Lyon","Cannes"]},
        {country:"Japan",cities:["Tokyo","Kyoto"]},
        {country:"China",cities:["Shanhai","Beijing","Shenzen"]}
    ],
    country:"",
    city:[],
    selcity:""
}

/*handlenumberChange=(event,values,handleChange)=>{
    let {name,value}=event.currentTarget
    console.log(name,value)
    console.log(values)
    switch (name){
        case "num1":values.num2=values.total- +value
        case "num2":values.num1=values.total- +value

        case "total":
            values.num1=+value/2;
            values.num2=+value/2
            break;
    }
    handleChange(event)
}*/

changeCountry(event) {
    this.setState({ country: event.target.value });
    this.setState({
      city: this.state.locs.find(
        (cntry) => cntry.country === event.target.value
      ).cities
    });
  }
  handlecity=(e)=>{
    this.setState({selcity:e.target.value})
  }

    render(){
let {locs,city,country,selcity}=this.state
console.log(country)
        let countries1=locs.map((c1)=>{
            return {value:c1.country,display:c1.country}
        })
        console.log(countries1)
        countries1.unshift({value:"",display:"Select the country"})

        let cities1=city.map((c1)=>{
            return {value:c1,display:c1}
        })
        console.log(cities1)
        cities1.unshift({value:"",display:"Select the city"})
        return <Formik initialValues={{
            country:country||"",
            city:city||""
        }} >



{/*({values,handleChange,handleBlur})=>(
    <Form>
    <Field name="num1" 
    type="numer"
     onChange={(e)=>{
        console.log("onchane", e.currentTarget.name,e.currentTarget.value)
        values.num2= values.total- +e.currentTarget.value
    handleChange(e)
    }
}/>

<Field name="num2"
type="number" 
     onChange={(e)=>{
        console.log("onchane", e.currentTarget.name,e.currentTarget.value)
        values.num1=values.total- +e.currentTarget.value
    handleChange(e)
    }
}/>
<Field name="total"
type="number" 
     onChange={(e)=>{
       console.log("onchane", e.currentTarget.name,e.currentTarget.value)
        values.num1= +e.currentTarget.value/2
        values.num2=+e.currentTarget.value/2

    handleChange(e)
    }
}/>

    </Form>
)*/}

<Form>
  <div className='form-group'>
                  
                    <select name="country" as="select" className="form-control" onChange={(e)=>this.changeCountry(e)}>
                       {countries1.map(c1=><option value={c1.value} key={c1.display}>{c1.display}</option>)}
                       
                       
                       
                       
                        </select>
                   
        </div>


        <div className='form-group'>
                  
                  <select name="city" as="select" className="form-control" onChange={(e)=>this.handlecity(e)}>
                      {cities1.map(c1=><option value={c1.value} key={c1.display}>{c1.display}</option>)}
                   
                  </select>
                 
      </div>

      <div className='form-group'>
                        <button type='submit' className='btn btn-primary mr-2'>
                            Submit
                        </button>
                    </div>
      </Form>

        </Formik>
    }
}
export default MyFormikForm