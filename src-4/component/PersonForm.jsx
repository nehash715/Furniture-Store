import React, { Component } from 'react'
import {Formik,Field,Form,ErrorMessage} from "formik"

import * as yup from "yup";

const personValidateSchema=yup.object().shape({
    name:yup
    .string()
    .required("Name is required")
    .min(6,"Name  should have minimum 6 characters"),
    age:yup.number().typeError("Age should be a number").required("Age is required").min(0,"Age cannot be less than 0")
    .max(100,"Age cannot be greater than 100"),

    country:yup.string().required("country is required"),
    tech:yup.array().min(1,"Choose at least 1 technology"),
    currentStatus:yup.string().required("Status is required")
})


const personValidate=(values)=>{
    const errors={}
    if(!values.name) errors.name="Name is required";
    else if(values.name.length<6) errors.name="Name should have minimum 6 character";

    if(!values.age) errors.age="Age is required";
    else if(isNaN(+values.age)) errors.age="Age should be a number"
    else if(+values.age<0) errors.age="Age cannot be zero";
    else if(+values.age>100) errors.age="Age cannot be greater than 100"

    if(!values.country) errors.country="Country is required";

    

    if(!values.currentStatus) errors.currentStatus="Status is required"

  /*  if(!values.gender) errors.gender="Gender is mandatory";

    if(!values.deliveryOption) errors.deliveryOption="Choose Delivery Option";
   if(values.paymentOption.length===0) errors.paymentOption="Choose Payment OPtion"
    else if(values.paymentOption.length>2) errors.paymentOption="Choose not more than 2 Option";

    if(!values.deliverySlot) errors.deliverySlot="Choose Delivery Slot";*/
    return errors

}
export default class PersonForm extends Component {
    state={
        countries:["USA","france","Canada","India","England"],
        technologies:["Javascript","React","Angular","Node.js"],
        currentStatuses:["Student","Working","Looking for a job"],
        genderarr:["Male","Female"],
        DeliveryOptionarr:["Home","Office","Pickup"],
        PaymentOptionarr:["Credit Card","Debit Card","Net banking"],
        DeliverySlotarr:["10AM-2PM","2PM-6PM","6PM-10PM"]

    }
  render() {
    const {persons}=this.props
    const {index}=this.props.match.params
let person=index?persons[+index]:{};
const {countries,technologies,currentStatuses,genderarr,DeliveryOptionarr,PaymentOptionarr,DeliverySlotarr}=this.state
let countries1=DeliverySlotarr.map((c1)=>{
    return {value:c1,display:c1}
})
countries1.unshift({value:"",display:"Select the Delivery Slot"})
    return (
    
        <Formik initialValues={{
            name:person.name||"",
            age:person.age||"",
            country:person.country||"",
            tech:person.tech||[],
            currentStatus:person.currentStatus||""
        
/*gender:person.gender||"",
deliveryOption:person.deliveryOption||"",
paymentOption:person.paymentOption||[],
deliverySlot:person.deliverySlot||""*/
        }} 
        validationSchema={personValidateSchema}
        onSubmit={(values)=>{
            this.props.onSubmit(values,index)
            this.props.history.push("/");
        }}
        >
        {()=>(
            <Form>
               
                <div className='form-group'>
                    <label>Name</label>
                    <Field name="name" type="text" className="form-control" />
                    <div className='text-danger'>
                        <ErrorMessage name="name"></ErrorMessage>
                    </div>
                </div>


             {/*   <div className='form-group'>

                    {genderarr.map(t1=>(
                        <div className='form-check form-check-inline'>
                            <Field name="gender" type="radio" value={t1} className="form-check-input"></Field>
                            <label className='form-check-label'>{t1}</label>
                        </div>
                    )
                        
                        )}
                          <div className='text-danger'>
                        <ErrorMessage name="gender"></ErrorMessage>
                    </div>

                    </div>

                    <div className='form-group'>
<label className='m-0 pr-3'>Choose your Delivery Option </label>
<br></br>
                    {DeliveryOptionarr.map(t1=>(
                        <div className='form-check form-check-inline'>
                            <Field name="deliveryOption" type="radio" value={t1} className="form-check-input"></Field>
                            <label className='form-check-label'>{t1}</label>
                        </div>
                    )
                        
                        )}
                          <div className='text-danger'>
                        <ErrorMessage name="deliveryOption"></ErrorMessage>
                    </div>

                    </div>

                    <div className='form-group'>
                    <label className='m-0 pr-3'>Choose Your Payment Option</label>
                    {PaymentOptionarr.map(t1=>(
                        <div className='form-check form-check-inline'>
                            <Field name="paymentOption" type="checkbox" value={t1} className="form-check-input"></Field>
                            <label className='form-check-label'>{t1}</label>
                            <br></br>
                        </div>
                    )
                        
                        )}
                          <div className='text-danger'>
                        <ErrorMessage name="paymentOption"></ErrorMessage>
                    </div>

                    </div>

                    <div className='form-group'>
                    <label>Choose the delivery Slot</label>
                    <Field name="deliverySlot" as="select" className="form-control">
                        {countries1.map(c1=><option value={c1.value} key={c1.display}>{c1.display}</option>)}
                    </Field>
                    <div className='text-danger'>
                        <ErrorMessage name="deliverySlot"></ErrorMessage>
        </div>
                    </div>*/}
                <div className='form-group'>
                    <label>Age</label>
                    <Field name="age" type="text" className="form-control" />
                    <div className='text-danger'>
                        <ErrorMessage name="age"></ErrorMessage>
                    </div>
                </div>
                <div className='form-group'>
                    <label>Country</label>
                    <Field name="country" as="select" className="form-control">
                        {countries1.map(c1=><option value={c1.value} key={c1.display}>{c1.display}</option>)}
                    </Field>
                    <div className='text-danger'>
                        <ErrorMessage name="country"></ErrorMessage>
        </div>


                 <div className='form-group'>
                    <label className='m-0 pr-3'>Technologies known</label>
                    {technologies.map(t1=>(
                        <div className='form-check form-check-inline'>
                            <Field name="tech" type="checkbox" value={t1} className="form-check-input"></Field>
                            <label className='form-check-label'>{t1}</label>
                        </div>
                    )
                        
                        )}
                          <div className='text-danger'>
                        <ErrorMessage name="tech"></ErrorMessage>
                    </div>

                    </div>

<div className='form-group'>
<label className='m-0 pr-3'>Current Status </label>
                    {currentStatuses.map(t1=>(
                        <div className='form-check form-check-inline'>
                            <Field name="currentStatus" type="radio" value={t1} className="form-check-input"></Field>
                            <label className='form-check-label'>{t1}</label>
                        </div>
                    )
                        
                        )}
                          <div className='text-danger'>
                        <ErrorMessage name="currentStatus"></ErrorMessage>
                    </div>

                    </div>
                

                    <div className='form-group'>
                        <button type='submit' className='btn btn-primary mr-2'>
                            {index?"Update":"Submit"}
                        </button>
                    </div>
               </div>
            </Form>
    )}
        </Formik>
     
    )
  }
}
