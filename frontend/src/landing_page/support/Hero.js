import React from "react";

function Hero() {
    return (
        <section className="bg-light py-5 text-center">
            <div className="container">
                <h1 className="display-4 fw-bold mb-3">Support Center</h1>
                <p className="fs-5 text-muted mb-4">
                    Need help with your trading account, transactions, or platform usage?
                    Submit a ticket and our support team will reach out to you shortly.
                </p>
                <a href="#create-ticket" className="btn btn-primary btn-lg">
                    Create Support Ticket
                </a>
            </div>
        </section>
    );
}

export default Hero;