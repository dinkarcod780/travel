var express = require('express');
var router = express.Router();

const userModel = require("./users")

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.post("/create", async (req,res)=>{

  const newUser = await userModel.create({
    username: req.body.username,
    email: req.body.email,
    number: req.body.number
  })
  
  // console.log(req.body)
  // res.send("done");
  res.redirect("/")
})

router.get("/getUsers", async (req,res)=>{
  const allUsers = await userModel.findOne(

  )
  res.send(allUsers)
  // res.render("/data")
})


router.get("/about",(req,res)=>{
  res.render("about")
  // res.redirect("/about")
})

router.get("/contacts",(req,res)=>{
  res.render("contacts")
  // res.redirect("/contacts")
})

router.get("/typography",(req,res)=>{
  res.render("typography")
  // res.redirect("/")
})

router.get("/home",(req,res)=>{
  res.render("index")
  // res.redirect("/")
})



module.exports = router;
