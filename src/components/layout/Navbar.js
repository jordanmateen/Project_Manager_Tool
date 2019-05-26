import React from 'react'
import { Link } from 'react-router-dom'
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';

const NavBar =() => {
    return(
        <nav className="nav-wrapper navvy">
            <div className="container">
                <Link to = '/' className = "brand-logo">Vickye</Link>
                <SignedInLinks/>
                <SignedOutLinks/>
            </div>
        </nav>
    )
}

export default NavBar