import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

// apollo client
import { useMutation, gql } from '@apollo/client';



const CreateLog = () => {
    let history = useHistory();

    const [logType, setType] = useState('');
    const [calories, setCalories] = useState('');
    const [totalFat, setFat] = useState('');
    const [totalCarbohydrate, setCarb] = useState('');
    const [totalProtein, setProtein] = useState('');

    // sanitize these!!
    const variables = {
        logType,
        calories: parseInt(calories),
        totalFat: parseInt(totalFat),
        totalCarbohydrate: parseInt(totalCarbohydrate),
        totalProtein: parseInt(totalProtein)
    };

    const CREATE_LOG = gql`  
    mutation ($logType: String!, $calories: Int!, $totalFat: Int!, $totalCarbohydrate: Int!, $totalProtein: Int!) {
        createLog(logInput: { logType: $logType, calories: $calories, totalFat: $totalFat, totalCarbohydrate: $totalCarbohydrate, totalProtein: $totalProtein }) {
            userId,
            logType,
            calories,
            totalFat,
            totalCarbohydrate,
            totalProtein
        }
    }`;
    const [createLog, { error, loading, data }] = useMutation(CREATE_LOG);
    const handleSubmit = (e) => {
        e.preventDefault();
        createLog({ variables });
        history.push('/profile');
    }

    return (
        <div className="form">
            <form onSubmit={handleSubmit}>
                <div className="field">
                    <input type="text" name="logType" value={logType} onChange={(e) => setType(e.target.value)} placeholder="Breakfast, lunch, dinner or snack" autoComplete="off" />
                </div>
                <div className="field">
                    <input type="text" name="calories" value={calories} onChange={(e) => setCalories(e.target.value)} placeholder="Enter calories" autoComplete="off" />
                </div>
                <div className="field">
                    <input type="text" name="totalFat" value={totalFat} onChange={(e) => setFat(e.target.value)} placeholder="Enter fat (g)" autoComplete="off" />
                </div>
                <div className="field">
                    <input type="text" name="totalCarbohydrate" value={totalCarbohydrate} onChange={(e) => setCarb(e.target.value)} placeholder="Enter carbohydrate (g)" autoComplete="off" />

                </div>
                <div className="field">
                    <input type="text" name="totalProtein" value={totalProtein} onChange={(e) => setProtein(e.target.value)} placeholder="Enter protein (g)" autoComplete="off" />

                </div>
                <button type="submit" className="btn-primary">Add</button>
            </form>
        </div>
    )


}

export default CreateLog
