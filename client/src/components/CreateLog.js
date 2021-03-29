import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Box, FormControl, InputLabel, Input, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { addFoodAction } from '../redux/actions/foodActions';
import { Dialog, DialogTitle } from '@material-ui/core';

const useStyles = makeStyles({

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
        <Dialog open={dialog} onClose={handleOnClose} fullWidth={true}>
            <DialogTitle>Add custom item</DialogTitle>
            <form className={classes.form} onSubmit={handleFormSubmit}>
                <FormControl>
                    <InputLabel htmlFor="itemName" >Item</InputLabel>
                    <Input aria-describedby="Item" onChange={(e) => setItem(e.target.value)} />
                </FormControl>
                <FormControl>
                    <InputLabel htmlFor="descrInput">Description</InputLabel>
                    <Input aris-describedby="Description" onChange={(e) => setDescription(e.target.value)} />
                </FormControl>
                <FormControl>
                    <InputLabel htmlFor="servingSize">Serving Size</InputLabel>
                    <Input aris-describedby="Serving" onChange={(e) => setServing(e.target.value)} />
                </FormControl>
                <FormControl>
                    <InputLabel htmlFor="caloriesInput">Calories</InputLabel>
                    <Input aris-describedby="Calories" onChange={(e) => setCalories(e.target.value)} />
                </FormControl>
                <FormControl>
                    <InputLabel htmlFor="fat">Total Fat</InputLabel>
                    <Input aris-describedby="Total Fat" onChange={(e) => setFat(e.target.value)} />
                </FormControl>
                <FormControl>
                    <InputLabel htmlFor="carbs">Total Carbohydrates</InputLabel>
                    <Input aris-describedby="Total Carbohydrates" onChange={(e) => setCarb(e.target.value)} />
                </FormControl>
                <FormControl>
                    <InputLabel htmlFor="protein">Total Protein</InputLabel>
                    <Input aris-describedby="Total Protein" onChange={(e) => setProtein(e.target.value)} />
                </FormControl>
                <Box mt={3}>
                    <Button type="submit" variant="contained" color="primary" fullWidth={true}>Add</Button>

                </Box>
            </form>
        </Dialog>
    )

}

export default CreateLog
