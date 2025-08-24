import React from "react";
import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer className="bg-light text-dark pt-5 pb-4 mt-5 border-top">
            <div className="container text-center text-md-start">
                <div className="row">
                    
                    {/* Logo + About */}
                    <div className="col-md-4 col-lg-4 col-xl-3 mx-auto mb-4">
                        {/* Logo */}
                        <Link to="/" className="d-inline-block mb-3">
                            <img 
                                src="media/images/logo.png" 
                                alt="logo" 
                                style={{ width: "140px" }} 
                            />
                        </Link>
                        <p style={{ fontSize: "14px", color: "#555" }}>
                            India's modern investment platform with zero brokerage on equity delivery and direct mutual funds.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                        <h6 className="fw-bold mb-3">Quick Links</h6>
                        <ul className="list-unstyled">
                            <li><Link to="about" className="text-dark text-decoration-none d-block mb-2">About</Link></li>
                            <li><Link to="products" className="text-dark text-decoration-none d-block mb-2">Products</Link></li>
                            <li><Link to="pricing" className="text-dark text-decoration-none d-block mb-2">Pricing</Link></li>
                            <li><Link to="support" className="text-dark text-decoration-none d-block">Support</Link></li>
                        </ul>
                    </div>

                    {/* Resources */}
                    <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                        <h6 className="fw-bold mb-3">Resources</h6>
                        <ul className="list-unstyled">
                            <li><Link to="/blog" className="text-dark text-decoration-none d-block mb-2">Blog</Link></li>
                            <li><Link to="/careers" className="text-dark text-decoration-none d-block mb-2">Careers</Link></li>
                            <li><Link to="/press" className="text-dark text-decoration-none d-block mb-2">Press</Link></li>
                            <li><Link to="/contact" className="text-dark text-decoration-none d-block">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Social Media */}
                    <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mb-4">
                        <h6 className="fw-bold mb-3">Follow Us</h6>
                        <a href="#" className="me-3 text-dark fs-5"><i className="fa fa-facebook"></i></a>
                        <a href="#" className="me-3 text-dark fs-5"><i className="fa fa-twitter"></i></a>
                        <a href="#" className="me-3 text-dark fs-5"><i className="fa fa-instagram"></i></a>
                        <a href="#" className="text-dark fs-5"><i className="fa fa-linkedin"></i></a>
                    </div>
                </div>
            </div>

            {/* Bottom Copyright */}
            <div className="text-center mt-4">
                <p style={{ fontSize: "14px", margin: "0", color: "#666" }}>
                    © {new Date().getFullYear()} ZenBroker. All Rights Reserved.
                </p>
            </div>
        </footer>
    );
}

export default Footer;
