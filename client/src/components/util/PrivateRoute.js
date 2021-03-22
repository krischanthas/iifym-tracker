import React from 'react';
import Profile from '../../pages/Profile';
import Login from '../../pages/Login';
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom';

const PrivateRoute = ({ auth }) => {
    const authorized = auth.isAuthUser;
    if (authorized) return <Profile />
    else return <Login />;
}

const mapStateToProps = state => ({
    auth: state.auth
});
export default connect(mapStateToProps, null)(PrivateRoute);
