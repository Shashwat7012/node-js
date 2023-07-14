//jshint esversion:6
const express = require("express"); 

const app = express();
//2. 
//create this to reuest and get response.

app.get("/",(req,res)=>{
    // get has 2 parameters
    //2.1 
    // where to send data
    //2.2
    //callback function to request and save response
// console.log(req);
//3.
//then send response to the local host and i.e.."/"(forward slash)
console.log(req);
res.send("<h1>Hii Shashwat</h1>");
})
//4
app.get("/contact",(req,res)=>{
    res.send("Contect me at : pandeyshashwatptu@gmail.com");
})

app.get("/github",(req,res)=>{
    res.send("github id = shashwat7012.......");

})
app.get("/hobbies",(req,res)=>{
    res.send("<ul><li>Cricket</li><li>Code</li></ul>");
})
app.get("/Programming",(req,res)=>{
res.send("<ul><li>Node Js</li><li>Express Js</li></ul>")
})
app.listen(3000,function(){
    console.log("Server Started on port 3000")
});


//1.
// upto 3000 the server is running but nothing happend on cmd 
// but when we add a callback function an console log then we can see that the 
// msg is appearing and that means our server is running

// but one more problem with that when we run on browser it displayed that ("Cannot GET /")
//bcz server gets nothing back.

//4.1
//Lets understand first parameter of response.
// first Parameter is a "Route" :- That we are going to response to.
//If someone tried to go to our home page.
// "/" :- is home route

//4.2
//If someone tried to go to our contact page.
// we can also indicate other routes for example:-
// app.get("/contact",callback)
