import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

//redux
import { useDispatch } from 'react-redux';
import { addExerciseLog } from '../redux/actions/exerciseActions';

// material
import { Container, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';



const useStyles = makeStyles({

})
const Exercise = () => {
    const classes = useStyles();
    const [exerciseName, setExerciseName] = useState('');
    const [exerciseDescription, setExerciseDescription] = useState('');
    const [totalSets, setTotalSets] = useState(null);
    const [totalReps, setTotalReps] = useState(null);
    const [weight, setWeight] = useState(null);

    const dispatch = useDispatch();
    const history = useHistory();

    const handleOnSubmit = (e) => {
        e.preventDefault();
        dispatch(addExerciseLog({ exerciseName, exerciseDescription, totalSets, totalReps, weight }));
        history.push('/profile');
    }

    return (
        <Container>
            <Grid container spacing={2}>
                <form className="form" onSubmit={handleOnSubmit}>

                    <Grid item xs={12}>
                        <input autoComplete="off" type="text" name="exerciseName" placeholder="Exercise" onChange={(e) => setExerciseName(e.target.value)} />

                    </Grid>
                    <Grid item xs={12}>
                        <input autoComplete="off" type="text" name="exerciseDescription" placeholder="Description" onChange={(e) => setExerciseDescription(e.target.value)} />
                    </Grid>

                    <Grid item xs={12}>
                        <input autoComplete="off" type="text" name="totalSets" placeholder="Total Sets" onChange={(e) => setTotalSets(e.target.value)} />
                    </Grid>

                    <Grid item xs={12}>
                        <input autoComplete="off" type="text" name="totalReps" placeholder="Total Reps" onChange={(e) => setTotalReps(e.target.value)} />
                    </Grid>

                    <Grid item xs={12}>
                        <input autoComplete="off" type="text" name="weight" placeholder="Weight" onChange={(e) => setWeight(e.target.value)} />
                    </Grid>
                    <Grid item xs={12}>
                        <button className="btn-primary" type="submit">Add</button>
                    </Grid>
                </form>
            </Grid>
        </Container >
    )

}

export default Exercise;