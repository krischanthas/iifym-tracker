import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Login() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [birthDate, setBirthDate] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        axios
            .post('http://localhost:4000/api/auth/register', { name, email, password, birthDate })
            .then(res => {
                console.log(res);
            })
            .catch(err => console.log(err));
    }

    return (
        <div className="register">
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
                            name="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Full name"
                            autoComplete="off"
                        />
                    </div>
                    <div className="field">
                        <input
                            type="text"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Email"
                            autoComplete="off"
                        />
                    </div>
                    <div className="field">
                        <input
                            type="text"
                            name="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Password"
                            autoComplete="off"
                        />
                    </div>
                    <div className="field">
                        <input
                            type="date"
                            name="birthDate"
                            value={birthDate}
                            onChange={(e) => setBirthDate(e.target.value)}
                            placeholder="Birthday"
                            autoComplete="off"
                        />
                    </div>
                    <div>
                        <button type="submit" className="btn-primary">Register</button>
                    </div>
                    <div className="login-sub-link">
                        <Link to="/login" style={{ textDecoration: 'none', color: '#fff' }}>Log in</Link>
                    </div>
                </form>
            </div>
        </div>
    )
}
