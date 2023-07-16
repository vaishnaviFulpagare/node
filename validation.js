const joi =require("joi");
const { schema } = require("./module");

const registerValidation = (data)=>{
    const Schema = joi.object({
        name: joi.string().required().min(2).max(7),
        email:joi.string().required().email(),
        mobile:joi.number().integer().required().min(1000000000).max(9999999999),
        password:joi.string().required().min(5).max(8)
    })
    return Schema.validate(data);
}
    const loginvalidation =(data)=>{
        const Schema = joi.object({
            email:joi.string().required().email(),
            password:joi.string().required().min(5).max(8)
        })
    return Schema.validate(data);
    }     


module.exports.registerValidation = registerValidation;
module.exports.loginvalidation=loginvalidation;



