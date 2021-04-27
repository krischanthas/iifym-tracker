import React from 'react';
import Profile from '../../pages/Profile';
import Login from '../../pages/Login';
import { useSelector } from 'react-redux'
// import { useHistory } from 'react-router-dom';

const PrivateRoute = () => {
    // const history = useHistory();
    const auth = useSelector((state) => state.auth);
    const authorized = auth.isAuthUser;
    if (!authorized) return <Login />;
    else return <Profile />;
}


export default (PrivateRoute);
