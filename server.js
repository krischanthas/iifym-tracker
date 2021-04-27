const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const jwt = require('express-jwt');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const passport = require('./middleware/passport');

// import routes
const authRoutes = require('./routes/authRoutes');
const foodLogRoutes = require('./routes/foodLogRoutes');
const userRoutes = require('./routes/userRoutes');
const exerciseRoutes = require('./routes/exerciseRoutes');

const { searchFood, searchFoodNutrients, searchBrandedFoodItem, } = require('./controller/nutritionixController');


dotenv.config();

// connect to db
mongoose.connect(process.env.DB_CONNECT, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false }
).then(() => console.log("Connected to MongoDB")).catch((error) => res.status(500).json({ message: error }));


app.use(express.json());
app.use(cors());
app.use(cookieParser());

// passport
app.use(session({ secret: process.env.SECRETORKEY, resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());


// routes
app.use('/api/auth', authRoutes);
app.use('/api/food', foodLogRoutes);
app.use('/api/user', userRoutes);
app.use('/api/exercise', exerciseRoutes);

// nutritionix api routes
app.use('/api/nutritionix/search', searchFood);
app.use('/api/nutritionix/nutrients', searchFoodNutrients);
app.use('/api/nutritionix/brand', searchBrandedFoodItem);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log('Server is running...'));