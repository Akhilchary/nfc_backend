const {Router}=require('express');

const User=require('../models/userModel');
const router=Router();
const md5=require('md5');
router.post('/signup',async(req,res)=>{
    try {
        const username=req.body.username;
        const password=md5(req.body.password);
        const newUser=new User({username,password});
        const savedUser=await newUser.save();
        res.status(200).json(savedUser);

    } catch (err) {
        res.status(500).json(err);
    }
});
router.post('/login',async(req,res)=>{
    try {
        const username=req.body.username
        const password=md5(req.body.password)
        User.findOne({username:username},(err,foundUser)=>{
            if(err){
                console.log(err);
            }else{
                if(foundUser){
                    if(foundUser.password===password){
                        res.send('found');
                    }else{
                        res.send("wrong password");
                    }
                }else{
                    res.send('not found');
                }
            }
        })
    } catch (err) {
        
    }
});

module.exports=router