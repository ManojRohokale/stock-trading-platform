import React from "react";

function Hero() {
    return (

        <section className="container py-5">
            {/* Section Header */}
            <div className="text-center mb-5">
                <h1 className="display-4 fw-bold">Charges</h1>
                {/* fs = font size */ }
                <p className="text-muted fs-5">List of all charges and taxes</p>
            </div>

            {/* Charges Grid */}
            <div className="row g-4">
                {/* Card 1 */}
                <div className="col-md-4">
                    <div className="card h-100 shadow-sm border-0 text-center p-4">
                        <img
                            src="media/images/pricing0.svg"
                            alt="PriceImage"
                            className="img-fluid mx-auto mb-3"
                            style={{ maxWidth: "250px" }}
                        />
                        <h5 className="fw-semibold">Free equity delivery</h5>
                        <p className="text-muted">
                            All equity delivery investments (NSE, BSE) are absolutely free — ₹0 brokerage.
                        </p>
                    </div>
                </div>

                {/* Card 2 */}
                <div className="col-md-4">
                    <div className="card h-100 shadow-sm border-0 text-center p-4">
                        <img
                            src="media/images/intradayTrades.svg"
                            alt="PriceImage"
                            className="img-fluid mx-auto mb-3"
                            style={{ maxWidth: "250px" }}
                        />
                        <h5 className="fw-semibold">Intraday and F&O trades</h5>
                        <p className="text-muted">
                            Flat ₹20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.
                        </p>
                    </div>
                </div>

                {/* Card 3 */}
                <div className="col-md-4">
                    <div className="card h-100 shadow-sm border-0 text-center p-4">
                        <img
                            src="media/images/pricing0.svg"
                            alt="PriceImage"
                            className="img-fluid mx-auto mb-3"
                            style={{ maxWidth: "250px" }}
                        />
                        <h5 className="fw-semibold">Free direct MF</h5>
                        <p className="text-muted">
                            All direct mutual fund investments are absolutely free — ₹0 commissions & DP charges.
                        </p>
                    </div>
                </div>
            </div>
        </section>


    );
}

export default Hero;