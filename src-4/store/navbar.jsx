import React,{Component} from "react";

import {Link} from "react-router-dom"
import auth from "./AllService"
class Navbar extends Component {
   



render(){
    const user=auth.getUser()

   
   
    return(
        <nav className="navbar navbar-expand-sm  navbar-dark bg-dark ">
      <Link className="navbar-brand" to="/">Portal</Link>
        <div className="" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
              {/* <li className="nav-item">
                    <Link className="nav-link" to="/products">Products</Link>
                </li>
               {user && user.role=="user"&& <li className="nav-item">
                    <Link className="nav-link" to="/cart">Cart</Link>
                </li>}
                {user && user.role=="admin"&& <li className="nav-item">
                    <Link className="nav-link" to="/add">Add a New Product</Link>
                </li>}

                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
   &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
   {!user &&  <li className="nav-item">
                    <Link className="nav-link" to="/sign-in">Sign In</Link>
                </li>}
                {user &&  <li className="nav-item">
                    <Link className="nav-link" to="/sign-out">Sign out</Link>
    </li>}*/}

{/*<li className="nav-item">
                    <Link className="nav-link" to="/all">All Persons</Link>
                </li> 

                <li className="nav-item">
                    <Link className="nav-link" to="/add">Add Persons</Link>
</li>     */}
             <li className="nav-item">
                    <Link className="nav-link" to="/stocks">Stocks</Link>
                </li> 
                <li className="nav-item">
                    <Link className="nav-link" to="/orders">Orders</Link>
                </li> 
                <li className="nav-item">
                    <Link className="nav-link" to="/purchases">Purchases</Link>
                </li> <li className="nav-item">
                    <Link className="nav-link" to="/newsale">New sale</Link>
                </li> 
                <li className="nav-item">
                    <Link className="nav-link" to="/newpurchase">New Purchses</Link>
                </li> 
   

   
  
    </ul>

        </div>
      </nav>
    )
}
}
export default Navbar