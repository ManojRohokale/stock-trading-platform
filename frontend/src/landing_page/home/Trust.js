import React from "react";

function Trust() {
  return (
    // Using <section> for semantic structure instead of plain <div>
    <section className="container p-5">
      {/* Bootstrap row to split into two columns */}
      <div className="row align-items-center">
        
        {/* Left Column - Text Content */}
        <div className="col-lg-6">
          {/* Main heading */}
          <h4 className="mb-5 fw-bold">Trust with confidence</h4>

          {/* Article 1: Customer-first */}
          <article className="mb-4">
            {/* Section heading */}
            <h5 className="fw-semibold">Customer-first always</h5>
            {/* Paragraph text (no <br>, spacing handled by Bootstrap margin classes) */}
            <p>
              That's why 1.6+ crore customers trust ZenBroker with ~ ₹6 lakh
              crores of equity investments, making us India’s largest broker,
              contributing to 15% of daily retail exchange volumes in India.
            </p>
          </article>

          {/* Article 2: No spam */}
          <article className="mb-4">
            <h5 className="fw-semibold">No spam or gimmicks</h5>
            <p>
              No gimmicks, spam, "gamification", or annoying push notifications.
              High quality apps that you use at your pace, the way you like.{" "}
              {/* Link with Bootstrap's text-decoration-none */}
              <a href="#" className="text-decoration-none">
                Our philosophies
              </a>
              .
            </p>
          </article>

          {/* Article 3: Ecosystem */}
          <article className="mb-4">
            <h5 className="fw-semibold">The Zerodha universe</h5>
            <p>
              Not just an app, but a whole ecosystem. Our investments in 30+
              fintech startups offer you tailored services specific to your
              needs.
            </p>
          </article>

          {/* Article 4: Do better */}
          <article className="mb-4">
            <h5 className="fw-semibold">Do better with money</h5>
            <p>
              With initiatives like Nudge and Kill Switch, we don't just
              facilitate transactions, but actively help you do better with your
              money.
            </p>
          </article>
        </div>

        {/* Right Column - Image + Link */}
        <div className="col-lg-6 text-center">
          {/* Image - responsive with Bootstrap's img-fluid */}
          <img
            src="media/images/ecosystem.png"
            alt="Ecosystem"
            className="img-fluid rounded"
          />
          
          {/* CTA link below image */}
          <div className="mt-3">
            <a href="#" className="text-decoration-none fw-semibold">
              Explore our products{" "}
              {/* FontAwesome icon (fixed className for React) */}
              <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Trust;
