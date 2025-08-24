import React from "react";

function Hero() {
  return (
    // Full-screen hero section
    <section
      className="container-fluid d-flex align-items-center justify-content-center text-center"
      style={{ minHeight: "calc(100vh - 80px)", backgroundColor: "#f8f9fa" }}
    >
      <div>
        {/* Hero Image */}
        <img
          src="media/images/homeHero.png"
          alt="Hero"
          className="img-fluid mb-4"
          style={{ maxWidth: "800px" }} // Increased size (previously 500px)
        />

        {/* Hero heading */}
        <h4 className=" fw-semibold display-6 mb-3">Invest in everything</h4>

        {/* Subheading / description */}
        <p className=" fw-semibold lead mb-4">
          Online platform to invest in stocks, derivatives, mutual funds, ETFs,
          bonds, and more.
        </p>

        {/* Call-to-action button */}
        <button
          className="btn btn-primary btn-lg px-5 py-8"
          style={{
            borderRadius: "5px"
          }}
        >
          Sign up Now
        </button>
      </div>
    </section>
  );
}

export default Hero;
