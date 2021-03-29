import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { searchNutritionixAPI, searchNutritionixAPIForNutrition, searchItemDeselect, addFoodAction } from '../redux/actions/foodActions';
import { Grid, Container, Paper, TextField, Button, List, ListItem, ListItemIcon, Divider, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import PreviewFoodItem from '../components/layouts/PreviewFoodItem';

const useStyles = makeStyles({


});

const SearchNutritionix = () => {
    const [query, setQuery] = useState('');
    const [listResults, setListResults] = useState('');
    const [selectedItemFromListResults, setSelectedItem] = useState({});
    const searched = useSelector(state => state.searched);
    const dispatch = useDispatch();
    const classes = useStyles();


    useEffect(() => {
        setListResults(searched)
    }, [searched.commonResults, searched.brandedResults]);

    useEffect(() => {
        setSelectedItem(searched.selected);
    }, [searched.selected]);

    const onChange = (e) => {
        setQuery(e.target.value);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        dispatch(searchNutritionixAPI(query)); // clear selectedItemFromListResult before searching again, otherwise conditional rendering won't work as intended
    }

    const handleItemSelect = (listItemFoodName) => {
        // call action creator to search nutrition facts for this food item
        dispatch(searchNutritionixAPIForNutrition(listItemFoodName));

    }

    const handleBackToSearch = () => {
        // dispatch action creator to clear state.searched.selected
        dispatch(searchItemDeselect());
    }

    const handleAddToLog = () => {
        dispatch(addFoodAction({
            itemName: selectedItemFromListResults.food_name,
            servingSize: selectedItemFromListResults.serving_qty,
            calories: selectedItemFromListResults.nf_calories,
            protein: selectedItemFromListResults.nf_protein,
            fat: selectedItemFromListResults.nf_total_fat,
            carbs: selectedItemFromListResults.nf_total_carbohydrate,
        }));
    }

    if (selectedItemFromListResults.food_name !== null) {
        return (
            <Container>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Button variant="contained" color='secondary' onClick={() => handleBackToSearch()}>Back</Button>
                        <Button variant="contained" color='primary' onClick={() => handleAddToLog()}>Add</Button>

                        <Grid item xs={12}>
                            <Paper>
                                <List>
                                    <ListItem>{selectedItemFromListResults.food_name}</ListItem>
                                    <ListItem>Serving Size: {selectedItemFromListResults.serving_qty}</ListItem>
                                    <ListItem>Total Calories: {selectedItemFromListResults.nf_calories}</ListItem>
                                    <ListItem>Total Fat: {selectedItemFromListResults.nf_total_fat}</ListItem>
                                    <ListItem>Total Saturated Fat: {selectedItemFromListResults.nf_saturated_fat}</ListItem>
                                    <ListItem>Total Cholesterol: {selectedItemFromListResults.nf_total_cholesterol}</ListItem>
                                    <ListItem>Total Charbohydrate: {selectedItemFromListResults.nf_total_carbohydrate}</ListItem>
                                    <ListItem>Total Protein: {selectedItemFromListResults.nf_total_protein}</ListItem>
                                    <ListItem>Total Sodium: {selectedItemFromListResults.nf_sodium}</ListItem>
                                    <ListItem>Total Sugar: {selectedItemFromListResults.nf_sugars}</ListItem>
                                    <ListItem>Total Potassium: {selectedItemFromListResults.nf_potassium}</ListItem>
                                    <ListItem>Total Fiber: {selectedItemFromListResults.nf_dietary_fiber}</ListItem>

                                </List>
                            </Paper>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        )

    } else {
        return (
            <Container>
                <Grid container spacing={2}>
                    <Grid item xs={12} >
                        <Paper  >
                            <form onSubmit={onSubmit}>
                                <Grid item container justify="space-around" alignItems="center" spacing={1}>
                                    <Grid item xs={9}>
                                        <TextField
                                            type="text"
                                            color="primary"
                                            variant="outlined"
                                            fullWidth={true}
                                            label="Search our food database"
                                            value={query}
                                            onChange={onChange}
                                        />
                                    </Grid>
                                    <Grid item xs={3}>
                                        <Button type="submit" variant="contained" color="primary">Search</Button>

                                    </Grid>
                                </Grid>
                            </form>

                        </Paper>
                    </Grid>

                    <Grid item xs={12} >

                        <Paper className="searchResults">
                            {
                                (listResults) ? (

                                    <Grid item container direction="column">
                                        {listResults.commonResults.map((listItem, indx) => (
                                            <Grid item xs={12} md={6} key={indx}>
                                                <Typography variant="h4" color="primary" onClick={() => handleItemSelect(listItem.food_name)}>{listItem.food_name}</Typography>
                                                <Divider />
                                            </Grid>

                                        ))}
                                    </Grid>

                                ) : (null)
                            }
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        )
    }


}

export default SearchNutritionix;