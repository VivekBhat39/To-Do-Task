import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <div>

            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <Link to="/" className="navbar-brand">DashBoard</Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-mdb-toggle="collapse"
                        data-mdb-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <i className="fas fa-bars"></i>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link to="/" className="nav-link active" aria-current="page">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/contact"className="nav-link">Contact</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/task" className='nav-link'>Task</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}
