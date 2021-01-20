const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Appointment = new Schema({
    patientId: {
        type: String,
    },
    specialty: {
        type: String,
    },
    date: {
        type: String,
    },
    reason: {
        type: String,
    },
    creationDate: {
        type: String,
    }
}, {
    timestamps: true,
    collection: 'appointments',
});
module.exports = mongoose.model('Appointment', Appointment);