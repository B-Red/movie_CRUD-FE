import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav class="navbar sticky-top navbar-expand-lg navbar-light bg-light">
            <Link to="/" class="navbar-brand">Brandon's Movie Picks</Link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item active">
                        <Link to="/" class="nav-link">Home</Link>
                    </li>
                    <li class="nav-item">
                        <Link to="/movies" class="nav-link">Movies</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar