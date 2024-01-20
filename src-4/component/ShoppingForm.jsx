import React, { Component } from 'react'
import {Formik,Field,Form,FieldArray,ErrorMessage} from "formik"
import * as Yup from "yup"
const listvalidationSchema=Yup.object().shape({
  name:Yup.string().required("Name of the list is required"),
  items:Yup.array().of(
    Yup.object().shape({
      item:Yup.string().required("Product name is required").min(3,"Product name istoo short"),
      qty:Yup.number('Quantity must be an integer').required("Quantity is requiresd")
      .integer("Quantity must be an integer").min(1,"Minimum quantity is 1")
    })
  ).required("Items ae required in shoppinglist")
  .min(2,"Minimum of 2 item should be in list")
})
export default class ShoppingForm extends Component {
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
        name:list?.name||"",
        items:list?.items||[]
      }}
      validationSchema={listvalidationSchema}
      onSubmit={(values)=>{
        this.props.onSubmit(values,index.index);
        this.props.history.push("/")
      }}
      >
        {({values,errors})=>(

            <Form>
                <h4>Details of Shpping List</h4>
                <div className='form-group'>
                    <label>Name</label>
                    <Field name="name" type="text" placeholder="Name of list"
                    className="form-control"></Field>
                    <div className='text-danger'>
                      <ErrorMessage name='name'></ErrorMessage>
                    </div>
                </div>

                <FieldArray name='items'
                render={(arrayHelpers)=>(
                    <div>
                        {values.items.map((t1,index)=>{
                        return <div className='row mb-2' key={index}>
                            <div className='col-7'>
                                <Field name={`items[${index}].item`}
                                
                                type="text" placeholder="Product Name"
                                className="form-control"/>
                            </div>

                            <div className='col-2'>
                                <Field name={`items[${index}].qty`}
                                
                                type="text" placeholder="Quantity"
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
                        onClick={()=>arrayHelpers.push("")}>Add item</button>

                        <div className='text-danger'>
                          {typeof errors.items=="string"
                          ?errors.items
                          :errors.items
                          ?errors.items.reduce((acc,curr)=>(acc?acc:curr?curr.item||curr.qty:acc),"")
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
