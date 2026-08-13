import { Clock } from "lucide-react";

function VisitingHours() {
  const visitingHours = [
    {
      period: "Morning",
      time: "6:30 AM - 7:30 AM",
    },
    {
      period: "Mid-day",
      time: "12:00 Noon - 1:00 PM",
    },
    {
      period: "Evening",
      time: "4:30 PM - 6:00 PM",
    },
  ];

  return (
    <section className="section section-light visiting-hours-section">
      <div className="container">

        <div className="section-header">
          <span className="subtitle">Visiting Hours</span>

          <h2>
            Visiting Hours at
            <span> Mary Immaculate</span>
          </h2>

          <p>
            Visitors are welcome during the designated visiting periods.
            Please observe the visiting hours to support patient rest,
            privacy and recovery.
          </p>
        </div>

        <div className="visiting-hours-grid">
          {visitingHours.map((item) => (
            <div className="visiting-hours-card" key={item.period}>
              <div className="visiting-hours-icon">
                <Clock size={25} />
              </div>

              <div className="visiting-hours-content">
                <h3>{item.period}</h3>
                <p>{item.time}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="visiting-hours-note">
          <strong>Please Note:</strong>
          <span>
            Visitors are kindly requested to follow hospital guidelines
            during visiting hours and respect the comfort and privacy of
            patients.
          </span>
        </div>

      </div>
    </section>
  );
}

export default VisitingHours;