import React, { Fragment } from 'react'

const NavBar = () => {
    return (
        <Fragment>
            <nav className="navbar">
                <ul>
                    <li>Search</li>
                    <li>
                        Add
                    </li>
                    <li>Totals</li>
                    <li>User</li>
                </ul>
            </nav>
        </Fragment>
    )
}

export default NavBar
