const Appointment = require('../models/Appointment');
const lodash = require('lodash')
const { registerValidation } = require('../validationPatient')


// Get current appointment profile
exports.appointment = async (req, res) => {
    try {
        const appointment = await Appointment.find({ email: req.params.id });
        res.status(200).json({ success: profile });
    } catch (e) {
        res.status(500).json({ error: e });
    }
};
//update appointment info
exports.updateAppointment = async (req, res) => {
    let id = req.params.id
    let update = lodash.pick(req.body, ["doctor_id", "patient_id", "realTimeStart", "dateTimeAppointment", "appointmentCreationDay", "duration", "firstVisit", "location", "symptoms", "status", "paymentDateTime", "doctorSummary"]);
    update = lodash.pickBy(update, lodash.identity);

    Appointment.findByIdAndUpdate(id, { $set: update }, { new: true }, (error, appointmentObj) => {
        if (error) res.status(400).send(err)
        else res.send('appointment updated')
    })
}

exports.createAppointment = async (req, res) => {
    // const { error } = registerValidation(req.body)
    // if (error) {
    //     return res.status(400).send(error.details[0].message)
    // }
    //creat appointment
    const appointment = new Appointment({
        doctor_id: req.body.doctor_id,
        patient_id: req.body.patient_id,
        dateTimeSchedule: req.body.dateTimeSchedule,
        duration: req.body.duration,
        firstVisit: req.body.firstVisit,
        location: req.body.location,
        symptoms: req.body.symptoms,
        status: req.body.status,
        paymentDateTime: req.body.paymentDateTime,
        doctorSummary: req.body.doctorSummary
    })
    try {
        const savedAppointment = await appointment.save()
        res.send({
            appointment_id: appointment._id,
        })
    } catch (err) {
        res.status(400).send(err)
    }
}
