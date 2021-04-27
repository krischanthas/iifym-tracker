import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteExerciseLog } from '../../redux/actions/exerciseActions';

// Material ui
import { Paper, List, ListItem, ListItemText, Grid, Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';


const useStyles = makeStyles({
    bgPrimary: {
        backgroundColor: "rgba(218, 218, 218, 0.3)",
        color: "var(--main-font-color)",
        fontSize: "1.5rem"
    },
    fontSize: {
        fontSize: "2rem"
    }

})

const TrainingSummary = () => {
    const exerciseLogs = useSelector(state => state.profile.dailyExercise);
    const classes = useStyles();
    const dispatch = useDispatch();

    const handleDeleteLogItem = (logId) => {
        dispatch(deleteExerciseLog(logId));
    }

    if (exerciseLogs && exerciseLogs.length !== 0) {

        return (
            <Paper className={classes.bgPrimary}>
                <List>

                    {exerciseLogs.map((log, indx) => (
                        <ListItem key={indx} elevation={3}  >
                            <Grid container>
                                <Grid item container xs={10} direction="row">
                                    <Grid item xs={10}>
                                        <ListItemText
                                            disableTypography
                                            primary={<Typography variant="h5">{log.exerciseName}</Typography>}
                                            secondary={`Total Sets: ${log.totalSets}, Total Reps: ${log.totalReps}, Weight: ${log.weight}`}
                                        />
                                    </Grid>
                                    <Grid item xs={10}>
                                        <Typography variant="caption">{log.createdAt}</Typography>

                                    </Grid>
                                </Grid>
                                <Grid item container alignItems="center" xs={2}>
                                    <Grid item >
                                        <Button varient="outlined" color="secondary" onClick={() => handleDeleteLogItem(log._id)}><DeleteForeverIcon className={classes.fontSize} /></Button>
                                    </Grid>
                                </Grid>

                            </Grid>

                        </ListItem>
                    ))}
                </List>
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