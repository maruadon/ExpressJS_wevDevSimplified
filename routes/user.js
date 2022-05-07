const express = require("express");
const router = express.Router();
// router.use(logger)//this is for using logger middlewire


router.get("/", (req, res) => {
  res.send("user list from routes folder");
})
router.get("/new",(req,res)=>{
  res.render("users/new",{firstName : "Test"})
})

router.post("/", (req, res) => {
  res.send("new user list from routes folder");
  console.log(req.body.firstName)
});

//++++++++++++++++++++++++++++++++++
//custom made middlewire 
//here we will create a custom middle wire that will print the path
// function logger(req,res,next){
//     console.log(req.originalUrl)
//     next()
// }

//++++++++++++++++++++++++++++++++
// here we will create a route with dynamic id by writting (:id)

// router.put("/:id",(req,res)=>{
//     res.send(`put user with ID ${req.params.id}`)
// })
// router.delete("/:id",(req,res)=>{
//     res.send(`delete user with ID ${req.params.id}`)
// })
// router.update("/:id",(req,res)=>{
//     res.send(`update user with ID ${req.params.id}`)
// })
//++++++++++++++++++++++++++++++++++++
// `same code of above can be written in short form`
// router
//   .route("/:id")
//   .get((req, res) => {
//       console.log(req.anyName)
//     res.send(`get user with ID ${req.params.id}`);
//   })
//   .put((req, res) => {
//     res.send(`put user with ID ${req.params.id}`);
//   })
//   .delete((req, res) => {
//     res.send(`delete user with ID ${req.params.id}`);
//   })
//=========================================================
//param is a middlewire  and a function that  run first . so we have to add next() to use put delete that return resul to the user
//now we will get some user with id
//so now we create an array with object
// const friends = [{name : "maruf"}, {name : "arafat"}]
// router.param("id", (req, res, next, id) => {
//   console.log(id);
//   req.anyName = friends[id]
//   //req.nayName has used in get method
//   next();
// })
//============================================================



// now to export the router
module.exports = router;
//now we can use router from server.js
