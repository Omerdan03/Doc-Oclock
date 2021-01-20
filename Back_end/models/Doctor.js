const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const userSchema = new Schema({
    fullName: {
        type: String,
    },
    category: {
        type: String,
    },
    role: {
        type: String,
        default: "doctor"
    },
    specialties: {
        type: String,
    },
    email: {
        type: String,
    },
    password: {
        type: String,
    },
    phone: {
        type: String,
    },
    doctorSchedule: [],
    patientAppointments: [],
}, {
    timestamps: true,
    collection: 'doctors',
});
module.exports = mongoose.model('Doctor', userSchema);