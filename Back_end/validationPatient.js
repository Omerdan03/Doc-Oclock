//VALIDATION
const Joi = require('@hapi/joi');
//register validation
const doctorRegisterValidation = (data) => {
    const schema = {
        fullName: Joi.string().min(2).required(),
        category: Joi.string().min(2).required(),
        role: Joi.string().min(2).required(),
        specialties: Joi.string().min(2).required(),
        email: Joi.string().min(6).required().email(),
        password: Joi.string().min(6).required(),
        phone: Joi.string().min(2).required(),
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

module.exports.doctorRegisterValidation = doctorRegisterValidation
module.exports.patientLogInValidation = patientLogInValidation