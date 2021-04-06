import React from 'react';
import { Link } from 'react-router-dom';

// redux
import { useDispatch } from 'react-redux';
import { signOut } from '../../redux/actions/authActions';

// material ui
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
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

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
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
        // <div className="custom-nav">
        <Grid container xs={12} justify="flex-end" >
            {/* <Grid item container xs={9} alignItems="center" spacing={2}>
                <Grid item>
                    <img src="logo.png" style={{ width: "10rem" }} />
                </Grid>
            </Grid> */}
            <Grid item xs={3}>
                <Button onClick={toggleDrawer('right', true)}><MenuIcon className={classes.largeIcon} /></Button>
                <Drawer anchor='right' open={state['right']} onClose={toggleDrawer('right', false)}>
                    {list('right')}
                </Drawer>
            </Grid>
        </Grid>

        // </div>
    );
}

export default NavBar;