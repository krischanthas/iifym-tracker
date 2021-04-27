import React from 'react';
import { Link } from 'react-router-dom';

// redux
import { useDispatch } from 'react-redux';
import { signOut } from '../../redux/actions/authActions';

// material ui
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Drawer, Button, List, Divider, ListItem, ListItemText, Typography, Toolbar, useMediaQuery, AppBar, IconButton, ListItemIcon, Menu, MenuItem } from '@material-ui/core';

import AssignmentIcon from '@material-ui/icons/Assignment';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import SearchIcon from '@material-ui/icons/Search';
import LiveHelpIcon from '@material-ui/icons/LiveHelp';
import FitnessCenterIcon from '@material-ui/icons/FitnessCenter';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import MenuIcon from '@material-ui/icons/Menu';
import FaceIcon from '@material-ui/icons/Face';


const useStyles = makeStyles({
    list: {
        width: 300,
        height: "100%",
        backgroundImage: "linear-gradient(to bottom right, #ff037dad, #780482ad)",
    },
    largeIcon: {
        width: 60,
        height: 60,
    },
    links: {
        textDecoration: "none",
        color: "var(--main-font-color)"
    },
});

const NavBar = () => {

    const classes = useStyles();

    const [state, setState] = React.useState({
        right: false,
    });
    const dispatch = useDispatch();

    const [anchorEl, setAnchorEl] = React.useState(null);
    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    // toggles menu in full screen
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const list = (anchor) => (
        <div
            role="presentation"
            className={classes.list}
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                <Link to="/profile" className={classes.links}>
                    <ListItem button>
                        <ListItemIcon><FaceIcon /></ListItemIcon>
                        <ListItemText primary={'Profile'} />
                    </ListItem>
                </Link>
                <Link to="/nix" className={classes.links}>
                    <ListItem button>
                        <ListItemIcon><SearchIcon /></ListItemIcon>
                        <ListItemText primary={'Search'} />
                    </ListItem>
                </Link>
                <Link to="/history" className={classes.links}>
                    <ListItem button>
                        <ListItemIcon><AssignmentIcon /></ListItemIcon>
                        <ListItemText primary={'Meal History'} />
                    </ListItem>
                </Link>

                <Link to="/exercise" className={classes.links}>
                    <ListItem button>
                        <ListItemIcon> <FitnessCenterIcon /> </ListItemIcon>
                        <ListItemText primary={'Exercise'} />
                    </ListItem>
                </Link>

                <Link to="/goals" className={classes.links}>
                    <ListItem button>
                        <ListItemIcon> <TrendingUpIcon /> </ListItemIcon>
                        <ListItemText primary={'Goals'} />
                    </ListItem>
                </Link>

            </List>
            <Divider />
            <List>
                <Link to="/account" className={classes.links}>
                    <ListItem button>
                        <ListItemIcon> <AccountCircleIcon /></ListItemIcon>
                        <ListItemText primary={'Account'} />
                    </ListItem>
                </Link>

                <ListItem button className={classes.links}>
                    <ListItemIcon> <LiveHelpIcon /></ListItemIcon>
                    <ListItemText primary={'iifym'} />
                </ListItem>

                <ListItem button onClick={() => dispatch(signOut())} className={classes.links}>
                    <ListItemIcon> <ExitToAppIcon /></ListItemIcon>
                    <ListItemText primary={'Sign Out'} />
                </ListItem>


            </List>
        </div>
    );


    return (
        <Grid container justify="flex-end" >

            <Grid item xs={3}>
                <Button onClick={toggleDrawer('right', true)}><MenuIcon className={classes.largeIcon} /></Button>
                <Drawer anchor='right' open={state['right']} onClose={toggleDrawer('right', false)}>
                    {list('right')}
                </Drawer>
            </Grid>
        </Grid>
    );


}

export default NavBar;