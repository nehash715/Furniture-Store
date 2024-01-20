import React, { Component } from 'react'
import {Formik,Field,Form,FieldArray,ErrorMessage} from "formik"
import * as Yup from "yup"
const listvalidationSchema=Yup.object().shape({
  course:Yup.string().required("Name of the course is required").min(3,"Course name istoo short"),
  students:Yup.array().of(
    Yup.object().shape({
      student:Yup.string().required("Student name is required").min(4,"Student name must have atleast 4 characters"),
      quiz1:Yup.string().required("Grade is required").max(1,"Not more than 1 character"),
      quiz2:Yup.string().required("Grade is required").max(1,"Not more than 1 character")
    })
  )
  .min(3,"Minimum of 3 student should be in course")
})
export default class Form6 extends Component {
  render() {
    let {lists}=this.props
    const index=this.props.match.params
//console.log(index,parseInt(index.index),lists)
    //let list=index?lists[+index.index]:{}
    //console.log(index)
    console.log(JSON.stringify(index)!=='{}')
    let list;
    if(JSON.stringify(index)!=='{}'){
      list=lists[+index.index]
    }
    else{
      list={}
    }
    console.log(list)
    return (
      <Formik
      initialValues={{
        course:list?.course||"",
        students:list?.students||[],
        
      }}
      validationSchema={listvalidationSchema}
      onSubmit={(values)=>{
        this.props.onSubmit(values,index.index);
        this.props.history.push("/")
      }}
      >
        {({values,errors})=>(

            <Form>
                {console.log(Error,errors)}
                <h4>Details of Course</h4>
                <div className='form-group'>
                    <label>Course</label>
                    <Field name="course" type="text" placeholder="Name of course"
                    className="form-control"></Field>
                    <div className='text-danger'>
                      <ErrorMessage name='course'></ErrorMessage>
                    </div>
                </div>
              

                <FieldArray name='students'
                render={(arrayHelpers)=>(
                    <div>
                        {values.students.map((t1,index)=>{
                        return <div className='row mb-2' key={index}>
                            <div className='col-7'>
                                <Field name={`students[${index}].student`}
                                
                                type="text" placeholder="Student Name"
                                className="form-control"/>
                            </div>
                            <div className='col-1'>
                                <Field name={`students[${index}].quiz1`}
                                
                                type="text" placeholder="quiz1"
                                className="form-control"/>
                            </div>
                            <div className='col-1'>
                                <Field name={`students[${index}].quiz2`}
                                
                                type="text" placeholder="quiz2"
                                className="form-control"/>
                            </div>
                            <div className='col-2 align-middle'>
                                <button className='btn btn-sm btn-warning mr-2'
                                type='button'
                                onClick={()=>arrayHelpers.remove(index)}>Delete</button>
                            </div>
                         </div>
                        
                        })}
                        <button className='btn btn-success mb-2'
                        type="button"
                        onClick={()=>arrayHelpers.push("")}>Add student</button>

                        <div className='text-danger'>
                          {typeof errors.students=="string"
                          ?errors.students
                          :errors.students
                          ?errors.students.reduce((acc,curr)=>(acc?acc:curr?curr.student||curr.quiz1||curr.quiz2:acc),"")
                          :""}
                        </div>
                    </div>
                )}>

                </FieldArray>
                <div className='form-group'>

                    <button type='submit' className='btn btn-primary mr-2'>
                      {JSON.stringify(index)!=='{}'?"Update":"Add"}


                    
                    
                    </button>
                </div>
            </Form>
        )}
      </Formik>
    )
  }
}
