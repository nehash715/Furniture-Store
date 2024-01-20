import React, { Component } from 'react'
import BasicExample from './Basic'
import {Link, Route,Switch} from "react-router-dom";
import Store from './Store'
import Product from './Product';
import Login from './login';
import Cart from './Cart';
import Navbar from './navbar';
import Store2 from './Store2';
import Signout from './Signout';
import LoginForm from './Signin';
import AddProduct from './addProduct';
export default class FurnitureStoreMain extends Component {

state={
    store:[
  
    {
            prodCode:	"DS6S761",
            quantity:1,
            category:	"Dining",
            desc:	[
                    "Six	Seater	Dining	Set	in	Antique	Cherry	Colour",
                    "Assembly	by	Skilled	Carpenters",
                    "Made	from	Teak	wood"
            ],
            img:
                    "https://hometown.gumlet.io/media/product/74/8673/48339/1.jpg?mode=fill&w=273&h=273&dpr=1.0",
            ingredients:	[
                    {	ingName:	"Dining	Table",	qty:	1	},
                    {	ingName:	"Chair",	qty:	4	},
                    {	ingName:	"Bench",	qty:	1	}
            ],
            title:	"Six	Seater	Dining	Set"
    },
    {
            prodCode:	"DS4S177",
            quantity:1,
            category:	"Dining",
            desc:	[
                    "Mild	Steel	Four	Seater	Dining	Set	in	Black	Colour",
                    "Knock-down	construction	for	easy	transportation"
            ],
            img:
                    "https://hometown.gumlet.io/media/product/89/3163/57821/1.jpg?mode=fill&w=273&h=273&dpr=1.0",
            ingredients:	[
                    {	ingName:	"Dining	Table",	qty:	1	},
                    {	ingName:	"Chair",	qty:	4	}
            ],
            title:	"Mild	Steel	Dining	Set"
    },
    {
            prodCode:	"DC2S705",
            quantity:1,
            category:	"Dining",
            desc:	[
                    "Solid	Wood	Dining	Chair	Set	of	Two	in	Dark	Walnut	Colour",
                    "Beautiful	design	carved	on	dining	chair",
                    "Dining	chair	seat	upholstered	in	dark	brown	Fabric"
                ],
				img:
						"https://hometown.gumlet.io/media/product/61/9353/47156/1.jpg?mode=fill&w=273&h=273&dpr=1.0",
				ingredients:	[{	ingName:	"Chair",	qty:	2	}],
				title:	"Dining	Chair	Set"
		},
		{
				prodCode:	"BN1S388",
                                quantity:1,
				category:	"Dining",
				desc:	[
						"Solid	Wood	Dining	Bench	in	Dark	Walnut	Colour",
						"Comfortable	bench	for	a	relaxed	dinner"
				],
				img:
						"https://hometown.gumlet.io/media/product/81/9863/59641/1.jpg?mode=fill&w=273&h=273&dpr=1.0",
				ingredients:	[{	ingName:	"Bench",	qty:	1	}],
				title:	"Dining	Bench"
		},
		{
				prodCode:	"SF2S532",
                                quantity:1,
				category:	"Drawing",
				desc:	[
						"Characteristic	Rising	Track	Arm	Rest	Design",
						"Premium	High	Gloss	Leatherette	Upholstery",
						"Independent	Headrest	And	Lumber	Support"
				],
				img:
						"https://hometown.gumlet.io/media/product/53/1253/12483/1.jpg?mode=fill&w=273&h=273&dpr=1.0",
				ingredients:	[{	ingName:	"Sofa",	qty:	1	}],
				title:	"Two	Seater	Sofa"
		},
		{
				prodCode:	"SF2S206",
                                quantity:1,
				category:	"Drawing",
				desc:	["Two	Seater	Sofa	in	Blue	Colour",	"Assembly	by	Skilled	Carpenters"],
				img:
						"https://hometown.gumlet.io/media/product/18/2073/89701/1.jpg?mode=fill&w=273&h=273&dpr=1.0",
                        ingredients:	[{	ingName:	"Sofa",	qty:	1	}],
				title:	"Two	Seater	Sofa"
		},
		{
				prodCode:	"SFBD311",
                                quantity:1,
				category:	"Drawing",
				desc:	[
						"Sofa	Cum	bed	in	Brown	Colour",
						"Ply-wood	construction	with	hand	polished	finish",
						"Removable	fabric	cover	on	best	quality	foam	mattress",
						"Throw	cushions	and	bolsters	come	with	the	product"
				],
				img:
						"https://hometown.gumlet.io/media/product/30/3253/95505/1.jpg?mode=fill&w=273&h=273&dpr=1.0",
				ingredients:	[{	ingName:"Sofa",	qty:1},	{ingName:"Cushions",qty:2	}],
				title:	"Sofa	cum	Bed"
		},
		{
				prodCode:	"BDQS381",
                                quantity:1,
				category:	"Bedroom",
                desc:	[
                    "Wood	Box	Storage	King	Size	Bed	in	Wenge	Colour	",
                    "Box	Storage	included	for	Maximum	space	utilization",
                    "Mattress	is	included"
            ],
            img:
                    "https://hometown.gumlet.io/media/product/01/5763/52147/1.jpg?mode=fill&w=273&h=273&dpr=1.0",
            ingredients:	[{	ingName:"Bed",	qty:1},	{ingName:"Mattress",	qty:	2	}],
            title:	"King	size	Bed"
    },
    {
            prodCode:	"BDQS229",
            quantity:1,
            category:	"Bedroom",
            desc:	[
                    "Wood	Hydraulic	Storage	Queen	Size	Bed",
                    "Half	hydraulic	storage",
                    "Superior	E2	grade	MDF	used	with	melamine	finish"
            ],
            img:
                    "https://hometown.gumlet.io/media/product/52/0153/13815/1.jpg?mode=fill&w=273&h=273&dpr=1.0",
            ingredients:	[{	ingName:	"Bed",	qty:	1	}],
            title:	"Queen	size	Bed"
    },
    {
            prodCode:	"ST1T425",
            quantity:1,
            category:	"Study",
            desc:	[
                    "Wood	Study	Table	in	Walnut	Colour",
                    "Assembly	by	Skilled	Carpenters",
                    "Built	from	High	Quality	Wood"
            ],
            img:
                "https://hometown.gumlet.io/media/product/12/9153/90938/1.jpg?mode=fill&w=273&h=273&dpr=1.0",
            ingredients:	[{	ingName:	"Study	Table",	qty:	1	}],
            title:	"Study	Table"
    },
    {
            prodCode:	"ST1T588",
            quantity:1,
            category:	"Study",
            desc:	[
                    "	Wood	Study	Table	in	Highgloss	White	&	Blue	Colour",
                    "Study	table	comes	with	bookshelf	on	top,	5	drawers	&	1	open	shelf",
                    "Superior	quality	MDF	with	stain	resistant	melamine	finish"
            ],
            img:
                    "https://hometown.gumlet.io/media/product/26/4673/10215/1.jpg?mode=fill&w=273&h=273&dpr=1.0",
            ingredients:	[{	ingName:	"Study	Table",	qty:	1	}],
            title:	"Study	Table"
        }
    ],
   copyStore:[

        
    {
            prodCode:	"DS6S761",
            quantity:1,
            category:	"Dining",
            desc:	[
                    "Six	Seater	Dining	Set	in	Antique	Cherry	Colour",
                    "Assembly	by	Skilled	Carpenters",
                    "Made	from	Teak	wood"
            ],
            img:
                    "https://hometown.gumlet.io/media/product/74/8673/48339/1.jpg?mode=fill&w=273&h=273&dpr=1.0",
            ingredients:	[
                    {	ingName:	"Dining	Table",	qty:	1	},
                    {	ingName:	"Chair",	qty:	4	},
                    {	ingName:	"Bench",	qty:	1	}
            ],
            title:	"Six	Seater	Dining	Set"
    },
    {
            prodCode:	"DS4S177",
            quantity:1,
            category:	"Dining",
            desc:	[
                    "Mild	Steel	Four	Seater	Dining	Set	in	Black	Colour",
                    "Knock-down	construction	for	easy	transportation"
            ],
            img:
                    "https://hometown.gumlet.io/media/product/89/3163/57821/1.jpg?mode=fill&w=273&h=273&dpr=1.0",
            ingredients:	[
                    {	ingName:	"Dining	Table",	qty:	1	},
                    {	ingName:	"Chair",	qty:	4	}
            ],
            title:	"Mild	Steel	Dining	Set"
    },
    {
            prodCode:	"DC2S705",
            quantity:1,
            category:	"Dining",
            desc:	[
                    "Solid	Wood	Dining	Chair	Set	of	Two	in	Dark	Walnut	Colour",
                    "Beautiful	design	carved	on	dining	chair",
                    "Dining	chair	seat	upholstered	in	dark	brown	Fabric"
                ],
				img:
						"https://hometown.gumlet.io/media/product/61/9353/47156/1.jpg?mode=fill&w=273&h=273&dpr=1.0",
				ingredients:	[{	ingName:	"Chair",	qty:	2	}],
				title:	"Dining	Chair	Set"
		},
		{
				prodCode:	"BN1S388",
                                quantity:1,
				category:	"Dining",
				desc:	[
						"Solid	Wood	Dining	Bench	in	Dark	Walnut	Colour",
						"Comfortable	bench	for	a	relaxed	dinner"
				],
				img:
						"https://hometown.gumlet.io/media/product/81/9863/59641/1.jpg?mode=fill&w=273&h=273&dpr=1.0",
				ingredients:	[{	ingName:	"Bench",	qty:	1	}],
				title:	"Dining	Bench"
		},
		{
				prodCode:	"SF2S532",
                                quantity:1,
				category:	"Drawing",
				desc:	[
						"Characteristic	Rising	Track	Arm	Rest	Design",
						"Premium	High	Gloss	Leatherette	Upholstery",
						"Independent	Headrest	And	Lumber	Support"
				],
				img:
						"https://hometown.gumlet.io/media/product/53/1253/12483/1.jpg?mode=fill&w=273&h=273&dpr=1.0",
				ingredients:	[{	ingName:	"Sofa",	qty:	1	}],
				title:	"Two	Seater	Sofa"
		},
		{
				prodCode:	"SF2S206",
                                quantity:1,
				category:	"Drawing",
				desc:	["Two	Seater	Sofa	in	Blue	Colour",	"Assembly	by	Skilled	Carpenters"],
				img:
						"https://hometown.gumlet.io/media/product/18/2073/89701/1.jpg?mode=fill&w=273&h=273&dpr=1.0",
                        ingredients:	[{	ingName:	"Sofa",	qty:	1	}],
				title:	"Two	Seater	Sofa"
		},
		{
				prodCode:	"SFBD311",
                                quantity:1,
				category:	"Drawing",
				desc:	[
						"Sofa	Cum	bed	in	Brown	Colour",
						"Ply-wood	construction	with	hand	polished	finish",
						"Removable	fabric	cover	on	best	quality	foam	mattress",
						"Throw	cushions	and	bolsters	come	with	the	product"
				],
				img:
						"https://hometown.gumlet.io/media/product/30/3253/95505/1.jpg?mode=fill&w=273&h=273&dpr=1.0",
				ingredients:	[{	ingName:"Sofa",	qty:1},	{ingName:"Cushions",qty:2	}],
				title:	"Sofa	cum	Bed"
		},
		{
				prodCode:	"BDQS381",
                                quantity:1,
				category:	"Bedroom",
                desc:	[
                    "Wood	Box	Storage	King	Size	Bed	in	Wenge	Colour	",
                    "Box	Storage	included	for	Maximum	space	utilization",
                    "Mattress	is	included"
            ],
            img:
                    "https://hometown.gumlet.io/media/product/01/5763/52147/1.jpg?mode=fill&w=273&h=273&dpr=1.0",
            ingredients:	[{	ingName:"Bed",	qty:1},	{ingName:"Mattress",	qty:	2	}],
            title:	"King	size	Bed"
    },
    {
            prodCode:	"BDQS229",
            quantity:1,
            category:	"Bedroom",
            desc:	[
                    "Wood	Hydraulic	Storage	Queen	Size	Bed",
                    "Half	hydraulic	storage",
                    "Superior	E2	grade	MDF	used	with	melamine	finish"
            ],
            img:
                    "https://hometown.gumlet.io/media/product/52/0153/13815/1.jpg?mode=fill&w=273&h=273&dpr=1.0",
            ingredients:	[{	ingName:	"Bed",	qty:	1	}],
            title:	"Queen	size	Bed"
    },
    {
            prodCode:	"ST1T425",
            quantity:1,
            category:	"Study",
            desc:	[
                    "Wood	Study	Table	in	Walnut	Colour",
                    "Assembly	by	Skilled	Carpenters",
                    "Built	from	High	Quality	Wood"
            ],
            img:
                "https://hometown.gumlet.io/media/product/12/9153/90938/1.jpg?mode=fill&w=273&h=273&dpr=1.0",
            ingredients:	[{	ingName:	"Study	Table",	qty:	1	}],
            title:	"Study	Table"
    },
    {
            prodCode:	"ST1T588",
            quantity:1,
            category:	"Study",
            desc:	[
                    "	Wood	Study	Table	in	Highgloss	White	&	Blue	Colour",
                    "Study	table	comes	with	bookshelf	on	top,	5	drawers	&	1	open	shelf",
                    "Superior	quality	MDF	with	stain	resistant	melamine	finish"
            ],
            img:
                    "https://hometown.gumlet.io/media/product/26/4673/10215/1.jpg?mode=fill&w=273&h=273&dpr=1.0",
            ingredients:	[{	ingName:	"Study	Table",	qty:	1	}],
            title:	"Study	Table"
        }
   ],
    optionSel:"",
    cart:[],
    user:{email:"user@user.com",password:"user123",role:"user"},
    admin:{email:"admin@admin.com" ,password:"admin123",role:"admin"}
    
    
}

handleAdd=(code)=>{
        let s1={...this.state}
     let incart=s1.cart.find((p)=>{
        return p.prodCode==code
     })
     console.log("cart", incart.ingredients)
     let instore=s1.copyStore.find((p)=>{
         return p.prodCode==code
     })
     console.log("stire", instore.ingredients)
     incart.ingredients[0].qty+=instore.ingredients[0].qty
     if( incart.ingredients[1]?.qty){
        incart.ingredients[1].qty+=instore.ingredients[1].qty
     }
      if( incart.ingredients[2]?.qty){
        incart.ingredients[2].qty+=instore.ingredients[2].qty
     }
     
     incart.quantity++
     this.setState(s1)
}

handleRemove=(code)=>{
       let s1={...this.state}
     let incart=s1.cart.find((p)=>{
        return p.prodCode==code
     })
     console.log("cart", incart.ingredients)
     let instore=s1.copyStore.find((p)=>{
         return p.prodCode==code
     })
     console.log("stire", instore.ingredients)
     incart.ingredients[0].qty-=instore.ingredients[0].qty
     if( incart.ingredients[1]?.qty){
        incart.ingredients[1].qty-=instore.ingredients[1].qty
     }
      if( incart.ingredients[2]?.qty){
        incart.ingredients[2].qty-=instore.ingredients[2].qty
     }
     if(incart.quantity<=1){
        let index=s1.cart.findIndex((p)=>{
                return p.prodCode==code
        })
        s1.cart.splice(index,1)
     }
     else{
 incart.quantity--;
     }
    
     this.setState(s1)
}

handleSubmitList=(list,index="")=>{
        console.log(list)
        const {store}=this.state
        let lists1=[...store];
        console.log(index)
        index!="" ||index==0?(lists1[+index]=list):lists1.push(list);
       
        this.setState({store:lists1})
      }

      handledelete=(prodCode)=>{
let s1={...this.state}
        let {store}=this.state
        let index=store.findIndex((p)=>{
            return p.prodCode==prodCode
        })
        s1.store.splice(index,1)
        let cat=s1.store[+index]
        
        this.setState(s1)
       
       
    }

  render() {
    let {store,cart,user,admin}=this.state
    return (
      <div>
<Navbar/>
        <Switch>
        <Route path="/products/:category/:prodCode" render={(props)=><Product {...props} store={store} cart={cart} 
        delete={this.handledelete}/>}/>
        <Route path="/products/:category" render={(props)=><Store2 {...props} store={store} cart={cart} />}/>
        <Route path="/products" render={(props)=><Store {...props} store={store}  />}/>
        <Route path="/cart" render={(props)=><Cart {...props} cart={cart} add={this.handleAdd} remove={this.handleRemove}/>}/>
        <Route path="/product/:code/edit" render={(props)=>(
                <AddProduct {...props} store={store} onSubmit={this.handleSubmitList}/>
            )}/>
      <Route path="/add" render={(props)=>(
                <AddProduct {...props} onSubmit={this.handleSubmitList}/>
            )}/>
        <Route path="/sign-in" render={(props)=><Login {...props} user={user} admin={admin}  />}/>
        <Route path="/sign-out" component={Signout}/>
        </Switch>
      </div>
    )
  }
}
