//VALIDATION
const Joi = require('@hapi/joi');
//register validation
const registerValidation = (data) => {
    const schema = {
        firstName: Joi.string().min(2).required(),
        lastName: Joi.string().min(2).required(),
        email: Joi.string().min(6).required().email(),
        password: Joi.string().min(6).required(),
    }
    return Joi.validate(data, schema)
}

//login validation
const logInValidation = (data) => {
    const schema = {
        email: Joi.string().min(6).required().email(),
        password: Joi.string().min(6).required()
    }
    return Joi.validate(data, schema)
}

module.exports.registerValidation = registerValidation
module.exports.logInValidation = logInValidation