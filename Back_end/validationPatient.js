//VALIDATION
const Joi = require('@hapi/joi');
//register validation
const doctorRegisterValidation = (data) => {
    const schema = {
<<<<<<< HEAD:Back_end/validation.js
        fullName: Joi.string().min(2).required(),
        category: Joi.string().min(2).required(),
        role: Joi.string().min(2).required(),
        specialties: Joi.string().min(2).required(),
        email: Joi.string().min(6).required().email(),
        password: Joi.string().min(6).required(),
        phone: Joi.string().min(2).required(),
=======
        fullName: Joi.string().min(5).required(),
        email: Joi.string().min(6).required().email(),
        password: Joi.string().min(6).required(),
        phone: Joi.string(),
        email: Joi.string(),
        birthDay: Joi.string(),
        gender: Joi.string(),
        location: Joi.string(),
        maritalStatus: Joi.string(),
>>>>>>> bf06fcabbdb22bee451f600f462729a004c31f3c:Back_end/validationPatient.js
    }
    return Joi.validate(data, schema)
}

//login validation
const doctorLogInValidation = (data) => {
    const schema = {
        email: Joi.string().min(6).required().email(),
        password: Joi.string().min(6).required()
    }
    return Joi.validate(data, schema)
}

module.exports.doctorRegisterValidation = doctorRegisterValidation
module.exports.doctorLogInValidation = doctorLogInValidation