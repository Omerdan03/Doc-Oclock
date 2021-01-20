//VALIDATION
const Joi = require('@hapi/joi');
//register validation
const patientRegisterValidation = (data) => {
    const schema = {
        fullName: Joi.string().min(5).required(),
        email: Joi.string().min(6).required().email(),
        password: Joi.string().min(6).required(),
        phone: Joi.string(),
        email: Joi.string(),
        birthDay: Joi.string(),
        gender: Joi.string(),
        location: Joi.string(),
        maritalStatus: Joi.string(),
    }
    return Joi.validate(data, schema)
}

//login validation
const patientLogInValidation = (data) => {
    const schema = {
        email: Joi.string().min(6).required().email(),
        password: Joi.string().min(6).required()
    }
    return Joi.validate(data, schema)
}

module.exports.patientRegisterValidation = patientRegisterValidation
module.exports.patientLogInValidation = patientLogInValidation