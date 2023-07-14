const fs = require("fs");
//fs.writeFile(file,data[,Options],callback)
// fs.writeFile("message.txt","Hello Node",(err)=>{
//     if(err) throw err;
//     console.log("File is saved now");
// })
const sh = require("fs");
sh.writeFile("message.txt","Hii Shashwat",(error)=>{
    if(error) throw error;
    console.log("Go AND check your file");

})

fs.readFile("./message.txt",'utf8',(err,file)=>{
    if(err) throw err;
    console.log(file);
})
// if no encoding is specifies than a raw buffer is returned as like in terminal
// to show output as a txt use utf 8;
    
    

