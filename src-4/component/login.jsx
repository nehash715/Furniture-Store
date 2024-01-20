import React, { Component } from 'react'
import http from "./httpService.js"
import auth from "./AllService"
export default class Login extends Component {
state={
    form:{email:"",password:""}
}

handleChange=(e)=>{
    const {currentTarget:input}=e;
    let s1={...this.state}
    s1.form[input.name]=input.value;
    this.setState(s1)
}

/*async postData(url,obj){
  console.log(obj)
   try{
    let response=await http.post(url,obj);
    let {data}=response
    auth.login(data)
    this.props.history.push("/")
   }
   catch(err){
    alert("Enter right credentials")
   }
    

}*/

handleSubmit=(e)=>{
    e.preventDefault();
    let {form}=this.state
    console.log(form)
let {user,admin}=this.props
//console.log(user)
if(form.email==user.email && form.password ){
  this.props.history.push("/")
  auth.login(user)
}
else if(form.email==admin.email && form.password==admin.password ){
  this.props.history.push("/")
  auth.login(admin)
}
else{
  alert("Enter right credentials")
}


}

  render() {
    let {email,password}=this.state.form
    let {errors=null}=this.state
    //console.log(errors)
    return (
       <div className="container">
      
   <div className="form-group">
    <label>Email</label>
    <input
    type="text"
    className="form-control"
    id="email"
    name="email"
    placeholder="Enter Email"
    value={email}
    onChange={this.handleChange}
    
    />
   
      </div>
      <div className="form-group">
    <label>Password</label>
    <input
    type="password"
    className="form-control"
    id="passport"
    name="password"
    placeholder="Enter password"
    value={password}
    onChange={this.handleChange}
    
    />
      </div>
      <div className='btn btn-primary btn-sm' onClick={this.handleSubmit}>Login</div>
      </div>
    )
  }
}
