import React, { useState } from 'react';

// redux
import { useDispatch, useSelector } from 'react-redux';
import { updateUserGoals } from '../redux/actions/userActions';

// material ui
import { Grid, Paper, List, ListItem, ListItemText, Container, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import EditIcon from '@material-ui/icons/Edit';

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

    },
    edit: {
        display: "flex",
        justifyContent: "flex-end"
    }
})

const Goals = () => {

    // component state for tracking input change
    const [fat, setFat] = useState(null);
    const [carbs, setCarbs] = useState(null);
    const [protein, setProtein] = useState(null);

    const [editMode, setEditMode] = useState(false);

    const classes = useStyles();
    const dispatch = useDispatch();
    // redux state
    const userGoals = useSelector(state => state.profile.goals);

    const handleOnSubmit = (e) => {
        e.preventDefault();
        dispatch(updateUserGoals({ fat, carbs, protein }));
        setEditMode(false);
    }

    const onEditClick = () => {
        setEditMode(!editMode);
    }

    if (editMode) {
        return (
            <Container>
                <Grid container spacing={2}>
                    <form className="form" onSubmit={handleOnSubmit}>
                        <button onClick={onEditClick} className="btn-primary">Cancel</button>

                        <Grid item xs={12}>
                            <input autoComplete="off" type="text" name="fat" placeholder="Fat" onChange={(e) => setFat(e.target.value)} />

                        </Grid>
                        <Grid item xs={12}>
                            <input autoComplete="off" type="text" name="carbs" placeholder="Carbohydrates" onChange={(e) => setCarbs(e.target.value)} />
                        </Grid>

                        <Grid item xs={12}>
                            <input autoComplete="off" type="text" name="protein" placeholder="Protein" onChange={(e) => setProtein(e.target.value)} />
                        </Grid>
                        <Grid item xs={12}>
                            <button className="btn-primary" type="submit">Save</button>
                        </Grid>
                    </form>
                </Grid>
            </Container >
        )
    } else {
        return (
            <Container>
                <Paper className={classes.bgPrimary}>
                    <button onClick={onEditClick} className="btn-primary">Edit <EditIcon /></button>
                    <List>
                        <ListItem elevation={3}>
                            <ListItemText primary="Daily Fat Goal" secondary={userGoals ? userGoals.nutrition.fat : ''} />
                        </ListItem>
                        <ListItem elevation={3}>
                            <ListItemText primary="Daily Carbohydrates Goal" secondary={userGoals ? userGoals.nutrition.carbs : ''} />
                        </ListItem>
                        <ListItem elevation={3}>
                            <ListItemText primary="Daily Protein Goal" secondary={userGoals ? userGoals.nutrition.protein : ''} />
                        </ListItem>
                    </List>
                </Paper>
            </Container>
        )
    }


}

export default Goals;