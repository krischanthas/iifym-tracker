import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { addFoodAction } from '../../redux/actions/foodActions';
import { Dialog } from '@material-ui/core';

const useStyles = makeStyles({
    container: {
        backgroundImage: "linear-gradient(to bottom right, #ff037dad, #780482ad)",
        padding: "1rem 1rem",
    },
    label: {
        textAlign: "center",
        padding: "10px 0",
        color: "var(--main-font-color)",
        letterSpacing: "4px",
        fontSize: "1.5rem"
    },
    form: {
        display: "flex",
        flexDirection: "column",
        padding: "1rem 4rem",
        width: "100%",
    }
});

const CreateLog = ({ dialog, handleOnClose }) => {
    // user inputs
    const [itemName, setItem] = useState('');
    const [description, setDescription] = useState('');
    const [servingSize, setServing] = useState('');
    const [calories, setCalories] = useState('');
    const [fat, setFat] = useState('');
    const [carbs, setCarb] = useState('');
    const [protein, setProtein] = useState('');



    const classes = useStyles();
    const dispatch = useDispatch();

    const handleFormSubmit = (e) => {
        e.preventDefault();
        dispatch(addFoodAction({ itemName, description, servingSize, calories, fat, carbs, protein }))
        handleOnClose();
    }
    return (
        <Dialog open={dialog} onClose={handleOnClose} fullWidth={true} className="form">

            <form className={classes.container} onSubmit={handleFormSubmit}>
                <div className={classes.label}>Add Custom Item</div>
                <input aria-describedby="Item" onChange={(e) => setItem(e.target.value)} placeHolder="Item" />
                <input aris-describedby="Description" onChange={(e) => setDescription(e.target.value)} placeHolder="Description" />
                <input aris-describedby="Serving" onChange={(e) => setServing(e.target.value)} placeHolder="Serving" />
                <input aris-describedby="Calories" onChange={(e) => setCalories(e.target.value)} placeHolder="Calories" />
                <input aris-describedby="Total Fat" onChange={(e) => setFat(e.target.value)} placeHolder="Total Fat" />
                <input aris-describedby="Total Carbohydrates" onChange={(e) => setCarb(e.target.value)} placeHolder="Total Carbohydrate" />
                <input aris-describedby="Total Protein" onChange={(e) => setProtein(e.target.value)} placeHolder="Protein" />
                <Button type="submit" variant="contained" color="primary" fullWidth={true}>Add</Button>
            </form>
        </Dialog>

    )

}

export default CreateLog
