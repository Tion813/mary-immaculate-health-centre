import {
    CalendarDays,
    Baby,
    HeartPulse,
    Activity,
    Stethoscope,
  } from "lucide-react";
  
  import { clinics } from "../data/clinics";
  
  const clinicIcons = {
    antenatal: Baby,
    cwc: Baby,
    postnatal: HeartPulse,
    gynae: Stethoscope,
    hypertension: Activity,
    diabetes: HeartPulse,
  };
  
  function ClinicSchedule() {
    return (
      <section className="section clinic-section" id="clinics">
        <div className="container">
  
          {/* Section Header */}
          <div className="section-header">
            <span className="subtitle">Clinic Schedule</span>
  
            <h2>
              Plan Your Visit
              <span> Around Our Clinic Days</span>
            </h2>
  
            <p>
              Check our regular clinic schedule before visiting. For additional
              information or schedule changes, please contact the health centre
              directly.
            </p>
          </div>
  
          {/* Clinic Cards */}
          <div className="clinic-grid">
            {clinics.map((clinic) => {
              const Icon = clinicIcons[clinic.id] || CalendarDays;
  
              return (
                <article className="clinic-card" key={clinic.id}>
  
                  <div className="clinic-icon">
                    <Icon size={24} />
                  </div>
  
                  <div className="clinic-content">
                    <h3>{clinic.name}</h3>
  
                    <div className="clinic-days">
                      <CalendarDays size={16} />
                      <strong>{clinic.days}</strong>
                    </div>
  
                    <p>{clinic.description}</p>
                  </div>
  
                </article>
              );
            })}
          </div>
  
          {/* Important Notice */}
          <div className="clinic-notice">
            <div className="clinic-notice-icon">
              <CalendarDays size={22} />
            </div>
  
            <div>
              <strong>Before You Visit</strong>
  
              <p>
                Clinic schedules may occasionally change. Please contact the
                health centre to confirm clinic availability before your visit.
              </p>
            </div>
          </div>
  
        </div>
      </section>
    );
  }
  
  export default ClinicSchedule;