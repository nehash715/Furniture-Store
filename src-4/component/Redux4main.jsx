import React, { Component } from 'react'
import { Route,Switch,Redirect } from 'react-router-dom'
import StockComp from './StockComp'
import OrdersComp from './OrdersComp'
import NewPurchase from './NewPurchase'
import NewSale from './NewSale'
import Navbar from './navbar'
import PurhaseComp from './PurhaseComp'
export default class Redux4main extends Component {
  render() {
    return (
      <div className='container'>
       <div className="row">
        <div className='col-4 border bg-warning'><StockComp/> </div>
        <div className='col-4 border bg-warning'><OrdersComp/> </div>
        <div className='col-4 border bg-warning'><PurhaseComp/> </div>
        
       </div>
       <div className='row'>
        <div className='col-6 bg-dark text-white'><NewSale/> </div>
        <div className='col-6 bg-dark text-white'><NewPurchase/> </div>
       </div>
       {/* <Switch>
            <Route path='/stocks' component={StockComp}/>
            <Route path='/orders' component={OrdersComp}/>
            <Route path='/purchases' component={PurhaseComp}/>
            <Route path='/newsale' component={NewSale}/>
            <Route path='/newpurchase' component={NewPurchase}/>
    <Redirect from="/" to="/newsale"/>
    </Switch>*/}
      </div>
    )
  }
}
