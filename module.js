const { string } = require("joi");
const { default: mongoose } = require("mongoose");
const mangoose = require("mongoose");
const userSchema= new mongoose.Schema({
    name:{
        type : String,
        required: true
    },
    email:{
        type:String,
        required:true
    },
    mobile:{
        type:Number,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    Date:{
        type:Date,
        default: Date.now()
    }

})
module.exports = mangoose.model('userInfo',userSchema);