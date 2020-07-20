import React from 'react'
import { Link } from 'react-router-dom'
import SigneInLinks from './SignedInLinks'
import SigneOutLinks from './SignedOutLinks'

const NavBar = () => {
    return (
        <nav className="nav-wrapper grey darken-3">
            <div className="container">
                <Link to="/" className="brand-logo">
                    MarioPlan
                </Link>
                <SigneInLinks />
                <SigneOutLinks />
            </div>
        </nav>
    )
}

export default NavBar
