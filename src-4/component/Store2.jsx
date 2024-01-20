import React, { Component } from 'react'
import {Formik,Field,Form,ErrorMessage} from "formik"
import StoreRadio from './StoreRadio'
import Product from './Product'
export default class Store2 extends Component {

    state={
        optionarr:['Dining',"Drawing","Bedroom","Study"],
    
    prod:{},
    optionSel:""
    }


showdetail=(prodCode)=>{
let {store}=this.props

let prod=store.find((p)=>{
    return p.prodCode==prodCode
})
this.setState({prod:prod},{optionSel:prod.category})

this.props.history.push(`/products/${prod.category}/${prodCode}`)
}


handleChangeOption=(optionsSel)=>{
    //console.log("sel",optionsSel)
    let s1={...this.state}
    let cat=this.props.match.params
    this.props.history.push(`/products/${optionsSel.option}`)
    s1.optionSel=optionsSel.option
        this.setState(s1)
}

  render() {
    let {store}=this.props
    let {optionarr,prod,optionSel}=this.state
    //console.log(prod)
    let cat=this.props.match.params
    console.log(cat)
    let store1=store.filter((p)=>{
        return p.category==cat.category
    })
console.log("storee2",cat,optionSel)
   let arr
   JSON.stringify(cat)!=='{}' ?arr=store1:arr=store
    return (
       
 <div className='container'>
 
    <div className='row'>
        <div className='col-2'>
            
        <StoreRadio  arr={optionarr}  optionsSel={cat.category} onChangeOption={this.handleChangeOption}/>
       
        </div> 
       
     
        
        <div className='col-6 size'>
<div className='row'>
           {arr.map((p)=>{
            return  <div className='col-6'>
      <img className='img' src={p.img} onClick={()=>this.showdetail(p.prodCode)}/>
                </div>
          
           })}
            </div>  
            </div>
            <div className='col-4'>

                {JSON.stringify(prod)!=='{}'?<>
            <img src={prod.img}/>
            <h4>{prod.title}</h4>
            <p>{prod.desc}</p>
            <h6>Items in product</h6>
            {prod?.ingredients.map((l)=>{
                return <div className='row'>
                    <div className='col'>{l.ingName}</div>{l.qty}

                </div>
            })}</>
          :<h4>Choose a Product</h4>}
            </div>
    </div>
  
</div>
    )
  }
}
