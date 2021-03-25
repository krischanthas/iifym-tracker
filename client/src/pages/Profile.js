import React, { useState } from 'react';

// components
import DisplayLogs from "../components/layouts/DisplayLogs";
import CreateLog from '../components/CreateLog';

import { Container, Grid, Button } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    button: {
        width: "100%",
        height: "4rem",
        border: "none",
        borderRadius: "3px",
        backgroundColor: "rgba(218, 218, 218, 0.5)"
    }
})

const Profile = () => {
    const classes = useStyles();
    const [openDialog, setOpenDialog] = useState(false);

    const handleOpenDialog = (openDialog) => {
        setOpenDialog(true);
    }
    const handleOnClose = () => {
        setOpenDialog(false);
    }
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item xs={12} >
                    <Button className={classes.button} onClick={() => handleOpenDialog()}><AddIcon /></Button>
                </Grid>

                <Grid item xs={12} md={6}>
                    <CreateLog dialog={openDialog} handleOnClose={handleOnClose} />

                </Grid>
                <Grid item xs={12} md={6}>
                    <DisplayLogs />
                </Grid>

            </Grid>
        </Container>

    )
}

export default Profile;