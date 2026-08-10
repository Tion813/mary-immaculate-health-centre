import { ArrowRight, Stethoscope } from "lucide-react";
import { services } from "../data/services";
import ServiceCard from "./ServiceCard";

function ServicesSection() {
  return (
    <section className="section section-light services-section" id="services">
      <div className="container">

        <div className="section-header">
          <span className="subtitle">Our Services</span>

          <h2>
            Healthcare Services
            <span> For You & Your Family</span>
          </h2>

          <p>
            We offer a range of healthcare services designed to support
            individuals and families at different stages of their healthcare
            journey.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
            />
          ))}
        </div>

        <div className="services-bottom">
          <div className="services-note">
            <div className="services-note-icon">
              <Stethoscope size={22} />
            </div>

            <div>
              <strong>Need more information?</strong>
              <p>
                Contact our team directly for more information about our
                healthcare services.
              </p>
            </div>
          </div>

          <a href="#contact" className="btn btn-primary">
            Contact Us
            <ArrowRight size={18} />
          </a>
        </div>

      </div>
    </section>
  );
}

export default ServicesSection;