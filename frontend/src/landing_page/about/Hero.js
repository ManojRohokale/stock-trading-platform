import React from "react";

function Hero() {
    return (
        //p → padding, y → vertical direction (top & bottom)
        <section className="container py-5">
            {/* ===== About Us Section ===== */ }
            <div className="text-center mb-5">
                <h2 className="fw-bold display-6 mb-3">About Us</h2>
                <p className="lead text-muted mx-auto" style={{ maxWidth: "720px" }}>
                    We’re building a next-generation trading platform designed to make
                    markets simpler, faster, and more inclusive. What started as a small
                    idea to reduce friction for everyday investors has grown into a
                    product-first company built on clarity, fair pricing, and reliable
                    technology.
                </p>
            </div>

            {/* ===== Two-column content ===== */}
            <div className="row g-4 align-items-start">
                {/* Core Technology, md → breakpoint = medium devices (≥768px width). */}
                <div className="col-md-6">
                    <div className="p-4 bg-white shadow-sm rounded h-100">
                        <h5 className="fw-semibold mb-3">Our Core Technology</h5>
                        <p className="text-muted mb-0">
                            Our in-house stack—spanning matching engines, risk systems, and
                            data pipelines—is engineered for scale and resilience. We prepare
                            for peak market activity with autoscaling infrastructure,
                            active-active regions, and continuous failover drills.
                            <br />
                            <br />
                            Security is embedded at every layer: least-privilege access,
                            end-to-end encryption, and 24/7 monitoring. Data—from tick-level
                            feeds to fundamentals—is delivered curated and consistent,
                            empowering traders to act with clarity.
                            <br />
                            <br />
                            We ship thoughtful improvements: faster charts, richer analytics,
                            smarter orders. Every release is measured, reliable, and built on
                            long-term trust.
                        </p>
                    </div>
                </div>

                {/* Empowering Traders */}
                <div className="col-md-6">
                    <div className="p-4 bg-white shadow-sm rounded h-100">
                        <h5 className="fw-semibold mb-3">Empowering Traders</h5>
                        <p className="text-muted mb-0">
                            We believe informed decisions lead to better outcomes. Our
                            platform offers explainers, strategy playbooks, and guided
                            walkthroughs—alongside paper trading and sandbox APIs—to let
                            traders learn, test, and grow with confidence.
                            <br />
                            <br />
                            Risk is treated with discipline: dynamic margining, pre-trade
                            checks, and transparent P&amp;L reporting keep positions aligned
                            with intent. Clear disclosures ensure risk is visible—not hidden.
                            <br />
                            <br />
                            We build in close collaboration with our users. Support teams work
                            directly with product teams, closing the loop between feedback and
                            features. Every improvement is tracked, documented, and shipped
                            with transparency.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;
