import React, { Component } from 'react'
import Display from './Display'
import { Link, Route, Switch } from 'react-router-dom'
export default class MainComphook extends Component {
  render() {
    return (
      <div className='container'>
        <h5>Info system</h5>
        <Link to={`/display/1`}>Info-1</Link>
        <Switch>
            <Route path="/display/:id" component={Display}/>
        </Switch>
      </div>
    )
  }
}
