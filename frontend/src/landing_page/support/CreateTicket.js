import React, { useState } from "react";

// Component: CreateTicket (Support Ticket Form)
const CreateTicket = () => {
  // useState hook → stores form input values in state
  const [formData, setFormData] = useState({
    name: "",    // user's full name
    email: "",   // user's email
    subject: "", // issue subject/title
    message: "", // detailed description
  });

  // Handle input changes → updates state dynamically for each field
  const handleChange = (e) => {
    // Spread operator keeps old values, only updates the changed field
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault(); // prevent page reload
    alert("✅ Ticket submitted successfully!"); // feedback message

    // In real application → send formData to backend API here

    // Reset form fields after submission
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <section id="create-ticket" className="py-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="card shadow border-0">
              <div className="card-body p-4">
                {/* Form heading */}
                <h3 className="fw-bold mb-4 text-center">
                  Create Support Ticket
                </h3>

                {/* Form starts here */}
                <form onSubmit={handleSubmit}>

                  {/* Name Input */}
                  <div className="mb-3">
                    <label className="form-label fw-semibold">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="form-control"
                      placeholder="Enter your full name"
                      required
                    />
                  </div>

                  {/* Email Input */}
                  <div className="mb-3">
                    <label className="form-label fw-semibold">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="form-control"
                      placeholder="Enter your email"
                      required
                    />
                  </div>

                  {/* Subject Input */}
                  <div className="mb-3">
                    <label className="form-label fw-semibold">Subject</label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="form-control"
                      placeholder="Issue subject"
                      required
                    />
                  </div>

                  {/* Message Textarea */}
                  <div className="mb-3">
                    <label className="form-label fw-semibold">Description</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      className="form-control"
                      rows="5"
                      placeholder="Describe your issue in detail..."
                      required
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <div className="d-grid">
                    <button type="submit" className="btn btn-primary btn-lg">
                      Submit Ticket
                    </button>
                  </div>
                </form>
                {/* Form ends here */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Export component so it can be used in other files
export default CreateTicket;
