import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

// components
import DisplayLogs from "../components/layouts/DisplayLogs";
import CreateLog from '../components/layouts/CreateLog';
import Progress from '../components/layouts/Progress';
import TrainingSummary from "../components/layouts/TrainingSummary";
// material ui
import { Box, Container, Grid, Button, Typography } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import SearchIcon from '@material-ui/icons/Search';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    button: {
        width: "100%",
        height: "4rem",
        border: "none",
        borderRadius: "3px",
        backgroundColor: "rgba(218, 218, 218, 0.5)"
    },
    headerColor: {
        color: "color: var(--main-font-color)"
    }
})

const Profile = () => {
    const history = useHistory();
    const classes = useStyles();
    const [openDialog, setOpenDialog] = useState(false);

    const handleOpenDialog = () => {
        setOpenDialog(true);
    }
    const handleOnClose = () => {
        setOpenDialog(false);
    }
    return (
        <Container>
            <Grid container spacing={2}>

                <Grid item container xs={12} spacing={1}>
                    <Grid item xs={6}>
                        <Button className={classes.button} onClick={() => handleOpenDialog()}><AddIcon /></Button>
                    </Grid>
                    <Grid item xs={6}>
                        <Button className={classes.button} onClick={() => history.push('/nix')}><SearchIcon /></Button>
                    </Grid>
                </Grid>

                {/* Dialog/Modal for custom add */}
                <Grid item xs={12}>
                    <CreateLog dialog={openDialog} handleOnClose={handleOnClose} />
                </Grid>
                <Grid item container xs={12} md={6}>
                    <Grid item xs={12} >
                        <Typography variant="h4" gutterBottom={true} style={{ color: "var(--main-font-color)" }}>Macro Intake Summary</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Progress />
                    </Grid>
                </Grid>
                <Grid item container xs={12} md={6}>
                    <Grid item xs={12}>
                        <Typography variant="h4" gutterBottom={true} style={{ color: "var(--main-font-color)" }}>Daily Logs</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <DisplayLogs />
                    </Grid>
                </Grid>

                <Grid item container xs={12} md={6}>
                    <Grid item xs={12}>
                        <Typography variant="h4" gutterBottom={true} style={{ color: "var(--main-font-color)" }}>Training Summary</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <TrainingSummary />
                    </Grid>
                </Grid>

            </Grid>
        </Container>

    )
}

export default Profile;