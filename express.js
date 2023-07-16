 const express = require('express');
 const app = express()
 const mongoose = require('mongoose');
 const router=require("./route");
 const env=require("dotenv");
 const postRoute=require("./post");
 env.config();


 app.use(express.json());
 app.use("/user",router);
 app.use("/authoriseduser",postRoute);

 mongoose.set('strictQuery', true);
 mongoose.connect(process.env.DB_connection)
    // if(err)throw err
    // console.log("connection created")

    .then(()=>{
        console.log('connection created')
    })
    .catch((err)=>{
        console.log( `there will be some error ${err} `)
    })

 
 app.listen(4000)





// create API
//  app.get("/",(req,res)=>{
//     res.send("Hello World...!")
//  })

// app.post("/",(req,res)=>{
//         res.send("This is post method")
//      })


 
 