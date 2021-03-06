import React from 'react';
import { useSelector } from 'react-redux'
import { Route, Redirect } from 'react-router-dom';


const PrivateRoute = ({ component: Component, authenticated, ...rest }) => {
    const auth = useSelector((state) => state.auth);

    return (<Route
        {...rest}
        render={(props) =>
            auth.isAuthUser === true ? <Redirect to="/profile" /> : <Component {...props} />
        }
    />)
};

export default (PrivateRoute);
