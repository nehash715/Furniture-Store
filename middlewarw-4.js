let express=require("express")
let app=express();
app.use(express.json())
app.use(function(req,res,next){
    res.header("Access-Control-Allow-Origin","*");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin,X-Requested-With,Content-Type,Accept"
    );
    res.header("Access-Control-Allow-Credentials",true);
    next();
})
app.use(sayHello)
let port=2410;
app.listen(port,()=>console.log(`Node app listtening on port ${port}`));

function sayHello(req,res,next){
console.log("Hello New Requset Received")
next()
}
app.get("/products",function(req,res){
    console.log("in the rote :GET /products")
    res.send({route:"/products"})
})
app.get("/orders",function(req,res){
    console.log("in the rote :GET /orders")
    res.send({route:"/orders"})
})
app.post("/orders",function(req,res){
    console.log("in the rote :POST /orders")
    res.send({route:"/orders",data:req.body})
})
