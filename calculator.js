const express = require('express')
const bodyParser = require('body-parser')

const app = express()
//body parser work with express
app.use(bodyParser.urlencoded({extended:true}))
//we can use it as a text, jSon, urlencoded.

app.get("/",(req,res)=>{
    res.sendFile(__dirname + "/index.html");
})
app.get("/bmicalculator",(req,res)=>{
    res.sendFile(__dirname + "/bmical.html");
})
//1
//1.1 So The Problem is that we are facing an error :-404 means 
// 404 :- We are not accepting anybody to post something to our routes.
// So here comes post to accept post and return a msg or anything to our route.

//2.
// How we can tap-in the pieces of form data that is 1 or 2.
// We will use an npm package called body-parser
//2.1
// body-parser is module that will allow us to pass the information that we get sent to post request
app.post("/",(req,res)=>{
    var num1= Number(req.body.num1);
    // body give us the text and then we convert it in number by "Number".
    console.log(req.body.num1);
    var num2 = Number(req.body.num2);
    // body give us the text and then we convert it in number by "Number".
    console.log(req.body.num2);
    var result = num1 + num2
    console.log(result)
    // console.log(req.body.num1)
    // console.log(req.body);
    res.send("Thanks for Posting and your result is " + result)
})
app.post("/bmicalculator",(req,res)=>{
    var w = parseFloat(req.body.w8)
    var h = parseFloat(req.body.h8)
    var bmi = w/(h*h)
    
    res.send("Thaks for using this application, Your BMI is " + bmi);

})

app.listen(3000,()=>{
    console.log("Server is running on 3000")
})

// This is WebApplication.
