const FoodLogModel = require('../models/FoodLogModel');
const callNutritionix = require('../keys/nutritionix');

/**
 * Search the Nutritionix API for nutrition facts
 * @param {*} req body holds searched item to run against the nutritionix api 
 * @param {*} res returns the food item(s) found if successful or error message
 */
module.exports.searchFood = async (req, res) => {
    callNutritionix.post('/', {
        query: `${req.body.searchedFood}`,
        timezone: 'US/Eastern'
    }).then((results) => {
        return res.status(200).json({ data: results.data.foods });
    }).catch((err) => console.log(err));
}


/**
 * Takes incoming request and adds to food log
 * @param {*} req body holds incoming data
 * @param {*} res returns added food log item if successful or error message
 */
module.exports.addFood = async (req, res) => {
    const food = new FoodLogModel({
        itemName: req.body.name,
        description: req.body.description,
        servingSize: req.body.servingSize,
        calories: req.body.calories,
        protein: req.body.protein,
        fat: req.body.fat,
        carbs: req.body.carbs,
        userId: req.user._id
    });

    try {
        const foodToSave = await food.save();
        res.status(201).json({ data: foodToSave, message: 'food added!' });
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: err });
    }

};

/**
 * Update an exisiting food log entry
 * @param {*} req body holds incoming data that will be used to update an exisiting entry
 * @param {*} res use to return updated food log if successful or error message
 * 
 */
module.exports.updateFood = async (req, res) => {
    try {
        const foodLogId = req.params.foodLogId;
        const updatedFood = await FoodLogModel.findOneAndUpdate(
            { _id: foodLogId },
            {
                itemName: req.body.name,
                description: req.body.description,
                servingSize: req.body.servingSize,
                calories: req.body.calories,
                protein: req.body.protein,
                fat: req.body.fats,
                carbs: req.body.carbs,
                userId: req.user._id
            },
            { new: true }
        );

        return res.status(200).json({ data: updatedFood, message: 'food updated' });

    } catch (err) {
        console.error(err);
        res.status(500).send(err);
    }

};

/**
 * This function deletes food logs based on ID
 * @param {*} req param header holds the ID of the food log we want to delete
 * @param {*} res use to return successful status or error message
 * @returns 
 */
module.exports.deleteFood = async (req, res) => {
    try {
        const foodLogId = req.params.foodLogId;
        await FoodLogModel.deleteOne({ _id: foodLogId });
        return res.status(200).json({ message: 'Successfully deleted log' });
    } catch (err) {
        console.error(err);
        res.status(500).send(err);
    }
}