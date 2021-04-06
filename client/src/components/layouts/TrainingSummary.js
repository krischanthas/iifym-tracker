import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

// Material ui
import { Paper, List, ListItem, ListItemText, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
    bgPrimary: {
        backgroundColor: "rgba(218, 218, 218, 0.3)",
        color: "var(--main-font-color)",
        fontSize: "1.5rem"
    },

})

const TrainingSummary = () => {
    const training = useSelector(state => state.profile.training);
    const goals = useSelector(state => state.profile.goals);
    const classes = useStyles();



    if (training && training.length !== 0) {

        return (
            <Paper className={classes.bgPrimary}>
                Training
            </Paper >

        )
    } else {
        return (
            <Paper className={classes.bgPrimary}>
                <List>
                    <ListItem elevation={3}>
                        <ListItemText primary="No training data available" />
                    </ListItem>
                </List>
            </Paper>
        )
    }


}

export default TrainingSummary;