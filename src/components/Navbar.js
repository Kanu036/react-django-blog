import React from 'react';
import { Link, NavLink  } from 'react-router-dom';

const Navbar = () => (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <Link className="navbar-brand" to="/">Blog Tales</Link>
            <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <NavLink className="nav-link" to='/'>Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to='/blog'>Blog</NavLink> 
                    </li>
                </ul>
            </div>
    </nav>
);

export default Navbar;