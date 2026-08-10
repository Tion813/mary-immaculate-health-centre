import {
    HeartHandshake,
    ShieldCheck,
    UsersRound,
    Stethoscope,
    Accessibility,
    Clock3,
  } from "lucide-react";
  
  function WhyChooseUs() {
    const reasons = [
      {
        icon: HeartHandshake,
        title: "Compassionate Care",
        description:
          "We believe every patient deserves to be treated with dignity, kindness and respect.",
      },
      {
        icon: ShieldCheck,
        title: "Quality Healthcare",
        description:
          "We are committed to providing dependable healthcare services focused on patient wellbeing.",
      },
      {
        icon: UsersRound,
        title: "Family Focused",
        description:
          "Our services support individuals and families through different stages of their healthcare journey.",
      },
      {
        icon: Stethoscope,
        title: "Dedicated Services",
        description:
          "From general care to specialized clinics, we provide a range of services under one roof.",
      },
      {
        icon: Accessibility,
        title: "Accessible Care",
        description:
          "We aim to make essential healthcare services accessible and convenient for our community.",
      },
      {
        icon: Clock3,
        title: "Convenient Clinics",
        description:
          "Regular clinic schedules help patients plan their visits around available services.",
      },
    ];
  
    return (
      <section className="section why-section">
        <div className="container">
          <div className="why-layout">
  
            {/* Left Content */}
            <div className="why-intro">
              <span className="subtitle">Why Choose Us</span>
  
              <h2>
                Caring For Your Health
                <span> Is Our Priority</span>
              </h2>
  
              <p>
                At Mary Immaculate Health Centre, we aim to create a welcoming
                healthcare environment where patients and families can access
                professional services with compassion and respect.
              </p>
  
              <p>
                Whether you need a routine consultation, maternity care,
                specialist clinic or another healthcare service, our team is
                here to support you.
              </p>
  
              <a href="#contact" className="btn btn-green">
                Talk to Our Team
              </a>
            </div>
  
            {/* Reasons */}
            <div className="why-grid">
              {reasons.map((reason) => {
                const Icon = reason.icon;
  
                return (
                  <div className="why-card" key={reason.title}>
                    <div className="why-icon">
                      <Icon size={22} />
                    </div>
  
                    <h3>{reason.title}</h3>
  
                    <p>{reason.description}</p>
                  </div>
                );
              })}
            </div>
  
          </div>
        </div>
      </section>
    );
  }
  
  export default WhyChooseUs;