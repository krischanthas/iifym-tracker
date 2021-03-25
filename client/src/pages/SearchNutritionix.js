import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { searchNutritionixAPI } from '../redux/actions/foodAction';
import { Paper, TextField, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({

    textField: {
        width: "100%",
        height: "4rem"
    }
});

const SearchNutritionix = () => {
    const [query, setQuery] = useState('');
    const [listResults, setListResults] = useState('');
    const searched = useSelector(state => state.searched);
    const dispatch = useDispatch();
    const classes = useStyles();


    const onChange = (e) => {
        setQuery(e.target.value);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        dispatch(searchNutritionixAPI(query));
    }

    useEffect(() => {
        setListResults(searched)
    }, [searched])

    return (
        <div>
            <Paper>
                <form onSubmit={onSubmit}>
                    <TextField type="text" label="Search our food database" value={query} onChange={onChange} className={classes.textField} />
                    <Button type="submit" variant="contained" color="primary">Search</Button>
                </form>
            </Paper>


            {
                (listResults) ? (
                    <div className="searchResults">
                        <ul>
                            {listResults.commonResults.map((listItem, indx) => (
                                <li>{listItem.food_name}</li>
                            ))}
                        </ul>
                    </div>
                ) : (null)
            }
        </div>
    )
}

export default SearchNutritionix;