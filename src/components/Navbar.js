import React from 'react'
import { NavLink } from 'react-router-dom'
import '../css/Navbar.css'

const Navbar = () => {
    return (
        <>
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-light">
                    <div className="container-fluid">
                        <b>
                            <NavLink exact className="navbar-brand" to="/">Quick Do</NavLink>
                        </b>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <NavLink exact className="nav-link " aria-current="page" to="/how-to-use">How to use?</NavLink>
                                </li>
                            </ul>
                            <NavLink to="/register" className="btn btn-outline-primary mx-2 mx-2" type="submit">Register</NavLink>
                            <NavLink to="/login" className="btn btn-outline-primary mx-2" type="submit">Log In</NavLink>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    )
}

export default Navbar;
