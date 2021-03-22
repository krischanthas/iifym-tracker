import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import { connect } from 'react-redux';
import { login } from '../redux/actions/authActions';

const Login = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();

    const onSubmit = (e) => {
        e.preventDefault();
        if (props.login({ email, password })) {
            history.push('/profile');
        };

    }

    return (
        <div className="login">
            <div className="btn-return">
                <Link to="/">
                    <i className="fa fa-chevron-left" aria-hidden="true" style={{ color: '#fff' }}></i>
                </Link>
            </div>
            <div className="header">
                <header>
                    <img src="logo.png" alt="logo" />
                </header>
            </div>

            <div className="form">
                <form onSubmit={onSubmit}>
                    <div className="field">
                        <input
                            type="text"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            autoComplete="off"
                            placeholder="Email"
                        />
                    </div>
                    <div className="field">
                        <input
                            type="text"
                            name="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            autoComplete="off"
                            placeholder="Password"
                        />
                    </div>
                    <div>
                        <button type="submit" className="btn-primary">Login</button>
                    </div>
                    <div className="signup-sub-link">
                        <Link to="#" style={{ textDecoration: 'none', color: '#fff' }}>Forgot password?</Link>
                        <Link to="/register" style={{ textDecoration: 'none', color: '#fff' }}>Sign up</Link>
                    </div>
                </form>
            </div>
        </div >
    )
}
export default connect(null, { login })(Login);