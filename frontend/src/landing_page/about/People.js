import React from "react";

function People() {
  return (
    //m → margin, y → vertical axis (top and bottom)
    <section className="my-5">
      <div className="text-center mb-5">
        <h2 className="fw-bold">People</h2>
      </div>

        {/* {/g → gutter, there will be 24px spacing between all columns in this row.} */}
      <div className="row align-items-center justify-content-center g-4">
        {/* Image */}
        <div className="col-md-4 text-center">
          <img
            src="media/images/MyImageForWebpage.jpg" // replace with actual image path
            alt="Founder"
            className="rounded-circle img-fluid shadow-sm"
            style={{ maxWidth: "250px" }}
          />
          <h5 className="mt-3 mb-1 fw-semibold">Manoj Rohokale</h5>
          <p className="text-muted mb-0">Founder &amp; CEO</p>
        </div>

        {/* Bio */}
        <div className="col-md-6">
          <p className="text-muted">
            Manoj founded <strong>ZenBroker</strong> to overcome the hurdles he
            faced during a decade on the trading desk. Today, ZenBroker is
            redefining how Indians invest—simplifying costs, elevating
            execution, and setting a new standard for transparent, tech-first
            broking.
          </p>
          <p className="text-muted">
            He is currently specializing in{" "}
            <em>Artificial Intelligence and Data Science</em>.
          </p>
          <p className="text-muted">Learing Exploring and Emplemeting is his zen.</p>

          {/* Links */}
          <p className="mb-0">
            Connect on{" "}
            <a
              href="https://www.linkedin.com/in/manoj-rohokale/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-decoration-none"
            >
              LinkedIn
            </a>{" "}
            /{" "}
            <a
              href="https://instagram.com/" // replace with real Instagram link
              target="_blank"
              rel="noopener noreferrer"
              className="text-decoration-none"
            >
              Instagram
            </a>{" "}
            /{" "}
            <a
              href="https://x.com/manoj15094"
              target="_blank"
              rel="noopener noreferrer"
              className="text-decoration-none"
            >
              Twitter
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}

export default People;
