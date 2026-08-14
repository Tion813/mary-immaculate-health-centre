import { useState } from "react";
import emailjs from "@emailjs/browser";
import { Star, Send, CheckCircle } from "lucide-react";

function FeedbackSection() {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    feedbackType: "",
    message: "",
    contactPermission: "No",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    if (rating === 0) {
      alert("Please select a star rating.");
      return;
    }
  
    if (!formData.name.trim()) {
      alert("Please enter your name.");
      return;
    }
  
    if (!formData.service) {
      alert("Please select the service you used.");
      return;
    }
  
    if (!formData.feedbackType) {
      alert("Please select the type of feedback.");
      return;
    }
  
    if (!formData.message.trim()) {
      alert("Please enter your feedback.");
      return;
    }
  
    try {
      const templateParams = {
        rating: rating,
        name: formData.name,
        email: formData.email || "Not provided",
        phone: formData.phone || "Not provided",
        service: formData.service,
        feedback_type: formData.feedbackType,
        contact_permission: formData.contactPermission,
        message: formData.message,
      };
  
      await emailjs.send(
        "service_ak3azyb",
        "template_8qp94yp",
        templateParams,
        "xbMIbNk5kKY7iMdxb"
      );
  
      console.log("Feedback sent successfully.");
  
      setSubmitted(true);
  
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        feedbackType: "",
        message: "",
        contactPermission: "No",
      });
  
      setRating(0);
      setHoverRating(0);
  
    } catch (error) {
      console.error("EmailJS error:", error);
  
      alert(
        "We couldn't submit your feedback right now. Please try again later."
      );
    }
  };

  return (
    <section className="section feedback-section" id="feedback">
      <div className="container">

        {/* HEADER */}
        <div className="section-header">
          <span className="subtitle">Your Experience Matters</span>

          <h2>
            Customer
            <span> Feedback</span>
          </h2>

          <p>
            We value your experience at Mary Immaculate Health Centre.
            Your feedback helps us improve the quality of care and services
            we provide to our patients and community.
          </p>
        </div>

        <div className="feedback-wrapper">

          {/* LEFT SIDE */}
          <div className="feedback-intro">

            <div className="feedback-intro-icon">
              <Star size={30} />
            </div>

            <h3>How Was Your Experience?</h3>

            <p>
              Tell us about your experience with our healthcare services.
              Whether you had a positive experience or believe there is
              something we can improve, we'd love to hear from you.
            </p>

            <div className="feedback-note">
              <strong>Your privacy matters.</strong>

              <p>
                Please avoid including confidential medical information
                in your feedback.
              </p>
            </div>

          </div>

          {/* FORM */}
          <div className="feedback-form-card">

            {submitted ? (
              <div className="feedback-success">

                <div className="feedback-success-icon">
                  <CheckCircle size={52} />
                </div>

                <h3>Thank You for Your Feedback!</h3>

                <p>
                  We appreciate you taking the time to share your
                  experience with Mary Immaculate Health Centre.
                </p>

                <button
                  type="button"
                  className="feedback-another-button"
                  onClick={() => setSubmitted(false)}
                >
                  Send Another Feedback
                </button>

              </div>
            ) : (
              <form onSubmit={handleSubmit}>

                {/* RATING */}
                <div className="feedback-field">
                  <label>
                    Rate Your Experience
                    <span className="required">*</span>
                  </label>

                  <div
                    className="star-rating"
                    onMouseLeave={() => setHoverRating(0)}
                  >
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        className="star-button"
                        onClick={() => setRating(star)}
                        onMouseEnter={() => setHoverRating(star)}
                        aria-label={`Rate ${star} out of 5 stars`}
                      >
                        <Star
                          size={32}
                          fill={
                            star <= (hoverRating || rating)
                              ? "currentColor"
                              : "none"
                          }
                        />
                      </button>
                    ))}
                  </div>

                  <small>
                    {rating === 0
                      ? "Select a rating from 1 to 5 stars."
                      : `You selected ${rating} out of 5 stars.`}
                  </small>
                </div>

                {/* NAME */}
                <div className="feedback-form-row">

                  <div className="feedback-field">
                    <label htmlFor="feedback-name">
                      Your Name
                      <span className="required">*</span>
                    </label>

                    <input
                      id="feedback-name"
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your name"
                      required
                    />
                  </div>

                  <div className="feedback-field">
                    <label htmlFor="feedback-email">
                      Email Address
                    </label>

                    <input
                      id="feedback-email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email"
                    />
                  </div>

                </div>

                {/* PHONE */}
                <div className="feedback-form-row">

                  <div className="feedback-field">
                    <label htmlFor="feedback-phone">
                      Phone Number
                    </label>

                    <input
                      id="feedback-phone"
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Enter your phone number"
                    />
                  </div>

                  {/* SERVICE */}
                  <div className="feedback-field">
                    <label htmlFor="feedback-service">
                      Service Used
                      <span className="required">*</span>
                    </label>

                    <select
                      id="feedback-service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                    >
                      <option value="">
                        Select a service
                      </option>

                      <option value="Outpatient">
                        Outpatient Services
                      </option>

                      <option value="Inpatient">
                        Inpatient Services
                      </option>

                      <option value="Maternity">
                        Maternity Services
                      </option>

                      <option value="Theatre">
                        Theatre Services
                      </option>

                      <option value="Special Clinics">
                        Special Clinics
                      </option>

                      <option value="Radiography">
                        Radiography Services
                      </option>

                      <option value="VCT">
                        VCT Services
                      </option>

                      <option value="Dental">
                        Dental Services
                      </option>

                      <option value="Optical">
                        Optical Services
                      </option>

                      <option value="Canteen">
                        Hospital Canteen
                      </option>

                      <option value="Other">
                        Other
                      </option>
                    </select>
                  </div>

                </div>

                {/* FEEDBACK TYPE */}
                <div className="feedback-field">
                  <label htmlFor="feedback-type">
                    Type of Feedback
                    <span className="required">*</span>
                  </label>

                  <select
                    id="feedback-type"
                    name="feedbackType"
                    value={formData.feedbackType}
                    onChange={handleChange}
                    required
                  >
                    <option value="">
                      Select feedback type
                    </option>

                    <option value="Compliment">
                      Compliment
                    </option>

                    <option value="General Feedback">
                      General Feedback
                    </option>

                    <option value="Service Feedback">
                      Service Feedback
                    </option>

                    <option value="Complaint">
                      Complaint
                    </option>

                    <option value="Suggestion">
                      Suggestion
                    </option>

                    <option value="Other">
                      Other
                    </option>
                  </select>
                </div>

                {/* MESSAGE */}
                <div className="feedback-field">
                  <label htmlFor="feedback-message">
                    Your Feedback
                    <span className="required">*</span>
                  </label>

                  <textarea
                    id="feedback-message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your experience..."
                    rows="6"
                    required
                  />
                </div>

                {/* CONTACT PERMISSION */}
                <div className="feedback-field">
                  <label htmlFor="contact-permission">
                    May we contact you regarding your feedback?
                  </label>

                  <select
                    id="contact-permission"
                    name="contactPermission"
                    value={formData.contactPermission}
                    onChange={handleChange}
                  >
                    <option value="No">
                      No
                    </option>

                    <option value="Yes">
                      Yes
                    </option>
                  </select>
                </div>

                {/* SUBMIT */}
                <button
                  type="submit"
                  className="feedback-submit-button"
                >
                  <Send size={18} />
                  Submit Feedback
                </button>

              </form>
            )}

          </div>

        </div>
      </div>
    </section>
  );
}

export default FeedbackSection;