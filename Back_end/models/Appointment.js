const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Appointment = new Schema({
    patientId: {
        type: String,
    },
    specialty: {
        type: String,
    },
    requestedDate: {
        type: String,
    },
    reason: {
        type: String,
    }
}, {
    timestamps: true,
    collection: 'appointments',
});
module.exports = mongoose.model('Appointment', Appointment);