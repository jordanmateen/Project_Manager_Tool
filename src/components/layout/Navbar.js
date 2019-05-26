import React from 'react'
import { Link } from 'react-router-dom'
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';

const NavBar =() => {
    return(
        <nav className="nav-wrapper navvy">
            <div className="container">
                <img class ="logo"src = {require('../../img/nut.png')}  alt ='nut'/>
                <Link to = '/' className = "brand-logo">Squirrel</Link>
                <SignedInLinks/>
                <SignedOutLinks/>
            </div>
        </nav>
    )
}

export default NavBar