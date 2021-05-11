const UserModel = require('../models/UserModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { validateRegistration, validateLogin } = require('../validation');

module.exports.register = async (req, res) => {
    // validate incoming data
    const { error } = validateRegistration(req.body);
    if (error) return res.status(400).send(error.details[0].message)

    // check if user exists
    const emailExists = await UserModel.findOne({ email: req.body.email });
    if (emailExists) return res.status(400).send('Email already exists');

    // hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    // create new user
    const user = new UserModel({
        name: req.body.name,
        email: req.body.email,
        password: hashedPassword,
        birthDate: req.body.birthDate
    });

    try {
        const userToSave = await user.save();
        res.status(201).json({ 'data': userToSave });
    } catch (err) {
        res.status(400).send(err);
    }
};

module.exports.login = async (req, res) => {

    const { error } = validateLogin(req.body); // validate incoming data
    if (error) return res.status(400).send(error.details[0].message)

    const user = await UserModel.findOne({ email: req.body.email }); // check if email exists
    if (!user) return res.status(400).send('Email does not exists');

    // verify password
    const validPassword = await bcrypt.compare(req.body.password, user.password);
    if (!validPassword) return res.status(400).send('Invalid password');


    // create and assign token
    const expiresIn = '1d';
    const payload = {
        sub: user._id,
        iat: Date.now()
    }
    const signedToken = jwt.sign(payload, process.env.JWT_SECRET_TOKEN, { expiresIn: expiresIn });

    return res.header('Authorization', signedToken).cookie('Authorization', signedToken, { httpOnly: true }).json({
        credentials: {
            success: true,
            // token: "Bearer " + signedToken,
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
            }
        }
    });
};

module.exports.signOut = (req, res) => {
    return res.status(200).clearCookie('Authorization').json({ message: 'Successfully signed out' })
}