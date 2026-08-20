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
        year: "2023",
        title: "Health Service Delivery Awards 2023",
        category: "Certificate of Recognition",
        description:
          "Best performance in patient centred care.",
        icon: Trophy,
      },
      {
        id: 2,
        year: "2024",
        title: "Best performing in patient centered care",
        category: "Certificate of Achievement",
        description:
          "Recognized as the best performing in patient centered care during health service delivery awards (2024) held in Nairobi, Kenya.",
        icon: Award,
      },
      {
        id: 3,
        year: "2024",
        title: "Best performing in Human Resource Management",
        category: "certificate of achievement",
        description:
          "Recognized as the Best Performing in Human Resource Management During the Health Service Delivery Awards (2024) Held in Nairobi, Kenya.",
        icon: Star,
      },
      {
        id: 4,
        year: "2022",
        title: "Best level 3 FBO Health Centre Nairobi County",
        category: "Certificate of Achievement",
        description:
          "Recognized as 2nd runners up best level 3 FBO Health Centre Nairobi County, During the Health Service Delivery Award (HSDA) 2022 Held in Nairobi, Kenya.",
        icon: Medal,
      },
      {
        id: 5,
        year: "2022",
        title: "Medical Services Milestone",
        category: "Certificate of Participation",
        description:
          "for participation in the County Health Service Delivery Awards (HSDA) in 2022.",
        icon: Trophy,
      },
      {
        id: 6,
        year: "2023",
        title: "Community Outreach",
        category: "Certificate of Achievement",
        description:
          "Recognized as the 1st Runners Up-Best Level 3 FBO Health Centre Nairobi County, During the Health Service Delivery Awards (2023) Held in Nairobi, Kenya.",
        icon: Sparkles,
      },
      {
        id: 7,
        year: "YEAR",
        title: "Quality Improvement",
        category: "Certificate of Achievement",
        description:
          "Recognized as the best performing in Health Management Information System During the Health Service Delivery Awards (2024) Held in Nairobi, Kenya.",
        icon: Award,
      },
      {
        id: 8,
        year: "YEAR",
        title: "Healthcare Innovation",
        category: "Certificate of Achievement",
        description:
          "Recognized as the best performing in Health Management Information System During the Health Service Delivery Awards (2024) Held in Nairobi, Kenya.",
        icon: Sparkles,
      },
      {
        id: 9,
        year: "YEAR",
        title: "Recognition & Awards",
        category: "Certificate of Achievement",
        description:
          "Recognized as the best performing in Health Management Information System During the Health Service Delivery Awards (2024) Held in Nairobi, Kenya.",
        icon: Medal,
      },
      {
        id: 10,
        year: "YEAR",
        title: "Institutional Milestone",
        category: "Certificate of Achievement",
        description:
          "Recognized as the best performing in Health Management Information System During the Health Service Delivery Awards (2024) Held in Nairobi, Kenya.",
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