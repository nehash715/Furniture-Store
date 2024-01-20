import React, { Component } from 'react'
import {Formik,Field,Form,FieldArray,ErrorMessage} from "formik"
import * as Yup from "yup"
const listvalidationSchema=Yup.object().shape({
  prodCode:Yup.string().required("Code is required"),
  title:Yup.string().required("Product Name  is required"),
  img:Yup.string().required("Image URL is required"),
  category:Yup.string().required("Category is required"),
ingredients:Yup.array().of(
    Yup.object().shape({
      ingName:Yup.string().required("Item  Name is required"),
      qty:Yup.number().required("Quantity is required"),
    
    })
  )
  .min(1,"Minimum of 1 item is required")
})
export default class AddProduct extends Component {
state={
    categoryarr:["Drawing","Dining","Bedroom","Study"]
}

  render() {
    let {categoryarr}=this.state
    let category1=categoryarr.map((c1)=>{
      return {value:c1,display:c1}
  })
  //console.log(countries1)
  category1.unshift({value:"",display:"Select the category"})

    let {store}=this.props
    const code=this.props.match.params
    console.log(code)
    
    let index= JSON.stringify(code)!=='{}'? store.findIndex((p)=>{
      return p.prodCode==code.code
    }):""
    //console.log(JSON.stringify(code)!=='{}')
    let prod;
    if(JSON.stringify(code)!=='{}'){
      prod=store[+index]
    }
    else{
      prod={}
    }
    console.log(prod)
    return (
      <Formik
      initialValues={{
        prodCode:prod.prodCode||"",
        title:prod.title||"",
        img:prod.img||"",
        category:prod.category||"",
        desc:prod.desc||[],
        ingredients:prod.ingredients||[]
        
      }}
      validationSchema={listvalidationSchema}
      onSubmit={(values)=>{
        
        this.props.onSubmit(values,index);

      
        this.props.history.push(`/products/${values.category}/${values.prodCode}`)

      }}
      >
        {({values,errors})=>(

            <Form>
                
              
                <div className='form-group'>
                    <label>Code</label>
                    <Field name="prodCode" type="text" placeholder="Code"
                    className="form-control"></Field>
                    <div className='text-danger'>
                      <ErrorMessage name='prodCode'></ErrorMessage>
                    </div>
                </div>
              
                <div className='form-group'>
                    <label>Product Name</label>
                    <Field name="title" type="text" placeholder="Product Name"
                    className="form-control"></Field>
                    <div className='text-danger'>
                      <ErrorMessage name='title'></ErrorMessage>
                    </div>
                </div>

                <div className='form-group'>
                    <label>Image URL</label>
                    <Field name="img" type="text" placeholder="URL"
                    className="form-control"></Field>
                    <div className='text-danger'>
                      <ErrorMessage name='img'></ErrorMessage>
                    </div>
                </div>

                <div className='form-group'>
                    <label>Choose the Category</label>
                    <Field name="category" as="select" className="form-control">
                        {category1.map(c1=><option value={c1.value} key={c1.display}>{c1.display}</option>)}
                    </Field>
                    <div className='text-danger'>
                        <ErrorMessage name="category"></ErrorMessage>
        </div>
        </div>


                <FieldArray name='desc'
                render={(arrayHelpers)=>(
                    <div>
                        {values.desc.map((t1,index)=>{
                        return <div className='row mb-2' key={index}>
                            <div className='col-7'>
                                <Field name={`desc[${index}]`}
                                placeholder="Description"
                                type="text" 
                                className="form-control"/>
                            </div>
                           
                            <div className='col-2 align-middle'>
                                <button className='btn btn-sm btn-danger mr-2'
                                type='button'
                                onClick={()=>arrayHelpers.remove(index)}>X</button>
                            </div>
                         </div>
                        
                        })}
                        <button className='btn btn-secondary mb-2'
                        type="button"
                        onClick={()=>arrayHelpers.push("")}>Add Description</button>

                    <div className='text-danger'>
                          {typeof errors.desc=="string"
                          ?errors.desc
                          :errors.desc
                          ?errors.desc.reduce((acc,curr)=>(acc?acc:curr?curr.description:acc),"")
                          :""}
                        </div>
                    </div>
                )}>

        </FieldArray>


        <FieldArray name='ingredients'
                render={(arrayHelpers)=>(
                    <div>
                        {values.ingredients.map((t1,index)=>{
                        return <div className='row mb-2' key={index}>
                            <div className='col-7'>
                                <Field name={`ingredients[${index}].ingName`}
                                
                                type="text" placeholder="Iten Name"
                                className="form-control"/>
                            </div>

                            <div className='col-2'>
                                <Field name={`ingredients[${index}].qty`}
                                
                                type="text" placeholder="Quantity"
                                className="form-control"/>
                            </div>
                            <div className='col-2 align-middle'>
                                <button className='btn btn-sm btn-danger mr-2'
                                type='button'
                                onClick={()=>arrayHelpers.remove(index)}>X</button>
                            </div>
                         </div>
                        
                        })}
                        <button className='btn btn-secondary mb-2'
                        type="button"
                        onClick={()=>arrayHelpers.push("")}>Add item shipped with product</button>

                        <div className='text-danger'>
                          {typeof errors.ingredients=="string"
                          ?errors.ingredients
                          :errors.ingredients
                          ?errors.ingredients.reduce((acc,curr)=>(acc?acc:curr?curr.ingName||curr.qty:acc),"")
                          :""}
                        </div>
                    </div>
                )}>

                </FieldArray>




                <div className='form-group'>

                    <button type='submit' className='btn btn-success mr-2'>
                     Save


                    
                    
                    </button>
                </div>
            </Form>
        )}
      </Formik>
    )
  }
}
