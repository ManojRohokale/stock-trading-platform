import React from "react";

function OpenAccount() {
    return (
        <div className="container align-items-center justify-content-center text-center p-5"
            style={{backgroundColor: "#f8f9fa" }}>

            <h1 className=" fw-semibold display-6 mb-3">Open a ZenBroker account</h1>

            {/* Subheading / description */}
            <p className=" fw-semibold lead mb-4">
                Modern platforms and apps, ₹0 investments, and ₹0  Free equity delivery and direct mutual funds.
            </p>

            {/* Call-to-action button */}
            <button
                className="btn btn-primary btn-lg px-5 py-8"
                style={{
                    borderRadius: "5px"
                }}
            >
                Sign up for free
            </button>
        </div>
    );
}

export default OpenAccount;