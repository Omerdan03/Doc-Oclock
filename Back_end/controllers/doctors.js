const Doctor = require('../models/Doctor');
const lodash = require('lodash')
const { doctorRegisterValidation, doctorLogInValidation } = require('../validationPatient')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

// Get current doctor profile
exports.doctor = async(req, res) => {
    try {
        const doctorProfile = await Doctor.find({ email: req.params.id });
        res.status(200).json({ success: doctorProfile });
    } catch (e) {
        res.status(500).json({ error: e });
    }
};

//update doctor info
exports.updateDoctor = async(req, res) => {
    let id = req.params.id
    const salt = await bcrypt.genSalt(10)
    const hashPassword = await bcrypt.hash(req.body.password, salt)
    const emailExist = await Doctor.findOne({ email: req.body.email })
    if (emailExist) {
        return res.status(400).send('Email already exists')
    }
    let update = lodash.pick(req.body, ["fullName", "birthDay", "phone", "email", "gender", "location", "maritalStatus", "smoking", "alcoholAbuse", "drugAbuse", "disabilities", "education"]);
    update = lodash.pickBy(update, lodash.identity);
    update = lodash.merge(update, {
        password: hashPassword,
        role: "basic"
    });
    Doctor.findByIdAndUpdate(id, { $set: update }, { new: true }, (error, doctorInfo) => {
        if (error) res.status(400).send(err)
        else res.send('doctor updated')
    })
}

exports.createDoctor = async(req, res) => {
    const { error } = doctorRegisterValidation(req.body)
    if (error) {
        return res.status(400).send(error.details[0].message)
    }
    //check if the doctor already exist in the db
    const emailExist = await Doctor.findOne({ email: req.body.email })
    if (emailExist) {
        return res.status(400).send('Email already exists')
    }
    //hash passwords 
    const salt = await bcrypt.genSalt(10)
    const hashPassword = await bcrypt.hash(req.body.password, salt)
        //creat doctor
    const doctor = new Doctor({
        fullName: req.body.fullName,
        category: req.body.category,
        role: req.body.role,
        specialties: req.body.specialties,
        email: req.body.email,
        password: hashPassword,
        phone: req.body.phone,
    })
    try {
        const savedDoctor = await doctor.save()
        res.send({
            doctor_id: doctor._id,
            role: doctor.role
        })
    } catch (err) {
        res.status(400).send(err)
    }
}

exports.logInDoctor = async(req, res) => {
    const { error } = doctorLogInValidation(req.body)
    if (error) {
        return res.status(400).send(error.details[0].message)
    }
    const doctor = await Doctor.findOne({ email: req.body.email })
    if (!doctor) {
        return res.status(400).send('Email does not exists')
    }
    const validPassword = await bcrypt.compare(req.body.password, doctor.password)
    if (!validPassword) {
        return res.status(400).send('Invalid password')
    }
    //creat token
    const token = jwt.sign({ _id: doctor._id }, process.env.SECRET)
    res.header('auth-token', token).send({ token: token, role: doctor.role })
}