import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCurrentUserProfile } from '../../redux/actions/userActions';

import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const DisplayLogs = () => {
    const [logs, setLogs] = useState([])
    const dispatch = useDispatch();
    const userLogs = useSelector(state => state.profile.logs);

    useEffect(() => {
        dispatch(getCurrentUserProfile());
    }, []);

    useEffect(() => {
        setLogs(userLogs);
    }, [userLogs]);

    if (logs) {
        return (
            <Paper>
                <List>

                    {logs.map((log, indx) => (
                        <ListItem key={indx} elevation={3}>
                            <ListItemText
                                primary={log.itemName}
                                secondary={`Serving Size: ${log.servingSize}, Total Calories: ${log.calories}, Total Fat: ${log.fat}, Total Carbs: ${log.carbs}, Total Protein: ${log.protein}`}
                            />
                        </ListItem>
                    ))}
                </List>

            </Paper>
        )
    } else {
        return (
            <div className="displayLogs" style={{ width: "100%", height: "50%", backgroundColor: "white" }}>
                <p>No logs...</p>
            </div>
        )
    }
}

export default DisplayLogs;