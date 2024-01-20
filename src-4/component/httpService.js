import axios from "axios";
//import auth from "./authService.js"
const baseURL="http://localhost:2410"
//const baseURL="https://sportserer.onrender.com"
//const baseURL="https://studentserver-nb7o.onrender.com"
//const baseURL="https://axiosserver.onrender.com"
//const baseURL="https://testserver-lc5z.onrender.com"
//const baseURL="https://postman-server-17d5.onrender.com"
//const baseURL="https://postman-server-17d5.onrender.com"
function get(url){
   
    //return axios.get(baseURL+url,)
    return axios.get(baseURL+url)
   
    
}

function post(url,obj){
 
    console.log(url)
    return axios.post(baseURL+url,obj)
}
function put(url,obj){
   
    return axios.put(baseURL+url,obj)
}
function deleteApi(url){
     
    console.log(url)
    return axios.delete(baseURL+url)
}  




export default{
    get,
    post,
    deleteApi,
    put
}