const LocalStrategy=require('passport-local').Strategy
const bycrypt=require('bcrypt')

function initialize(passport,getUserbyemail){
  const authenticateuser = (email,password,done)=>
  {
    const user=getUserbyemail(email)
    if(user==null)
    {
      return done(null,false,{message: 'No user with that email'})
    }
    try{
      if(await bycrypt.compare(password,user.password))
      {
        return done(null,user)
      }
      else
      {
        return done(null,false,{message:'Incorrect password entered'})
      }
      
    }catch (e){
      return done(e)
    }
    
  }
  
  passport.use(new LocalStrategy({username:'email'}),authenticateuser))
  passport.serializeUser((user,done)=>)
  passport.deserializeUser((id,done)=>)
                            
}
module.exports=initialize