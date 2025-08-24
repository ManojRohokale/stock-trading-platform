import React from "react";

function Pricing() {
  return (
    // Section for Pricing (better semantic meaning than just <div>)
    <section className="container p-5">
      {/* Row for overall layout */}
      <div className="row">
        
        {/* Left Column - Pricing Info */}
        <div className="col-lg-4">
          {/* Heading */}
          <h4 className="mb-3 fw-bold">Unbeatable pricing</h4>
          {/* Supporting text */}
          <p>
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>
          {/* Link with icon */}
          <a href="#" className="text-decoration-none fw-semibold">
            See pricing{" "}
            <i className="fa fa-arrow-right" aria-hidden="true"></i>
          </a>
        </div>

        {/* Middle Spacer Column */}
        <div className="col-lg-2"></div>

        {/* Right Column - Pricing Boxes */}
        <div className="col-lg-6">
          <div className="row text-center">
            
            {/* Box 1: Free account opening */}
            <div className="col-6 p-3 border rounded">
              {/* Highlighted price (yellow color via inline style or Bootstrap text-warning) */}
              <h3 style={{ color: "#e7e024ff" }}>₹0</h3>
              <p className="mb-0">
                Free account <br /> opening
              </p>
            </div>

            {/* Box 2: Free delivery & mutual funds */}
            <div className="col-6 p-3 border rounded">
              <h3 style={{ color: "#e7e024ff" }}>₹0</h3>
              <p className="mb-0">
                Free equity delivery <br /> and direct mutual funds
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default Pricing;
