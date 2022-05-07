const express = require("express")
const app = express()
app.set("view engine","ejs")
//tell app to use view engine

//we dont set any route so it will return canNot get /
// now we will call root route by get METHODS
app.get("/",(req,res)=>{
    console.log("here")
    // res.sendStatus(500)
    //STATUS CODE ()
    // res.status(500).json({message : "error"})
    //if we want to give to download
    // res.download("server.js")
    // we want to render a file like html css
    // res.render("index")
    //this wont work because to render we have to install and create file in viiw engine(named ejs)
    //npm i ejs
    // res.render("index")
    //now it will return the index.ejs
    

    //now we want a client(index)  server(server.js) communication
    res.render("index",{text:"is from server"})
    //this will render the index from client

    //but there can be thousand of
    
})
app.listen(3000)