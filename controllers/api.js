const router = require('express').Router();
const Auth=require('../utils/Auth')

const { User, Comment, Posting } = require('../models')
router.get('/',async (req, res) => {
  const data=await Posting.findAll({include:[{model:Comment,include:[{model:User}]},{model:User,include:[{model:Comment}]}]})
1 
// const postGet=await Posting.findAll({include:[{model:User,include:[{model:Comment}]},{model:Comment}]});
const Infos= data.map((info)=>info.get({plain:true}));
console.log(Infos)
  res.render('home',{Infos,logged_in:req.session.logged_in});
});





router.get('/dashboard',Auth,async (req, res) => {
  const userPost=await Posting.findAll({where:{user_id:req.session.user_id},include:[{model:User}]});


  const posts=userPost.map((post)=>  post.get({plain:true}))
  res.render('dashboard',{posts,logged_in:req.session.logged_in});
  
})

router.get('/signin', async (req, res) => {
  if(req.session.logged_in){
    res.redirect('/')
  }
  res.render('signin')
})
router.get('/signup', async (req, res) => {
  res.render('signup')
  
})

router.post('/signup/user', async (req, res) => {
  try {
    const userDB = await User.create(req.body);
    console.log(userDB);


    req.session.save(() => {

      req.session.user_id = userDB.id;
      req.session.logged_in = true;

      res.status(200).json({ message: "Your account created successfully" })
    })




  }
  catch (err) {
    res.json({ message: "it seems there is Error Please check your Email and password" })
    return
  }
});


router.post('/signin/user',async (req, res) => {
  const userData = await User.findOne({ where: { email: req.body.email } });
  if (userData==null) {
    res.redirect(404, 'signup')
    return
  }
  const userPass = userData.checkPass(req.body.password);
  if (userPass == true) {
    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;
      console.log(req.session.logged_in);
      res.redirect(204, 'dashboard');

    })


  } else {
    res.redirect(404, 'signup')

  }


});

router.post('/post/user', async (req, res) => {
  const userData = await Posting.create({
    description: req.body.description,

    title: req.body.title,
    user_id: req.session.user_id
  });

  if (userData) {
    res.status(202).json(userData)
  } else {
    res.status(404).json(userData)
  }

});



router.get('/get', async (req, res) => {
  const a = await User.findAll({
    include: [{
      model: Posting
    },{model:Comment}]
  })
  res.json(a)

}

)

router.post('/comment',async(req,res)=>{
  console.log(req.body,'recived comment');
  try{
  const userData=await Comment.create({
    comment:req.body.comment,
    post_id:req.body.post_id,
    user_id:req.session.user_id,
  });
  res.status(222);


}catch(err){
  res.status(404).json(err)
}
 

});

router.get('/post/:id',async(req,res)=>{
  const data=await Posting.findOne({where:{id:req.params.id},include:[{model:Comment,include:[{model:User}]},{model:User}]})
const post=data.get({plain:true})

res.render('onepost',{post,logged_in:req.session.logged_in})
})

router.get('/logout',(req,res)=>{

  
  // console.log(req.session.logged_in);
  if(req.session.logged_in){

    req.session.destroy(() => {
      console.log('destroyed')
res.redirect('/signin')  
 })

  }else{
    console.log('user already not logged in')
  }
})


router.get('*', async (req, res) => {
  res.render('home');
});


module.exports = router;