/*let initialState={
    apple:20
}*/

//action"type="SELL"
//action type="BUY"
/*const reducer=(state=initialState,action)=>{
    console.log("In reducer:State",state,action)
    state=initialState
    if(action.type==="SELL")  return {apple:state.apple-1}
    else if(action.type==="BUY") return {apple:state.apple + action.payload.quantity}
   // console.log(state)
    return state
}*/

/*const initialState={
    stocks:[
        {name:"Apple",quantity:1},
        {name:"Banana",quantity:2},
        {name:"Orange",quantity:3},
       
    ],
    //numOfOrders:0,
  //totalOrderQty:0
  orders:[],
  purchase:[]
}

const reducer=(state=initialState,action)=>{
    console.log(action.type)
    if(action.type==="SELL"){
        let stocks=state.stocks
      let stocks1=  stocks.map((item)=>{
        return item.name===action.payload.name?{...item,quantity:item.quantity-1}:item
      })
      
      let stocks2=stocks1.filter(st=>st.quantity>=0)
      let orders1=[...state.orders,action.payload]
     return {...state,
        stocks:stocks2,
        //numOfOrders:state.numOfOrders+1,totalOrderQty:state.totalOrderQty+1
        orders:orders1
    }
      
    }
    else if(action.type==="BUY"){
        const stocks=state.stocks;
        let stocks1;
     let st=   stocks.find((s)=>s.name===action.payload.name);
     console.log(st)
        if(st){
             stocks1=stocks.map((item)=>item.name===action.payload.name?{...item,quantity:item.quantity+ action.payload.quantity}:item)
      console.log(st)
            }
        else{
             stocks1=[...stocks,{...action.payload}]
        }
        console.log(stocks1)
        let purchase1=[...state.purchase,action.payload]
        return {...state,stocks:stocks1,purchase:purchase1}
    }
    return state
}*/

/*const initialState={
    fruits:["Apple","Banana","Orange","Guava"],
    stocks:[],
    orders:[],
    purchases:[]
}

const reducer=(state=initialState,action)=>{
    console.log(state,action)
    if(action.type==="BUY") return buyReducer(state,action)
    else if(action.type=="SELL") return sellReducer(state,action);
    return state
}

const sellReducer=(state,action)=>{
    //update stocks and remove if quantity is 0

    const {stocks,orders}=state
    let st=stocks.find(s=>s.name===action.payload.name);
    if(st){
        let stocks1=stocks.map(s=>s.name==action.payload.name?{...s,quantity:s.quantity-action.payload.quantity}:s)
let stocks2=stocks1.filter((p)=>{
    return p.quantity>0
})
let orders1=[...orders,action.payload]
return {...state,stocks:stocks2,orders:orders1}
    }
    return state

}

const buyReducer=(state,action)=>{
    const {stocks,purchases}=state
  let st=stocks.find(s=>s.name===action.payload.name);
  let stocks1;
  if(st){
  stocks1=   stocks.map(s=>s.name===action.payload.name?{...s,quantity:s.quantity+action.payload.quantity}:s)
  }
else{
 stocks1=[...stocks,action.payload]
}
let purchases1=[...purchases,action.payload]
return {...state,stocks:stocks1,purchases:purchases1}
}*/

/*const initialState={
    player:[
        {name:"Jack",score:12},
        {name:"Steve",score:34},
        {name:"Maratha",score:22},
        {name:"BOb",score:19},

    ]
}
const reducer=(state=initialState,action)=>{
    console.log(state,action)
  const  {player}=state
  let player2=[...player]
    if(action.type==="SCORE") {
        let stocks1=  player2.map((item)=>{
            return item.name===action.payload.name?{...item,score:item.score+1}:item
          })
         return {...state,
            player:stocks1}
    }
    
    return state
}*/

/*const initialState={
    product:[
        {name:"Coca Cola",code:"C332",price:20,quantity:10},
        {name:"5Star",code:"C323",price:5,quantity:4},
        {name:"Maggi",code:"C336",price:15,quantity:10},
        {name:"Pepsi",code:"C389",price:20,quantity:18},
        {name:"Dairy Milk",code:"C124",price:10,quantity:13},
        {name:"Mirinda",code:"C987",price:25,quantity:8},
        {name:"Kitkat",code:"C456",price:10,quantity:7},
        {name:"Red Bull",code:"C777",price:90,quantity:3},


      
    ]
}

const reducer=(state=initialState,action)=>{
    console.log(state,action)
    const  {product}=state
    let product2=[...product]
    
      if(action.type==="INCREASE") {
          let stocks1=  product2.map((item)=>{
              return item.name===action.payload.name?{...item,quantity:item.quantity+1}:item
            })
           return {...state,
              product:stocks1}
      }
      else if(action.type=="DECREASE"){
        let stocks1=  product2.map((item)=>{
            return item.name===action.payload.name?{...item,quantity:item.quantity-1}:item
          })
         return {...state,
            product:stocks1}
      }
    return state
}*/

/*const initialState={
    todoList:[]
}

const reducer=(state=initialState,action)=>{
    console.log(state,action)
    let {todoList}=state
    if(action.type=="ADDTASK"){
        let todo1=[...todoList,action.payload]
        return {...state,todoList:todo1}
    }
    else if(action.type==="DELETETASK"){
        let todo=[...todoList]
       
        todo.splice(+action.payload.index,1)
        return {...state,todoList:todo}
    }
    return state
}*/

const initialState={
    products:[
        {name:"iPad 4 Mini" ,price:500.01,quantity:2},
        {name:"H&M t-shirt white" ,price:10.99,quantity:10},
        {name:"Charli Sucker-CD" ,price:19.99,quantity:5},
    ],
    cart:[]
}
const reducer=(state=initialState,action)=>{
    console.log(state,action)
    let {products,cart}=state
    if(action.type=="ADDTOCART" || action.type=="INCREASEQUANTITY"){
let products1=[...products]
let cart1=[...cart];

let prod=products1.find((p)=>{
    return p.name==action.payload.name
})
let item;
 item={name:action.payload.name,price:prod.price,quantity:1}
let itemInCart=cart1.find((p)=>{
    return p.name==action.payload.name
})
let modifycart=[...cart1]
if(itemInCart){
     modifycart=cart1.map((item)=>{
        return item.name===action.payload.name?{...item,quantity:item.quantity+1}:item
    })
    //return {...state,cart:cart1,products:productmodify}
}
else{
    modifycart.push(item)
}

let productmodify=products1.map((item)=>{
    return item.name===action.payload.name?{...item,quantity:item.quantity-1}:item
})
return {...state,cart:modifycart,products:productmodify}
    }

else if(action.type=="DECREASEQUANTITY"){
    let products1=[...products]
let cart1=[...cart];


let itemInCart=cart1.find((p)=>{
    return p.name==action.payload.name
})
let modifycart=[...cart1]

     modifycart=cart1.map((item)=>{
        return item.name===action.payload.name?{...item,quantity:item.quantity-1}:item
    })
    //return {...state,cart:cart1,products:productmodify}



let productmodify=products1.map((item)=>{
    return item.name===action.payload.name?{...item,quantity:item.quantity+1}:item
})
return {...state,cart:modifycart,products:productmodify}
}

    return state
}

export default reducer