const User = require('../models/User');
const lodash = require('lodash')

const User = require('../model/User')
const { registerValidation, logInValidation } = require('../validation')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

// Get current user profile
exports.user = async (req, res) => {
    try {
        const profile = await User.find({ email: req.params.id });
        res.status(200).json({ success: profile });
    } catch (e) {
        res.status(500).json({ error: e });
    }
};
//update user info
exports.updateUser = async (req, res) => {
    let id = req.params.id
    const salt = await bcrypt.genSalt(10)
    const hashPassword = await bcrypt.hash(req.body.password, salt)
    const emailExist = await User.findOne({ email: req.body.email })
    if (emailExist) {
        return res.status(400).send('Email already exists')
    }
    let update = lodash.pick(req.body, ["firstName", "lastName", "phone", "email"]);
    update = lodash.pickBy(update, lodash.identity);
    update = lodash.merge(update, {
        password: hashPassword,
        role: "basic"
    });
    User.findByIdAndUpdate(id, { $set: update }, { new: true }, (error, userObj) => {
        if (error) res.status(400).send(err)
        else res.send('user updated')
    })
}


router.post('/register-patient', async (req, res) => {
    const { error } = registerValidation(req.body)
    if (error) {
        return res.status(400).send(error.details[0].message)
    }
    //check if the user already exist in the db
    const emailExist = await User.findOne({ email: req.body.email })
    if (emailExist) {
        return res.status(400).send('Email already exists')
    }
    //hash passwords 
    const salt = await bcrypt.genSalt(10)
    const hashPassword = await bcrypt.hash(req.body.password, salt)
    //creat user
    const user = new User({
        fullName: req.body.fullName,
        phone: req.body.phone,
        email: req.body.email,
        birthDay: req.body.birthDay,
        password: hashPassword,
        role: req.body.role
    })
    try {
        const savedUser = await user.save()
        res.send({
            user: user._id,
            name: user.name,
            lastName: user.lastName,
            role: user.role
        })
    } catch (err) {
        res.status(400).send(err)
    }
});