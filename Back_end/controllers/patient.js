const Patient = require('../models/Patient');
const lodash = require('lodash')
const { patientRegisterValidation, patientLogInValidation } = require('../validationPatient')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

// Get current patient profile
exports.patient = async(req, res) => {
    try {
        const profile = await Patient.find({ email: req.params.id });
        res.status(200).json({ success: profile });
    } catch (e) {
        res.status(500).json({ error: e });
    }
};

//update patient info
exports.updatePatient = async(req, res) => {
    let id = req.params.id
    const salt = await bcrypt.genSalt(10)
    const hashPassword = await bcrypt.hash(req.body.password, salt)
    const emailExist = await Patient.findOne({ email: req.body.email })
    if (emailExist) {
        return res.status(400).send('Email already exists')
    }
    let update = lodash.pick(req.body, ["fullName", "birthDay", "phone", "email", "gender", "location", "maritalStatus", "smoking", "hypertension", "alcoholAbuse", "drugAbuse", "disabilities", "education"]);
    update = lodash.pickBy(update, lodash.identity);
    update = lodash.merge(update, {
        password: hashPassword,
        role: "basic"
    });
    Patient.findByIdAndUpdate(id, { $set: update }, { new: true }, (error, patientInfo) => {
        if (error) res.status(400).send(err)
        else res.send('patient updated')
    })
}

exports.createPatients = async(req, res) => {
    const { error } = patientRegisterValidation(req.body)
    if (error) {
        return res.status(400).send(error.details[0].message)
    }
    //check if the patient already exist in the db
    const emailExist = await Patient.findOne({ email: req.body.email })
    if (emailExist) {
        return res.status(400).send('Email already exists')
    }
    //hash passwords 
    const salt = await bcrypt.genSalt(10)
    const hashPassword = await bcrypt.hash(req.body.password, salt)
        //creat patient
    const patient = new Patient({
        fullName: req.body.fullName,
        phone: req.body.phone,
        email: req.body.email,
        birthDay: req.body.birthDay,
        gender: req.body.gender,
        location: req.body.location,
        maritalStatus: req.body.maritalStatus,
        password: hashPassword
    })
    try {
        const savedPatient = await patient.save()
        res.send({
            patient_id: patient._id,
            role: patient.role
        })
    } catch (err) {
        res.status(400).send(err)
    }
}
exports.logInPatients = async(req, res) => {
    const { error } = patientLogInValidation(req.body)
    if (error) {
        return res.status(400).send(error.details[0].message)
    }
    const patient = await Patient.findOne({ email: req.body.email })
    if (!patient) {
        return res.status(400).send('Email does not exists')
    }
    const validPassword = await bcrypt.compare(req.body.password, patient.password)
    if (!validPassword) {
        return res.status(400).send('Invalid password')
    }
    //creat token
    const token = jwt.sign({ _id: patient._id }, process.env.SECRET)
    res.header('auth-token', token).send({ token: token, role: patient.role })
}