import { CheckCircle, HeartPulse, Users, ShieldCheck } from "lucide-react";
import { siteConfig } from "../data/siteConfig";

function AboutSection() {
  const highlights = [
    {
      icon: HeartPulse,
      title: "Compassionate Care",
      text: "We put the needs and wellbeing of our patients first.",
    },
    {
      icon: ShieldCheck,
      title: "Quality Services",
      text: "We strive to provide reliable and professional healthcare services.",
    },
    {
      icon: Users,
      title: "Patient Focused",
      text: "Our approach is centred around patients, families and the community.",
    },
  ];

  return (
    <section className="section about-section" id="about">
      <div className="container">
        <div className="about-grid">

          {/* Image */}
          <div className="about-image-wrapper">
            <div className="about-image-main">
              <img
                src="images/hospital/hospital.jpeg"
                alt="Mary Immaculate Health Centre"
              />
            </div>

            <div className="about-experience-card">
              <CheckCircle size={22} />
              <div>
                <strong>Healthcare</strong>
                <span>With Compassion</span>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="about-content">
            <div className="section-header about-header">
              <span className="subtitle">About Us</span>

              <h2>
                Healthcare You Can
                <span> Trust</span>
              </h2>
            </div>

            <p className="about-intro">
              {siteConfig.hospital.description}
            </p>

            <p>
              We aim to create a welcoming healthcare environment where
              individuals and families can access essential medical services
              with dignity, care and professionalism.
            </p>
            <p>
  Mary Immaculate Health Centre is a healthcare facility serving individuals
  and families in Bahati, Nairobi. We provide accessible and compassionate
  healthcare services, including outpatient and inpatient care, maternity,
  dental and optical services, theatre services, and specialist clinics.
</p>

            <div className="about-highlights">
              {highlights.map((item) => {
                const Icon = item.icon;

                return (
                  <div className="about-highlight" key={item.title}>
                    <div className="highlight-icon">
                      <Icon size={21} />
                    </div>

                    <div>
                      <h3>{item.title}</h3>
                      <p>{item.text}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <a href="#services" className="btn btn-primary">
              Explore Our Services
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}

export default AboutSection;