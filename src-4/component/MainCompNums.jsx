import React, { Component } from 'react'
import {Route,Switch,Link} from  "react-router-dom"
import ShowNums from './ShowNums'

export default class MainCompNums extends Component {
  render() {
    const numbers=[2,3,5,7,11,13,15,17]
    return (
      <div className='container'>
        <h5>Numbers and Square</h5>
        {numbers.map((num)=>(
            <Link key={num} to={`/showNums/${num}`}>Num={num}</Link>
        ))}
        <Switch>
            <Route path="/showNums/:num" component={ShowNums}/>
        </Switch>
      </div>
    )
  }
}
