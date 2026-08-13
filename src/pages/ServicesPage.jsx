import { ArrowRight } from "lucide-react";
import { services } from "../data/services";

function ServicesPage() {
  return (
    <main className="services-page">
      <section className="services-page-hero">
        <div className="container">
          <span className="subtitle">Our Services</span>

          <h1>
            Comprehensive Healthcare
            <span> For You & Your Family</span>
          </h1>

          <p>
            Mary Immaculate Health Centre provides a range of healthcare
            services designed to meet the needs of individuals and families
            within our community.
          </p>
        </div>
      </section>

      <section className="section section-light">
        <div className="container">
          <div className="services-page-grid">
            {services.map((service) => (
              <article className="service-page-card" key={service.id}>
                <div className="service-page-image">
                  <img
                    src={service.image}
                    alt={service.name}
                  />
                </div>

                <div className="service-page-content">
                  <h2>{service.name}</h2>

                  <p>{service.shortDescription}</p>

                  {service.features && (
                    <ul>
                      {service.features.map((feature) => (
                        <li key={feature}>{feature}</li>
                      ))}
                    </ul>
                  )}

                  <a
                    href={`/mary-immaculate-health-centre/services/${service.id}`}
                    className="service-link"
                  >
                    View Service
                    <ArrowRight size={17} />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default ServicesPage;