import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = (props) => {
    return (
        <nav className='navbar sticky-top navbar-expand-lg navbar-light bg-light'>
            <Link to='/' className='navbar-brand'>Red's Ratings</Link>
            <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarNav' aria-controls='navbarNav' aria-expanded='false' aria-label='Toggle navigation'>
                <span className='navbar-toggler-icon'></span>
            </button>
            <div className='collapse navbar-collapse' id='navbarNav'>
                <ul className='navbar-nav'>
                    <li className='nav-item'>
                        <Link to='/' className='nav-link'>Home</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/movies' className='nav-link'>Movies</Link>
                    </li>
                </ul>
            </div>
            <button type='button' className='button' onClick={props.addMovie}> Add Movie </button> 
            
        </nav>
    )
}

export default Navbar