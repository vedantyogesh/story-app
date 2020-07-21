import React from 'react'
import { Link } from 'react-router-dom'
import SigneInLinks from './SignedInLinks'
import SigneOutLinks from './SignedOutLinks'
import { connect } from 'react-redux'

const NavBar = (props) => {
    const { auth, profile } = props;
    const  links = auth.uid ? <SigneInLinks profile={profile} /> : <SigneOutLinks />
    return (
        <nav className="nav-wrapper grey darken-3">
            <div className="container">
                <Link to="/" className="brand-logo">
                    MarioPlan
                </Link>
                {links}
            </div>
        </nav>
    )
}
 const mapStateToProps = (state) =>{
     console.log(state);
    return {
      auth: state.firebase.auth,
      profile : state.firebase.profile,
    };
 }
export default connect(mapStateToProps)(NavBar)
