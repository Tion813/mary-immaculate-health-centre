import {
    ArrowLeft,
    CheckCircle,
    Phone,
    Clock,
    Stethoscope,
    HeartPulse,
  } from "lucide-react";
  import { services } from "../data/services";
  
  function ServiceDetails() {
    const base = import.meta.env.BASE_URL;
  
    const serviceId = window.location.hash
  .replace("#/services/", "")
  .split("/")
  .filter(Boolean)
  .pop();
  
    const service = services.find((item) => item.id === serviceId);
  
    if (!service) {
      return (
        <main className="service-details-page">
          <div className="container">
            <h1>Service Not Found</h1>
  
            <a href={base} className="btn btn-primary">
              <ArrowLeft size={18} />
              Back to Home
            </a>
          </div>
        </main>
      );
    }
  
    return (
      <main className="service-details-page">
  
        {/* =========================
            SERVICE HERO
        ========================== */}
        <section className="service-details-hero">
          <div className="container">
  
            <a
              href={`${base}#services`}
              className="service-back-link"
            >
              <ArrowLeft size={18} />
              Back to Services
            </a>
  
            <div className="service-details-hero-content">
  
              <div className="service-details-hero-text">
                <span className="subtitle">
                  Mary Immaculate Health Centre
                </span>
  
                <h1>{service.name}</h1>
  
                <p>
                  {service.shortDescription}
                </p>
  
                <div className="service-details-hero-actions">
                  <a
                    href={`${base}#/services/${service.id}/gallery`}
                    className="btn btn-outline"
                  >
                    View Service Gallery
                  </a>

                  <a
                    href={`${base}#contact`}
                    className="btn btn-primary"
                  >
                    Contact Us
                  </a>
                </div>
              </div>
  
              <div className="service-details-hero-image">
                <img
                  src={service.image}
                  alt={service.name}
                />
              </div>
  
            </div>
          </div>
        </section>
  
  
        {/* =========================
            INTRODUCTION
        ========================== */}
        <section className="section section-light">
          <div className="container">
  
            <div className="service-introduction">
  
              <div className="service-introduction-icon">
                <HeartPulse size={30} />
              </div>
  
              <div>
                <span className="subtitle">
                  About This Service
                </span>
  
                <h2>
                  Quality Healthcare With
                  <span> Compassion</span>
                </h2>
  
                <p>{service.description}</p>

<p>
  Our healthcare team works closely with patients
  to understand their needs, provide appropriate
  care and support them throughout their healthcare
  journey.
</p>
              </div>
  
            </div>
  
          </div>
        </section>
  
  
        {/* =========================
            WHAT WE OFFER
        ========================== */}
        <section className="section service-offerings">
          <div className="container">
  
            <div className="section-header">
              <span className="subtitle">
                What We Offer
              </span>
  
              <h2>
                Services Available
                <span> Under {service.name}</span>
              </h2>
  
              <p>
                Our services are designed to meet the
                healthcare needs of our patients in a
                professional and supportive environment.
              </p>
            </div>
  
  
            <div className="service-feature-grid">
  {service.features?.map((feature, index) => {
    const featureName =
      typeof feature === "string"
        ? feature
        : feature.name;

    const featureDescription =
      typeof feature === "string"
        ? "Professional care and support provided by our healthcare team."
        : feature.description;

    return (
      <div
        className="service-feature-card"
        key={featureName}
      >
        <div className="service-feature-number">
          {String(index + 1).padStart(2, "0")}
        </div>

        <div className="service-feature-icon">
          <CheckCircle size={22} />
        </div>

        <div>
          <h3>{featureName}</h3>

          <p>{featureDescription}</p>
        </div>
      </div>
    );
  })}
</div>
  
          </div>
        </section>
  
          {/* =========================
            WHAT TO EXPECT
        ========================== */}
        <section className="section service-expect-section">
          <div className="container">

            <div className="section-header">
              <span className="subtitle">
                Your Care Journey
              </span>

              <h2>
                What to
                <span> Expect</span>
              </h2>

              <p>
                We aim to make your visit to Mary Immaculate
                Health Centre simple, comfortable and focused
                on your healthcare needs.
              </p>
            </div>

            <div className="service-expect-grid">

              <div className="service-expect-card">
                <div className="service-expect-number">
                  01
                </div>

                <h3>Medical Consultation</h3>

                <p>
                  Meet with a healthcare professional to
                  discuss your health concerns and receive
                  an appropriate assessment.
                </p>
              </div>


              <div className="service-expect-card">
                <div className="service-expect-number">
                  02
                </div>

                <h3>Assessment & Testing</h3>

                <p>
                  Where necessary, laboratory services and
                  other assessments may be used to support
                  diagnosis and care.
                </p>
              </div>


              <div className="service-expect-card">
                <div className="service-expect-number">
                  03
                </div>

                <h3>Treatment</h3>

                <p>
                  Receive appropriate treatment, medication
                  or procedures based on your individual
                  healthcare needs.
                </p>
              </div>


              <div className="service-expect-card">
                <div className="service-expect-number">
                  04
                </div>

                <h3>Follow-up Care</h3>

                <p>
                  Where required, you'll receive guidance
                  on follow-up visits and continued
                  monitoring of your health.
                </p>
              </div>

            </div>

          </div>
        </section>
  
        {/* =========================
            WHY CHOOSE US
        ========================== */}
        <section className="section section-light">
          <div className="container">
  
            <div className="section-header">
              <span className="subtitle">
                Why Choose Us
              </span>
  
              <h2>
                Care You Can
                <span> Trust</span>
              </h2>
            </div>
  
  
            <div className="service-benefits-grid">
  
              <div className="service-benefit">
                <div className="service-benefit-icon">
                  <Stethoscope size={24} />
                </div>
  
                <h3>Professional Care</h3>
  
                <p>
                  Our patients receive care from
                  dedicated healthcare professionals.
                </p>
              </div>
  
  
              <div className="service-benefit">
                <div className="service-benefit-icon">
                  <HeartPulse size={24} />
                </div>
  
                <h3>Patient Focused</h3>
  
                <p>
                  We place the needs, dignity and
                  wellbeing of our patients first.
                </p>
              </div>
  
  
              <div className="service-benefit">
                <div className="service-benefit-icon">
                  <Clock size={24} />
                </div>
  
                <h3>Convenient Access</h3>
  
                <p>
                  We aim to make essential healthcare
                  services accessible to our community.
                </p>
              </div>
  
            </div>
  
          </div>
        </section>
  
  
        {/* =========================
            CONTACT CTA
        ========================== */}
        <section className="service-contact-section">
          <div className="container">
  
            <div className="service-contact-card">
  
              <div>
                <span className="subtitle">
                  Need Healthcare?
                </span>
  
                <h2>
                  We're Here to
                  <span> Help You</span>
                </h2>
  
                <p>
                  Contact Mary Immaculate Health Centre
                  for more information about our{" "}
                  {service.name.toLowerCase()}.
                </p>
              </div>
  
  
              <div className="service-contact-actions">
  
                <a
                  href={`${base}#contact`}
                  className="btn btn-primary"
                >
                  Contact Us
                </a>
  
                <a
                  href="tel:+254702853787"
                  className="btn btn-outline"
                >
                  <Phone size={18} />
                  Call Us
                </a>
  
              </div>
  
            </div>
  
          </div>
        </section>
  
  
        {/* =========================
    BACK TO SERVICES
========================== */}

<section className="service-back-section">
  <div className="container">

    <a
      href={`${base}#services`}
      className="service-back-link"
    >
      <ArrowLeft size={18} />
      Explore All Services
    </a>

  </div>
</section>
  
      </main>
    );
  }
  
  export default ServiceDetails;
