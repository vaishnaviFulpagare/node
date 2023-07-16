const express = require('express').Router();
const route = require('express').Router();
const bcrypt = require("bcrypt");
const jwt=require("jsonwebtoken");


const userModule = require('./module');
const { registerValidation, loginvalidation } = require('./validation');

//register user
route.post('/register',async(req,res)=>{
    const {error}=registerValidation(req.body);
    if(error) return res.status(404).send(error.details[0].message);

    const slat = await bcrypt.genSalt(10)
    const hashpassword = await bcrypt.hash(req.body.password, slat);

    const emailExist = await userModule.findOne({email:req.body.email});
    if(emailExist) return res.status(404).send("Email is already exists")

    const newUser = new userModule({
       name :req.body.name,
       email :req.body.email,
       mobile: req.body.mobile,
       password:hashpassword 
    })

    try {
        const saveDate = await newUser.save();
        res.send(saveDate)
    } catch (error) {
        console.log(error);
    }
    
})
//login validation api
route.post('/login', async(req, res) =>{
    const {error} = loginvalidation(req.body)
    if (error) return res.status(404).send(error.details[0].message);
    
    //email validation
    const userExist = await userModule.findOne({email:req.body.email});
    if(!userExist) return res.status(404).send("Invalid email id")
 
    //login password validation
    const ispass = await bcrypt.compare(req.body.password, userExist.password);
    if (!ispass) return res.status(404).send("Invalid password")

    const token =jwt.sign({_id:userExist._id}, process.env.Token_secret)
    
    res.header("auth-token",token).send(token)
    
    res.send("Login successful")

})




// showdata
route.get("/showdata",async(req,res)=>{
    try {
        const showdata =await userModule.find() 
        res.send(showdata)//access hol data
    } catch (error) {
        console.log(error);
    }
})

//delete user
// route.delete("/delete",async(req,res)=>{
//     let id = req.query.id;
//     try {
//         const deletData = await userModule.findByIdAndDelete(id);
//         res.send("delete data succesfully")
//     } catch (error) {
//         console.log(error);
//     }
// })

// update data

// route.post("/update",async(req,res)=>{
//     let _id = req.body._id;
//     try {
//         const updateData = await userModule.findByIdAndUpdate(_id, req.body);
//         res.send(updateData)
//     } catch (error) {
//         console.log(error);
//     }
// })

//show one user
route.get("/showone",async(req,res)=>{
    const id= req.query.id
    try {
        const showone = await userModule.findById(id);
        res.send(showone);
    } catch (error) {
        console.log(error);
    }
})
module.exports = route;