import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { signOut } from '../../redux/actions/authActions';

import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
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
    },
    largeIcon: {
        width: 60,
        height: 60,
    },
    links: {
        textDecoration: "none",
        color: "black"
    }
});

const NavBar = () => {

    const classes = useStyles();
    const [state, setState] = React.useState({
        right: false,
    });


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

                <Link to="/statistics" className={classes.links}>
                    <ListItem button>
                        <ListItemIcon> <TrendingUpIcon /> </ListItemIcon>
                        <ListItemText primary={'Statistics'} />
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

                <ListItem button>
                    <ListItemIcon> <LiveHelpIcon /></ListItemIcon>
                    <ListItemText primary={'iifym'} />
                </ListItem>

                <ListItem button >
                    <ListItemIcon> <ExitToAppIcon /></ListItemIcon>
                    <ListItemText primary={'Sign Out'} />
                </ListItem>


            </List>
        </div>
    );

    return (
        <div className="custom-nav">
            <Button onClick={toggleDrawer('right', true)}><MenuIcon className={classes.largeIcon} /></Button>
            <Drawer anchor='right' open={state['right']} onClose={toggleDrawer('right', false)}>
                {list('right')}
            </Drawer>
        </div>
    );
}

export default NavBar;