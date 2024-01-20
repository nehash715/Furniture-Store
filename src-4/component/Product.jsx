import React, { Component } from 'react'
import {Formik,Field,Form,ErrorMessage} from "formik"
import StoreRadio from './StoreRadio'
import auth from "./AllService"
import { Link } from 'react-router-dom'
export default class Product extends Component {

    state={
        optionarr:['Dining',"Drawing","Bedroom","Study"],
    optionSel:'',
    prod:{}
    }


showdetail=(prodCode)=>{
let {store}=this.props

let prod=store.find((p)=>{
    return p.prodCode==prodCode
})
//console.log(prod)
this.setState({prod:prod})
this.props.history.push(`/products/${prod.category}/${prodCode}`)
}




    handleChangeOption=(optionsSel)=>{
        //console.log("see",optionsSel)
        let s1={...this.state}
       
        this.props.history.push(`/products/${optionsSel.option}`)
        s1.optionSel=optionsSel.option
        //console.log(s1.prod)
            this.setState(s1)
    }

cart=(prodCode)=>{
    let {store,cart}=this.props
    let item=store.find((p)=>{
        return p.prodCode==prodCode
    })
  let n=cart.find((p)=>{
    return p.prodCode==prodCode
  })
  n?cart=cart:cart=cart.push(item)
alert("successfully added to cart")
//console.log(cart)
}
edit=(prodCode)=>{
    this.props.history.push(`/product/${prodCode}/edit`)
}
delete= (prodcode)=>{

    let {store}=this.props
    let index=store.findIndex((p)=>{
        return p.prodCode==prodcode
    })
    store.splice(index,1)
    let cat=s1.store[+index]
    
    
    this.props.history?.push("/products")
}

  render() {

    const user=auth.getUser()
    let {store}=this.props
    //let {delete}=this.props
    let {optionarr,optionSel}=this.state

let code=this.props.match.params

console.log("product",code,optionSel)
let prod=store.find((p)=>{
    return p.prodCode ==code.prodCode
})
optionSel=optionSel? optionSel:code.category


let store1=store.filter((p)=>{
    return p.category==optionSel
})

console.log(prod)
    return (
       
 <div className='container'>
 
    <div className='row'>
        <div className='col-2'>
            
        <StoreRadio  arr={optionarr}  optionsSel={optionSel} onChangeOption={this.handleChangeOption}/>
       
        </div> 
       
     
        
        <div className='col-6 size'>
<div className='row'>
           {store1.map((p)=>{
            return  <div className='col-6'>
      <img className='img' src={p.img} onClick={()=>this.showdetail(p.prodCode)}/>
                </div>
          
           })}
            </div>  
            </div>
            <div className='col-4'>
          
          {JSON.stringify(prod)=='{}'?"Choose Product!": <>
          {user && user.role=="admin" ?
        <>
        <button className='btn btn-secondary btn-sm' onClick={()=>this.edit(prod.prodCode)}>Edit</button>
        <button className='btn btn-secondary btn-sm' onClick={()=>this.props.delete(prod.prodCode)}>
            <Link className='linkcolor' to={`/products/${prod.category}`}>Delete</Link>
            </button></>
       :""}
           <img src={prod?.img}/>
            <h4>{prod.title}</h4>
            <p>{prod.desc}</p>
            <h6>Items in product</h6>
            {prod.ingredients.map((l)=>{
                return <div className='row'>
                    <div className='col'>{l.ingName}</div>{l.qty}

                </div>
            })}
            </>}
          {user && user.role=="user" ?
        
           <button className='btn btn-success' onClick={()=>this.cart(prod.prodCode)}>Add to Cart</button>
          :""}
            </div>
    </div>
  
</div>
    )
  }
}
