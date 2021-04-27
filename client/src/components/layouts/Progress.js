import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

// Material ui
import { Paper, List, ListItem, ListItemText, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
    barContainer: {
        width: "100%",
        height: "1rem",
        backgroundColor: "lightgray",
        overflow: "hidden",
        borderRadius: "1rem"

    },
    progressBar: {
        height: "100%",
        borderRadius: "1rem"
    },
    bgPrimary: {
        backgroundColor: "rgba(218, 218, 218, 0.3)",
        color: "var(--main-font-color)",
        fontSize: "1.5rem"
    },
    list: {
        paddingTop: 0,
        paddingBottom: 0,
    }

})

const Progress = () => {
    const logs = useSelector(state => state.profile.dailyLog);
    const goals = useSelector(state => state.profile.goals);
    const classes = useStyles();



    if (logs && logs.length !== 0) {
        const totalFat = Math.round(logs.map(log => log.fat).reduce((acc, curr) => acc + curr));
        const totalCarbohydrates = Math.round(logs.map(log => log.carbs).reduce((acc, curr) => acc + curr));
        const totalProtein = Math.round(logs.map(log => log.protein).reduce((acc, curr) => acc + curr));

        return (
            <Paper className={classes.bgPrimary}>
                <List className={classes.list}>
                    <ListItem elevation={3}>
                        <Grid container direction="row" alignItems="center" xs={12}>
                            <Grid item xs={2}>
                                <ListItemText primary="Total Fat" secondary={totalFat + " / " + goals.nutrition.fat} />
                            </Grid>
                            <Grid item xs={10}>
                                <div className={classes.barContainer}>
                                    <div className={classes.progressBar} style={{ backgroundColor: "#cf0404", width: ((totalFat / goals.nutrition.fat) * 100) + "%" }}></div>
                                </div>
                            </Grid>
                        </Grid>
                    </ListItem>

                    <ListItem elevation={3}>
                        <Grid container direction="row" alignItems="center" xs={12}>
                            <Grid item xs={2}>
                                <ListItemText primary="Total Carbs" secondary={totalCarbohydrates + " / " + goals.nutrition.carbs} />
                            </Grid>
                            <Grid item xs={10}>
                                <div className={classes.barContainer}>
                                    <div className={classes.progressBar} style={{ backgroundColor: "#02a810", width: ((totalCarbohydrates / goals.nutrition.carbs) * 100) + "%" }}></div>
                                </div>
                            </Grid>
                        </Grid>

                    </ListItem>

                    <ListItem elevation={3}>
                        <Grid container direction="row" alignItems="center" xs={12}>
                            <Grid item xs={2}>
                                <ListItemText primary="Total Protein" secondary={totalProtein + " / " + goals.nutrition.protein} />
                            </Grid>
                            <Grid item xs={10}>
                                <div className={classes.barContainer}>
                                    <div className={classes.progressBar} style={{ backgroundColor: "#0a95cc", width: ((totalProtein / goals.nutrition.protein) * 100) + "%" }}></div>
                                </div>
                            </Grid>
                        </Grid>

                    </ListItem >

                </List >
            </Paper >

        )
    } else {
        return (
            <Paper className={classes.bgPrimary}>
                <List>
                    <ListItem elevation={3}>
                        <ListItemText primary="No Logs available" />
                    </ListItem>
                </List>
            </Paper>
        )
    }


}

export default Progress;