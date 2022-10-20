const express = require('express')
const app = express()
const bcrypt = require('bcrypt')
const users=[]

app.use(express.urlencoded({extended:false}))

app.get('/',(req,res)=>{
  res.render('index.ejs',{ status: 'Varun'})
})
app.get('/login',(req,res)=>{
  res.render('login.ejs',{ status: 'Varun'})
})
app.post('/login',(req,res)=>{
  
})
app.get('/register',(req,res)=>{
  res.render('register.ejs',{ status: 'Varun'})
})
app.post('/register',async(req,res)=>{
  try{
    const hashedpassword=await bcrypt.hash(req.body.password,10)
    users.push(
      {
        id:Date().now().toString(),
        name:req.body.name,
        email:req.body.email,
        password:hashedpassword
      })
      res.redirect('/login')
  }catch{
    
  }
})

app.listen(3000)