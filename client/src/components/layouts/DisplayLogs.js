import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCurrentUserProfile } from '../../redux/actions/userActions';
import { deleteFoodAction } from '../../redux/actions/foodActions';

import { Grid, Paper, Button, List, ListItem, ListItemText, Typography } from '@material-ui/core';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    bgPrimary: {
        backgroundColor: "rgba(218, 218, 218, 0.3)",
        color: "var(--main-font-color)",

    },
    fontSize: {
        fontSize: "2rem"
    }

})

const DisplayLogs = () => {
    const [logs, setLogs] = useState(null)
    const dispatch = useDispatch();
    const userDailyLog = useSelector(state => state.profile.dailyLog);
    const classes = useStyles();

    useEffect(() => {
        dispatch(getCurrentUserProfile());
    }, []);

    useEffect(() => {
        setLogs(userDailyLog);
    }, [userDailyLog]);

    const handleDeleteLogItem = (logId) => {
        dispatch(deleteFoodAction(logId));
    }
    if (logs) {
        if (logs.length > 0) {
            return (
                <Paper className={classes.bgPrimary}>
                    <List>

                        {logs.map((log, indx) => (
                            <ListItem key={indx} elevation={3}  >
                                <Grid container>
                                    <Grid item container xs={10} direction="row">
                                        <Grid item xs={10}>
                                            <ListItemText
                                                disableTypography
                                                primary={<Typography variant="h5">{log.itemName}</Typography>}
                                                secondary={`Serving Size: ${log.servingSize}, Total Calories: ${log.calories}, Total Fat: ${log.fat}, Total Carbs: ${log.carbs}, Total Protein: ${log.protein}`}
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
                        <ListItem elevation={3} >
                            <ListItemText
                                primary="Add a log for today!"
                            />
                        </ListItem>
                    </List>
                </Paper >
            )
        }
    } else {
        return (
            <Paper className={classes.bgPrimary}>
                <List>
                    <ListItem elevation={3} >
                        <ListItemText
                            primary="Logs could not be loaded."
                        />
                    </ListItem>
                </List>
            </Paper >
        )
    }
}

export default DisplayLogs;