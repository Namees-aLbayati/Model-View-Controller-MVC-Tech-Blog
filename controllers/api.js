const router=require('express').Router();

  const {User,Comment,Posting}=require('../models')
  router.get('/', async (req, res) => {
    res.render('all');
  });
  

  router.get('/home',async(req,res)=>{
    res.render('home')
  })
  router.get('/try',async(req,res)=>{
    const a= await User.findAll({include:[{model:Posting},{model:Comment}]});
    res.json(a)
  })

router.post('/try',(req,res)=>{
  const a=User.create({
    username:"newuser",
    email:"newemail@email.com",
    password:"123456789"
  });
  console.log(a)
})
  
  module.exports=router;