import { ArrowRight, MessageCircle, HeartPulse } from "lucide-react";
import { siteConfig } from "../data/siteConfig";

function Hero() {
  const base = import.meta.env.BASE_URL;

  return (
    <section
      id="home"
      className="hero"
      style={{
        backgroundImage: `url("${base}images/hero.jpg")`,
      }}
    >
      <div className="hero-overlay"></div>

      <div className="container hero-container">
        <div className="hero-content">
          <div className="hero-badge">
            <HeartPulse size={16} />
            <span>Compassionate Healthcare</span>
          </div>

          <h1>
            Quality Healthcare,
            <span>Compassionate Care.</span>
          </h1>

          <p>
            Mary Immaculate Health Centre provides accessible, quality
            healthcare services to individuals and families in Bahati, Nairobi.
          </p>

          <div className="hero-actions">
            <a href="#services" className="btn btn-primary hero-primary-btn">
              Explore Our Services
              <ArrowRight size={18} />
            </a>

            <a
              href={`https://wa.me/${siteConfig.contact.whatsapp}?text=Hello%20Mary%20Immaculate%20Health%20Centre%2C%20I%20would%20like%20to%20make%20an%20inquiry.`}
              className="btn btn-green"
              target="_blank"
              rel="noreferrer"
            >
              <MessageCircle size={18} />
              WhatsApp Us
            </a>
          </div>

          <div className="hero-trust">
            <div className="trust-item">
              <strong>Quality</strong>
              <span>Healthcare Services</span>
            </div>

            <div className="trust-divider"></div>

            <div className="trust-item">
              <strong>Compassion</strong>
              <span>Patient-Centred Care</span>
            </div>

            <div className="trust-divider"></div>

            <div className="trust-item">
              <strong>Accessible</strong>
              <span>Healthcare for Families</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
