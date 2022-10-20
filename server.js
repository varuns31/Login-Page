const express = require('express')
const app = express()
const bcrypt = require('bcrypt')
const users = []
const passport=require('passport')
const flash=require('express-flash')
const session=require('express-session')

const intializepassport=require('./passport.js')
intializepassport(passport,email=>users.find(user=>user.email===email))

app.set('view-engine','ejs')
app.use(express.urlencoded({ extended: false }))
app.use(flash())
app.use(session({
  resave:false
  //saveUninitialized: false
}))
app.use(passport.initialize())
app.use(passport.session())

app.get('/', (req, res) => {
  res.render('index.ejs', { status: 'Varun', name: 'Shubham' })
})
app.get('/login', (req, res) => {
  res.render('login.ejs', { status: 'Varun' })
})
app.post('/login', (req, res) => {

})
app.get('/register', (req, res) => {
  res.render('register.ejs', { status: 'Varun' })
})
app.post('/register', async (req, res) => {
  try {
    const hashedpassword = await bcrypt.hash(req.body.password, 10)
    console.log("abc")
    users.push(
      {
        //id: Date().now().toString(),
        name: req.body.name,
        email: req.body.email,
        password: hashedpassword
      })
    res.redirect('/login')
  } catch {
    res.redirect('/register')
  }
  console.log(users)
})

app.listen(3000)