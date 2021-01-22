import Joi from '@hapi/joi';


export const registerValidation = (data)=>{

const schema = Joi.object({
    name: Joi.string().required().min(6).max(255),
    email: Joi.string().required().min(6).max(255).email(),
    password: Joi.string().required().min(6).max(255),
    passwordCheck:Joi.string().required().min(6).max(255)

});

return schema.validate(data);



};


export const signInValidation = (data)=>{

    const schema = Joi.object({
        email: Joi.string().required().min(6).max(255).email(),
        password: Joi.string().required().min(6).max(255),
    
    
    });
    
    return schema.validate(data);
    
    
    
    };