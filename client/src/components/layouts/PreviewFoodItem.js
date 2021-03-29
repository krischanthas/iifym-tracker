import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { Dialog, DialogTitle, Paper } from '@material-ui/core';

const useStyles = makeStyles({

    paper: {
        display: "flex",
        flexDirection: "column",
        padding: "1rem 4rem",
        width: "100%",
        height: "500px"
    }
});

const PreviewFoodItem = ({ dialog, handleOnClose }) => {
    const classes = useStyles();


    return (
        <Dialog open={dialog} onClose={handleOnClose} fullWidth={true}>
            <DialogTitle>Add custom item</DialogTitle>
            <Paper className={classes.paper}></Paper>
        </Dialog>
    )

}

export default PreviewFoodItem
