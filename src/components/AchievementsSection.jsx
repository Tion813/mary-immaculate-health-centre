import {
    Award,
    Trophy,
    Medal,
    Star,
    Sparkles,
  } from "lucide-react";
  
  function AchievementsSection() {
    const achievements = [
      {
        id: 1,
        year: "YEAR",
        title: "Healthcare Excellence",
        category: "Healthcare Excellence",
        description:
          "Add a brief description of this achievement and how it reflects Mary Immaculate Health Centre's commitment to quality healthcare.",
        icon: Trophy,
      },
      {
        id: 2,
        year: "YEAR",
        title: "Community Service",
        category: "Community Service",
        description:
          "Add information about an achievement related to serving and supporting the surrounding community.",
        icon: Award,
      },
      {
        id: 3,
        year: "YEAR",
        title: "Patient Care Excellence",
        category: "Patient Care",
        description:
          "Add information about an achievement that demonstrates the facility's commitment to patient-centred care.",
        icon: Star,
      },
      {
        id: 4,
        year: "YEAR",
        title: "Staff Excellence",
        category: "Staff Excellence",
        description:
          "Add information about an award, recognition or milestone involving the healthcare team.",
        icon: Medal,
      },
      {
        id: 5,
        year: "YEAR",
        title: "Medical Services Milestone",
        category: "Medical Services",
        description:
          "Add information about an important milestone achieved through the facility's medical services.",
        icon: Trophy,
      },
      {
        id: 6,
        year: "YEAR",
        title: "Community Outreach",
        category: "Community Outreach",
        description:
          "Add information about an outreach programme, health campaign or community initiative.",
        icon: Sparkles,
      },
      {
        id: 7,
        year: "YEAR",
        title: "Quality Improvement",
        category: "Quality Improvement",
        description:
          "Add information about an achievement resulting from improvements in healthcare quality, safety or service delivery.",
        icon: Award,
      },
      {
        id: 8,
        year: "YEAR",
        title: "Healthcare Innovation",
        category: "Innovation",
        description:
          "Add information about a new service, initiative, technology or improvement introduced at the health centre.",
        icon: Sparkles,
      },
      {
        id: 9,
        year: "YEAR",
        title: "Recognition & Awards",
        category: "Recognition",
        description:
          "Add information about an official award, recognition or commendation received by the health centre or its team.",
        icon: Medal,
      },
      {
        id: 10,
        year: "YEAR",
        title: "Institutional Milestone",
        category: "Milestone",
        description:
          "Add information about an important milestone in the growth and development of Mary Immaculate Health Centre.",
        icon: Star,
      },
    ];
  
    return (
      <section
        className="section section-light achievements-section"
        id="achievements"
      >
        <div className="container">
  
          {/* Section Header */}
          <div className="section-header achievements-header">
            <span className="subtitle">Our Achievements</span>
  
            <h2>
              Milestones That
              <span> Inspire Us</span>
            </h2>
  
            <p>
              A collection of milestones, recognitions and achievements that
              reflect our commitment to quality healthcare and service to the
              community.
            </p>
          </div>
  
          {/* Achievement Cards */}
          <div className="achievements-grid">
            {achievements.map((achievement) => {
              const Icon = achievement.icon;
  
              return (
                <article
                  className="achievement-card"
                  key={achievement.id}
                >
                  <div className="achievement-card-glow" />
  
                  <div className="achievement-top">
                    <div className="achievement-icon">
                      <Icon size={27} strokeWidth={1.8} />
                    </div>
  
                    <span className="achievement-year">
                      {achievement.year}
                    </span>
                  </div>
  
                  <div className="achievement-content">
                    <span className="achievement-category">
                      {achievement.category}
                    </span>
  
                    <h3>{achievement.title}</h3>
  
                    <p>{achievement.description}</p>
                  </div>
  
                  <div className="achievement-number">
                    {String(achievement.id).padStart(2, "0")}
                  </div>
                </article>
              );
            })}
          </div>
  
        </div>
      </section>
    );
  }
  
  export default AchievementsSection;