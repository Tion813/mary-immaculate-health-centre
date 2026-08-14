import { useState } from "react";
import emailjs from "@emailjs/browser";
import {
  CalendarDays,
  Clock3,
  Mail,
  Phone,
  User,
  Send,
  CheckCircle2,
} from "lucide-react";

function AppointmentSection() {
  const services = [
    "Outpatient Services",
    "Inpatient Services",
    "Maternity Services",
    "Theatre Services",
    "Special Clinics",
    "Radiography Services",
    "VCT Services",
    "Dental Services",
    "Optical Services",
  ];

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    date: "",
    time: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.phone.trim() ||
      !formData.service ||
      !formData.date ||
      !formData.time
    ) {
      alert("Please complete all required fields.");
      return;
    }

    try {
      setIsSending(true);

      const templateParams = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        service: formData.service,
        date: formData.date,
        time: formData.time,
        message: formData.message || "No additional information provided.",
      };

      await emailjs.send(
        "service_ak3azyb",
        "template_k11u30w",
        templateParams,
        "xbMIbNk5kKY7iMdxb"
      );

      setSubmitted(true);

      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        date: "",
        time: "",
        message: "",
      });
    } catch (error) {
      console.error("Appointment EmailJS error:", error);

      alert(
        "We couldn't submit your appointment request right now. Please try again later."
      );
    } finally {
      setIsSending(false);
    }
  };

  if (submitted) {
    return (
      <section
        className="section section-light appointment-section"
        id="appointments"
      >
        <div className="container">
          <div className="appointment-success">
            <div className="appointment-success-icon">
              <CheckCircle2 size={48} />
            </div>

            <h2>Appointment Request Received</h2>

            <p>
              Thank you for contacting Mary Immaculate Health Centre. Your
              appointment request has been received. Our team will review your
              request and contact you to confirm the appointment.
            </p>

            <button
              type="button"
              className="appointment-another-button"
              onClick={() => setSubmitted(false)}
            >
              Request Another Appointment
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      className="section section-light appointment-section"
      id="appointments"
    >
      <div className="container">
        <div className="section-header">
          <span className="subtitle">Appointments</span>

          <h2>
            Book an
            <span> Appointment</span>
          </h2>

          <p>
            Request an appointment with Mary Immaculate Health Centre. Choose
            your preferred service, date and time and our team will get back
            to you to confirm your appointment.
          </p>
        </div>

        <div className="appointment-wrapper">
          <div className="appointment-info">
            <div className="appointment-info-icon">
              <CalendarDays size={30} />
            </div>

            <h3>Request an Appointment</h3>

            <p>
              Complete the form and provide your preferred appointment details.
              Our healthcare team will review your request and contact you for
              confirmation.
            </p>

            <div className="appointment-info-item">
              <CalendarDays size={20} />

              <div>
                <strong>Preferred Date</strong>
                <span>Select a convenient date for your visit.</span>
              </div>
            </div>

            <div className="appointment-info-item">
              <Clock3 size={20} />

              <div>
                <strong>Preferred Time</strong>
                <span>Tell us the time you'd prefer to visit.</span>
              </div>
            </div>

            <div className="appointment-info-item">
              <Phone size={20} />

              <div>
                <strong>We'll Contact You</strong>
                <span>
                  Our team may contact you to confirm the appointment.
                </span>
              </div>
            </div>
          </div>

          <div className="appointment-form-card">
            <form onSubmit={handleSubmit}>
              <div className="appointment-form-row">
                <div className="appointment-field">
                  <label htmlFor="appointment-name">
                    Full Name <span className="required">*</span>
                  </label>

                  <div className="appointment-input-wrapper">
                    <User size={18} />

                    <input
                      id="appointment-name"
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                      required
                    />
                  </div>
                </div>

                <div className="appointment-field">
                  <label htmlFor="appointment-phone">
                    Phone Number <span className="required">*</span>
                  </label>

                  <div className="appointment-input-wrapper">
                    <Phone size={18} />

                    <input
                      id="appointment-phone"
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="e.g. 0712 345 678"
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="appointment-field">
                <label htmlFor="appointment-email">
                  Email Address <span className="required">*</span>
                </label>

                <div className="appointment-input-wrapper">
                  <Mail size={18} />

                  <input
                    id="appointment-email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    required
                  />
                </div>
              </div>

              <div className="appointment-field">
                <label htmlFor="appointment-service">
                  Service / Clinic <span className="required">*</span>
                </label>

                <select
                  id="appointment-service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select a service</option>

                  {services.map((service) => (
                    <option key={service} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
              </div>

              <div className="appointment-form-row">
                <div className="appointment-field">
                  <label htmlFor="appointment-date">
                    Preferred Date <span className="required">*</span>
                  </label>

                  <div className="appointment-input-wrapper">
                    <CalendarDays size={18} />

                    <input
                      id="appointment-date"
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      min={new Date().toISOString().split("T")[0]}
                      required
                    />
                  </div>
                </div>

                <div className="appointment-field">
                  <label htmlFor="appointment-time">
                    Preferred Time <span className="required">*</span>
                  </label>

                  <div className="appointment-input-wrapper">
                    <Clock3 size={18} />

                    <input
                      id="appointment-time"
                      type="time"
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="appointment-field">
                <label htmlFor="appointment-message">
                  Additional Information
                </label>

                <textarea
                  id="appointment-message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us anything else we should know about your appointment..."
                  rows="5"
                />
              </div>

              <p className="appointment-disclaimer">
                <strong>Note:</strong> This form sends an appointment request.
                Your appointment is not confirmed until our healthcare team
                contacts you.
              </p>

              <button
                type="submit"
                className="appointment-submit-button"
                disabled={isSending}
              >
                {isSending ? (
                  <>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    <span>Request Appointment</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AppointmentSection;