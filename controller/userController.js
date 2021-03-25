
const LogModel = require('../models/FoodLogModel');
const UserModel = require('../models/UserModel');

module.exports.getUserProfile = async (req, res) => {
    try {
        // get current user
        const user = await UserModel.find({ _id: req.user.id });
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

