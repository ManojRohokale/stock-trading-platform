import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        // Navbar wrapper (fixed on top with shadow & white background)
        <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm sticky-top py-2">
            <div className="container">
                
                {/* Logo on the left side */}
                <Link className="navbar-brand d-flex align-items-center" to="/">
                    <img src="media/images/logo.png" alt="logo" style={{ width: "120px" }} />
                </Link>

                {/* Toggler button (for small screens / mobile menu) */}
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* Collapsible menu (hidden in mobile, visible in large screen) */}
                <div className="collapse navbar-collapse" id="navbarNav">
                    
                    {/* Navigation links (aligned to the right using ms-auto) */}
                    <ul className="navbar-nav ms-auto">
                        
                        {/* Each nav item has margin (mx-2) for spacing */}
                        <li className="nav-item mx-2">
                            <Link className="nav-link" aria-current="page" to="/about">About</Link>
                        </li>
                        <li className="nav-item mx-2">
                            <Link className="nav-link" to="/products">Products</Link>
                        </li>
                        <li className="nav-item mx-2">
                            <Link className="nav-link" to="/pricing">Pricing</Link>
                        </li>
                        <li className="nav-item mx-2">
                            <Link className="nav-link" to="/support">Support</Link>
                        </li>

                        {/* Signup button (styled different to stand out) */}
                        <li className="nav-item ms-lg-4">
                            <Link className="btn btn-primary px-4 rounded-pill" to="/signup">Signup</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
