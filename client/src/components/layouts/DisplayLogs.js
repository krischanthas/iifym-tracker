import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCurrentUserProfile } from '../../redux/actions/userActions';
import { deleteFoodAction } from '../../redux/actions/foodActions';

import { Grid, Paper, Typography, Button, List, ListItem, ListItemText } from '@material-ui/core';


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

    const handleDeleteLogItem = (logId) => {
        dispatch(deleteFoodAction(logId));
    }
    if (logs) {
        return (
            <Paper>
                <List>

                    {logs.map((log, indx) => (
                        <ListItem key={indx} elevation={3} >
                            <ListItemText
                                primary={log.itemName}
                                secondary={`Serving Size: ${log.servingSize}, Total Calories: ${log.calories}, Total Fat: ${log.fat}, Total Carbs: ${log.carbs}, Total Protein: ${log.protein}`}
                            />
                            <Button varient="outlined" color="secondary" onClick={() => handleDeleteLogItem(log._id)}>X</Button>
                        </ListItem>
                    ))}
                </List>

            </Paper >
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