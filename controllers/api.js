const router=require('express').Router();

  const {User,Comment,Posting}=require('../models')
  router.get('/', async (req, res) => {
    res.render('all',dishes[1]);
  });
  router.get('/try',(req,res)=>{
    const a=User.findAll();
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