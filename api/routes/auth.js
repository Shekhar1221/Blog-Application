const router=require('express').Router();
const User=require('../models/User')
const bcrypt=require('bcrypt');

// REGISTER

router.post('/register',async(req,res)=>{
  const salt=await bcrypt.genSalt(10);
  const hashedPass=await bcrypt.hash(req.body.password,salt)
    try{
        const newUser=new User({
            username:req.body.username,
            email:req.body.email,
            password:hashedPass
        })
        const user=await newUser.save()
        res.status(200).json(user)
    }catch(err){   
         res.status(500).json(err)
    }
})

// LOGIN
router.post('/login',async(req,res)=>{
   try{
       const user=await User.findOne({email:req.body.username})
       const {password,...others}=user._doc
       console.log(password,user)
       if(!user){
        res.status(400).json('wrong credentials');
       }else{

       const validated=await bcrypt.compare(req.body.password,user.password);

       if(!validated){
        res.status(400).json({msg:'wrong credentials'});
       }else{
       res.status(200).json(others)
       }
    }

   }catch(err){
    res.status(500).json(err)
   }
})

module.exports=router