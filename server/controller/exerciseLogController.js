const Exercise = require('../models/ExerciseLogModel');

// get user's exercise logs
module.exports.fetchExerciseLogs = async (req, res) => {
    try {
        const exerciseLogs = await Exercise.find({ userId: req.user.id });
        if (!exerciseLogs) return res.status(400).json({ message: 'Exercise logs not found.' });
        return res.status(200).json({ exerciseLogs });
    } catch (err) {
        console.log(err);
        return res.status(500).json({ message: err });
    }
}

// add exercise log
module.exports.createExerciseLog = async (req, res) => {
    try {
        const newExerciseLog = new Exercise({
            userId: req.user._id,
            exerciseName: req.body.exerciseName,
            exerciseDescription: req.body.exerciseDescription,
            totalSets: req.body.totalSets,
            totalReps: req.body.totalReps,
            weight: req.body.weight
        });
        const newlyAddedExerciseLog = await newExerciseLog.save();
        if (!newlyAddedExerciseLog) return res.status(400).json({ message: "Unsuccessful exercise log creation." });

        return res.status(201).json({ message: "Successful exercise log creation.", newlyAddedExerciseLog })
    } catch (err) {
        console.log(err);
        return res.status(500).json({ message: err });
    }
}

// delete exercise log
module.exports.deleteExerciseLog = async (req, res) => {
    try {
        const exerciseLogId = req.params.exerciseLogId;
        await Exercise.findOneAndDelete({ _id: exerciseLogId });
        return res.status(200).json({ message: 'Successfully deleted exercise log' });
    } catch (err) {
        console.log(err);
        return res.status(500).json({ message: err });
    }
}


// add exercise to exisiting log
module.exports.updateExerciseLog = async (req, res) => {
    try {
        const exerciseLogId = req.params.exerciseLogId;

        const updatedExerciseLog = await Exercise.findOneAndUpdate({ _id: exerciseLogId }, {
            exerciseName: req.body.exerciseName,
            exerciseDescription: req.body.exerciseDescription,
            totalSets: req.body.totalSets,
            totalReps: req.body.totalReps,
            totalWeight: req.body.weight
        }, { new: true });

        if (!updatedExerciseLog) return res.status(400).send('Adding an exercise was unsuccessful');

        return res.status(200).json({ updatedExerciseLog });

    } catch (err) {
        console.log(err);
        return res.status(500).json({ message: err });
    }
}
