import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
    return (
        <div
            className="d-flex flex-column align-items-center justify-content-center text-center"
            style={{ minHeight: "100vh", backgroundColor: "#f8f9fa" }}
        >
            {/* Error Code */}
            <h1 className="display-1 fw-bold text-primary">404</h1>

            {/* Message */}
            <h2 className="mb-3 fw-semibold">Page Not Found</h2>
            <p className="text-muted mb-4">
                Oops! The page you are looking for doesn’t exist or has been moved.
            </p>

            {/* Go Back Button */}
            <Link to="/" className="btn btn-primary px-4 rounded-pill">
                Go Home
            </Link>
        </div>
    );
}

export default NotFound;
