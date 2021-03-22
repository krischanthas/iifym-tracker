import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import NavBar from "../components/layouts/NavBar";

import { getCurrentUserProfile } from '../redux/actions/userActions';
import { signOut } from '../redux/actions/authActions';

const Profile = ({ getCurrentUserProfile, signOut, profile }) => {
    let history = useHistory();
    const [logs, setLogs] = useState([]);


    useEffect(() => {
        getCurrentUserProfile();
    }, []);

    useEffect(() => {
        setLogs(profile.logs);
        console.log(logs);
    }, [profile.logs])

    return (
        <div className="profile">
            <NavBar />
            <div className="btn">
                <button onClick={() => signOut()} >Sign Out</button>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    auth: state.auth,
    profile: state.profile
})
export default connect(mapStateToProps, { getCurrentUserProfile, signOut })(Profile);