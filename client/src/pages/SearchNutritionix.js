import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { searchNutritionixAPI, searchNutritionixAPIForNutrition, searchItemDeselect, addFoodAction } from '../redux/actions/foodActions';
import { Box, Grid, Container, Paper, Button, List, ListItem, Divider, Typography } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
    bgPrimary: {
        backgroundColor: "rgba(218, 218, 218, 0.3)",
        color: "var(--main-font-color)",
        fontSize: "1.5rem"

    },
    button: {
        width: "100%",
        height: "4rem",
        border: "none",
        borderRadius: "3px",
        backgroundColor: "rgba(218, 218, 218, 0.3)",
        color: "var(--main-font-color)"
    }
})

const SearchNutritionix = () => {
    const [query, setQuery] = useState('');
    const [listResults, setListResults] = useState('');
    const [selectedItemFromListResults, setSelectedItem] = useState({});
    const searched = useSelector(state => state.searched);
    const dispatch = useDispatch();
    const history = useHistory();
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
        history.push('/profile');

    }

    if (selectedItemFromListResults.food_name !== null) {
        return (
            <Container>
                <Grid container spacing={2}>

                    <Grid item container xs={12} spacing={1}>
                        <Grid item xs={6}>
                            <Button className={classes.button} onClick={() => handleBackToSearch()}><KeyboardBackspaceIcon /></Button>

                        </Grid>
                        <Grid item xs={6}>
                            <Button className={classes.button} onClick={() => handleAddToLog()}><AddIcon /></Button>

                        </Grid>
                    </Grid>

                    <Grid item xs={12}>
                        <Paper className={classes.bgPrimary}>
                            <List>
                                <ListItem><Typography variant="h4">{selectedItemFromListResults.food_name}</Typography></ListItem>
                                <Divider />
                                <ListItem>Serving Size: {selectedItemFromListResults.serving_qty}</ListItem>
                                <ListItem>Serving Unit: {selectedItemFromListResults.serving_unit}</ListItem>
                                <ListItem>Total Calories: {selectedItemFromListResults.nf_calories}</ListItem>
                                <ListItem>Total Fat: {selectedItemFromListResults.nf_total_fat}</ListItem>
                                <ListItem>Total Saturated Fat: {selectedItemFromListResults.nf_saturated_fat}</ListItem>
                                <ListItem>Total Cholesterol: {selectedItemFromListResults.nf_total_cholesterol}</ListItem>
                                <ListItem>Total Charbohydrate: {selectedItemFromListResults.nf_total_carbohydrate}</ListItem>
                                <ListItem>Total Protein: {selectedItemFromListResults.nf_protein}</ListItem>
                                <ListItem>Total Sodium: {selectedItemFromListResults.nf_sodium}</ListItem>
                                <ListItem>Total Sugar: {selectedItemFromListResults.nf_sugars}</ListItem>
                                <ListItem>Total Potassium: {selectedItemFromListResults.nf_potassium}</ListItem>
                                <ListItem>Total Fiber: {selectedItemFromListResults.nf_dietary_fiber}</ListItem>

                            </List>
                        </Paper>
                    </Grid>
                </Grid>
                {/* </Grid> */}
            </Container >
        )

    } else {
        return (
            <Container>
                <Grid container spacing={2}>
                    <Grid item container xs={12} >
                        {/* <Paper  > */}
                        <form onSubmit={onSubmit} className="form">
                            <Grid item container justify="space-around" alignItems="center" spacing={1}>
                                <Grid item xs={9} className="field">

                                    <input type="text" value={query} onChange={onChange} placeHolder="Search" />
                                </Grid>
                                <Grid item xs={3}>
                                    <Button className="btn-primary" type="submit" variant="contained" color="primary">Search</Button>

                                </Grid>
                            </Grid>
                        </form>

                        {/* </Paper> */}
                    </Grid>

                    <Grid item container xs={12} >
                        {
                            (listResults) ? (
                                <Box className="list-container" maxHeight="80vh">

                                    <Grid item container direction="column">
                                        {listResults.commonResults.map((listItem, indx) => (
                                            <Grid item xs={12} key={indx}>
                                                <Typography className="list-item" variant="h5" onClick={() => handleItemSelect(listItem.food_name)}>{listItem.food_name}</Typography>
                                                { (indx !== listResults.commonResults.length - 1) ? (<Divider />) : (null)}
                                            </Grid>

                                        ))}
                                    </Grid>
                                </Box>

                            ) : (null)
                        }
                    </Grid>
                </Grid>
            </Container >
        )
    }


}

export default SearchNutritionix;