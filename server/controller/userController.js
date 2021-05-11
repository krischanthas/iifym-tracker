
const LogModel = require('../models/FoodLogModel');
const UserModel = require('../models/UserModel');
module.exports.getUserProfile = async (req, res) => {
    try {
        // get current user
        const user = await UserModel.findOne({ _id: req.user.id });
        if (!user) return res.status(400).json({ message: 'No user found, please sign in.' });

        // fetch user's logs
        const logs = await LogModel.find({ userId: req.user._id }).sort({ createdAt: 1 });
        if (!logs) return res.status(400).json({ message: 'No logs found' });

        return res.status(200).json({
            profile: {
                user,
                logs
            }
        });

    } catch (err) {
        console.log(err);
        res.status(500).json({ message: err });
    }
}

// update an exisiting user's goals
module.exports.setUserGoals = async (req, res) => {
    try {
        const user = await UserModel.findOneAndUpdate({ _id: req.user.id }, { goals: { nutrition: { fat: req.body.fat, carbs: req.body.carbs, protein: req.body.protein } } }, { new: true });

        if (!user) return res.status(400).send('User goals update unsuccessful');
        await user.save();
        return res.status(201).json({ updatedUser: user });

    } catch (err) {
        console.log(err);
        res.status(500).json({ message: err });
    }
}