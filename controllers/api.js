const router=require('express').Router();

  const {User,Comment,Posting}=require('../models')
  router.get('/', async (req, res) => {
    res.render('home');
  });
  

  router.get('/dashboard',async(req,res)=>{
    res.render('dashboard')
  })

  router.get('/signin',async(req,res)=>{
    res.render('signin')
  })
  router.get('/signup',async(req,res)=>{
    res.render('signup')
  })

  router.post('/signup/user',async(req,res)=>{
    try{
       const userDB=await User.create(req.body);
    console.log(userDB);
    if(!userDB){
      res.json({message:"Invalid Email or password!!!Try Again"})
    }else{
      console.log(userDB)
      res.json({message:"Congrats!!!your Email has been created 🎉 🎉 🎉 🎉 🎉 "})

    }
    }catch(err){
      res.json({message:"it seems there is Error Please check your Email and password"})
    }
  });


  router.post('/signin/user',async(req,res)=>{
    const userData=await User.findOne({where:{email:req.body.email}});

    if(!userData){
      res.json({message:"Invalid Email "})
    }
    const userPass= userData.checkPass(req.body.password);
console.log(userPass==false)
if(userPass== true){
  res.redirect(200, 'http://localhost:3001/dashboard');

  // res.json({message:"true Password"}).redirect('/')

}else{
  res.redirect(404,'http://localhost:3001/dashboard')

}


  })

  
 

  
  module.exports=router;