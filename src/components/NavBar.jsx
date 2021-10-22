import React from 'react';
import { Link } from 'react-scroll';

export default function NavBar() {
    return (
        <div className='align-nav'>
        <nav className='uppercase'>
            <div>
                <Link smooth={true} duration={500} to='home'><h1>Logo</h1></Link>
                <Link smooth={true} duration={500} to='home'><h2>About</h2></Link>
                <Link smooth={true} duration={500} to='community'><h2>Community</h2></Link>
                <Link smooth={true} duration={500} to='location'><h2>Location</h2></Link>
                <Link smooth={true} duration={500} to='menu'><h2>Our menu</h2></Link>
                <Link smooth={true} duration={500} to='recipes'><h2>Recipes</h2></Link>
            </div>

            <div className='nav-contacts'>
                <Link smooth={true} duration={500} to='contact'><h2>Contact</h2></Link>
                <Link to='home'><h2>Login</h2></Link>
            </div>

            {/* <div>
                <h1>Logo</h1>
                <h2>About</h2>
                <h2>Community</h2>
                <h2>Location</h2>
                <h2>Our menu</h2>
                <h2>Recipes</h2>
            </div>

            <div className='nav-contacts'>
                <h2>Contact</h2>
               <h2>Login</h2>
            </div> */}
        </nav>
        </div>
    )
}
