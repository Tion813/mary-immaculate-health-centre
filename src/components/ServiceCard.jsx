import { ArrowUpRight } from "lucide-react";

function ServiceCard({ service }) {
  return (
    <article className="service-card">
      <div className="service-image">
        <img
          src={service.image}
          alt={service.name}
          loading="lazy"
        />

        <div className="service-number">
          {service.id.slice(0, 2).toUpperCase()}
        </div>
      </div>

      <div className="service-content">
        <h3>{service.name}</h3>

        <p>{service.shortDescription}</p>

        <a
  href={`#/services/${service.id}`}
  className="service-link"
>
  Explore Services
  <ArrowUpRight size={17} />
</a>
      </div>
    </article>
  );
}

export default ServiceCard;