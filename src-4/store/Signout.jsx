import React, { Component } from 'react'
import auth from "./AllService"

export default class Signout extends Component {

componentDidMount(){
auth.logout();
this.props.history.push("/sign-in")
//window.location="/login"
}

  render() {
    return (
      <div>
        
      </div>
    )
  }
}
