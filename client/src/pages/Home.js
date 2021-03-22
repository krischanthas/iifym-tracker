import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="home">
            <div className="brand">
                <header>
                    <h1>iifym eater</h1>
                    <span>Eat what you want</span>
                </header>
            </div>
            <div className="logo">
                <img src="logo2.png" alt="logo" width="230" />
            </div>

            <div className="btn">
                <Link to="/register"><button>Join</button></Link>
                <Link to="/login"><button>Sign In</button></Link>
            </div>
        </div>
    )
}

export default Home
