import React from 'react';
import { Link, BrowserRouter } from 'react-router-dom'

const Header=({ userName, isLoggedIn, onLogout })=> {
    return (
        <nav className="navbar navbar-dark bg-dark">
            <div className="container">
            <BrowserRouter>
            <Link>
                <div className="navbar-brand">
                    <span> Student LOGIN and REGISTRATION</span>
                </div>
            </Link>
            </BrowserRouter>
            {isLoggedIn && 
            <h4 className="ml-auto mr-4">
                <span className="badge badge-pill badge-secondary text-capitalize">
                    Welcome {userName}
                </span>
            </h4>}
            {isLoggedIn &&
                <button type ="button" onClick ={onLogout} className="btn btn-outline-warning">
                    Logout| <i className="fas fa-sign-out-all"></i>
                </button>

            }
            </div>
        </nav>
    );
}

export default Header;