const User = require('../models/User');
// const lodash = require('lodash')

// Get current user profile
exports.user = async (req, res) => {
    try {
        const profile = await User.find({ email: req.params.id });
        res.status(200).json({ success: profile });
    } catch (e) {
        res.status(500).json({ error: e });
    }
};

exports.updateUser = async (req, res) => {
    // let id = req.params.id
    // const salt = await bcrypt.genSalt(10)
    // const hashPassword = await bcrypt.hash(req.body.password, salt)
    // const emailExist = await User.findOne({ email: req.body.email })
    // if (emailExist) {
    //     return res.status(400).send('Email already exists')
    // }
    // let update = lodash.pick(req.body, ["firstName", "lastName", "phone", "email"]);
    // update = lodash.pickBy(update, lodash.identity);
    // update = lodash.merge(update, {
    //     password: hashPassword,
    //     role: "basic"
    // });
    // User.findByIdAndUpdate(id, { $set: update }, { new: true }, (error, userObj) => {
    //     if (error) res.status(400).send(err)
    //     else res.send('user updated')
    // })
}