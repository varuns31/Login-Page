const express = require('express')
const app = express()

app.get('/',(req,res)=>{
  res.render('index.ejs',{ status: 'Varun'})
})
app.get('/login',(req,res)=>{
  res.render('login.ejs',{ status: 'Varun'})
})
app.get('/register',(req,res)=>{
  res.render('register.ejs',{ status: 'Varun'})
})
app.post('/register',(req,res)=>{
  
})

app.listen(3000)