const express = require("express")
const { json } = require("express/lib/response")
const app = express()
app.set("view engine","ejs")//tell app to use view engine

// app.use(logger)// ------here we will declare the created logger middlewire function. but if we want the middlewire just work on a specific method then we will add that in that mathod ex: app.get("/",logger,logger(req,res)=>{console.log("here")}) =====then logger will work only on get and print / twice

//++++++++++++++++++++++++++++++++++++++++++
//here we will create a expressmade middlewire that will directly show html css files from folder named public
// app.use(express.static("public"))
//now if we write localhost:3000/ it will show index.html
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//here will use a middlewire to access the body of a html
app.use(express.urlencoded({extended : true }))

//++++++++++++++++++++++++++++++++++++++++++
// query and json middlewire will be here
//++++++++++++++++++++++++++++++++++++++++++++

//we dont set any route so it will return canNot get /
// now we will call root route by get METHODS
// app.get("/",(req,res)=>{
//     console.log("here")
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
    // res.render("index",{text:"is from server"})
    //this will render the index from client
    //but there can be thousand of other methods
//})
// we will create 2 other get request
// app.get("/user",(req,res)=>{
//     res.send("user list")
// })

// app.get("/user/new",(req,res)=>{
//     res.send("new user list")
// })

//but will add these two router in router folder and export from there and use it in our server js app(.app)
//++++++++++++++++++++++++++++++++++++++++
//here we will create a custom middle wire that will print the path
// function logger(req,res,next){
//     console.log(req.originalUrl)
//     next()
// }

//now we will use /routes/user.js
const userRouter = require("./routes/user")
//to make "/user" as default path of user.js
app.use("/router",userRouter)
app.listen(3000)