import React from 'react';
import { useSelector } from 'react-redux'
import { Route, Redirect } from 'react-router-dom';


const RedirectLogin = ({ component: Component, authenticated, ...rest }) => {
    const auth = useSelector((state) => state.auth);

    return (<Route
        {...rest}
        render={(props) =>
            auth.isAuthUser === false ? <Redirect to="/login" /> : <Component {...props} />
        }
    />)
};

export default (RedirectLogin);
