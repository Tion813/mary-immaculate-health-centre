import {
    HeartHandshake,
    Award,
    ShieldCheck,
    Users,
    Wallet,
    Target,
  } from "lucide-react";
  
  function MissionVision() {
    const coreValues = [
      {
        icon: HeartHandshake,
        title: "Compassion",
        description:
          "We serve patients with empathy and a desire to alleviate their suffering, while honoring each individual's dignity and privacy.",
      },
      {
        icon: Award,
        title: "Excellence",
        description:
          "We deliver the highest quality of care and service and surpass established standards through a continuous focus on improvement, innovation and education.",
      },
      {
        icon: ShieldCheck,
        title: "Integrity",
        description:
          "We approach our work with the highest standards of openness, honesty and ethical behavior, with freedom from any inappropriate influence or motive.",
      },
      {
        icon: Users,
        title: "Teamwork",
        description:
          "We work together in a cooperative, coordinated and supportive environment that places the team's or organization's goals ahead of individual goals.",
      },
      {
        icon: Wallet,
        title: "Fiscal Responsibility",
        description:
          "We achieve our mission through efficient and effective use of our resources and personal accountability for ensuring financial integrity and performance.",
      },
    ];
  
    return (
      <section className="mission-vision-section">
        <div className="container">
  
          {/* SECTION HEADER */}
          <div className="section-header">
            <span className="subtitle">Who We Are</span>
  
            <h2>
              Our Mission, Vision
              <span> & Core Values</span>
            </h2>
  
            <p>
              Our commitment to quality healthcare is guided by our mission,
              vision and values, which place patients and the community at the
              heart of everything we do.
            </p>
          </div>
  
          {/* MISSION & VISION */}
          <div className="mission-vision-grid">
  
            {/* MISSION */}
            <div className="mission-vision-card mission-card">
              <div className="mission-vision-icon">
                <Target size={28} />
              </div>
  
              <span className="mission-vision-label">
                Our Mission
              </span>
  
              <h3>Improving Lives Through Quality Healthcare</h3>
  
              <p>
                To improve the physical, emotional and spiritual well-being of
                individuals and the community through provision of high-quality
                health care services and health promotion, led by the love of
                Christ.
              </p>
            </div>
  
            {/* VISION */}
            <div className="mission-vision-card vision-card">
              <div className="mission-vision-icon">
                <HeartHandshake size={28} />
              </div>
  
              <span className="mission-vision-label">
                Our Vision
              </span>
  
              <h3>Patient-Centred Care With Passion and Compassion</h3>
  
              <p>
                To be the leading facility in providing comprehensive,
                patient-centered care with passion and compassion.
              </p>
            </div>
  
          </div>
  
          {/* CORE VALUES */}
          <div className="core-values-header">
            <span className="subtitle">What Guides Us</span>
  
            <h2>
              Our Core
              <span> Values</span>
            </h2>
          </div>
  
          <div className="core-values-grid">
            {coreValues.map((value) => {
              const Icon = value.icon;
  
              return (
                <div
                  className="core-value-card"
                  key={value.title}
                >
                  <div className="core-value-icon">
                    <Icon size={24} />
                  </div>
  
                  <h3>{value.title}</h3>
  
                  <p>{value.description}</p>
                </div>
              );
            })}
          </div>
  
        </div>
      </section>
    );
  }
  
  export default MissionVision;