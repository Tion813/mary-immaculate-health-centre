import {
  MessageCircle,
  Phone,
  MapPin,
  Clock,
  ArrowUpRight,
  Music2,
} from "lucide-react";
  
  import { siteConfig } from "../data/siteConfig";
  
  function ContactSection() {
    const whatsappLink = `https://wa.me/${siteConfig.contact.whatsapp}?text=Hello%20Mary%20Immaculate%20Health%20Centre%2C%20I%20would%20like%20to%20make%20an%20inquiry.`;
  
    return (
      <section className="section contact-section" id="contact">
        <div className="container">
  
          {/* Section Header */}
          <div className="section-header">
            <span className="subtitle">Contact Us</span>
  
            <h2>
              We're Here
              <span> To Help</span>
            </h2>
  
            <p>
              Have a question about our services or clinic schedule? Get in
              touch with Mary Immaculate Health Centre.
            </p>
          </div>
  
          <div className="contact-grid">
  
            {/* Contact Information */}
            <div className="contact-info">
  
              {/* WhatsApp */}
              <a
                href={whatsappLink}
                className="contact-card contact-whatsapp"
                target="_blank"
                rel="noreferrer"
              >
                <div className="contact-icon">
                  <MessageCircle size={24} />
                </div>
  
                <div>
                  <span>WhatsApp Us</span>
                  <strong>Chat Directly With Us</strong>
                  <small>Send us a message on WhatsApp</small>
                </div>
  
                <ArrowUpRight size={19} className="contact-arrow" />
              </a>
  
              {/* Phone */}
              {siteConfig.contact.phone ? (
                <a
                  href={`tel:${siteConfig.contact.phone}`}
                  className="contact-card"
                >
                  <div className="contact-icon">
                    <Phone size={22} />
                  </div>
  
                  <div>
                    <span>Call Us</span>
                    <strong>
                      {siteConfig.contact.phoneDisplay || siteConfig.contact.phone}
                    </strong>
                    <small>Speak directly with our team</small>
                  </div>
                </a>
              ) : (
                <div className="contact-card contact-placeholder">
                  <div className="contact-icon">
                    <Phone size={22} />
                  </div>
  
                  <div>
                    <span>Phone</span>
                    <strong>Phone number coming soon</strong>
                    <small>Official contact details will be added here</small>
                  </div>
                </div>
              )}
  
              {/* Address */}
              <div className="contact-card contact-placeholder">
                <div className="contact-icon">
                  <MapPin size={22} />
                </div>
  
                <div>
                  <span>Visit Us</span>
                  <strong>
                    {siteConfig.contact.address || "Bahati, Kenya"}
                  </strong>
  
                  <small>Use the map below for directions</small>
                </div>
              </div>
  
              {/* Working Hours */}
              <div className="contact-card contact-placeholder">
                <div className="contact-icon">
                  <Clock size={22} />
                </div>
  
                <div>
                  <span>Opening Hours</span>
                  <strong>
                    {siteConfig.contact.workingHours || "Hours coming soon"}
                  </strong>
  
                  <small>Please contact us to confirm availability</small>
                </div>
              </div>
  
              {/* Facebook */}
              <a
                href={siteConfig.social.facebook}
                className="contact-social"
                target="_blank"
                rel="noreferrer"
              >
                <span className="facebook-symbol">f</span>
<span>Visit us on Facebook</span>
<ArrowUpRight size={17} />
              </a>

              {/* TikTok */}
<a
  href="https://www.tiktok.com/@mary_immaculate_bahati"
  className="contact-social tiktok-social"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="Visit Mary Immaculate Health Centre on TikTok"
>
  <Music2 size={19} />
  <span>Follow us on TikTok</span>
  <ArrowUpRight size={17} />
</a>
  
            </div>
  
            {/* Map */}
            <div className="contact-map">
  <iframe
    src={siteConfig.contact.mapsEmbed}
    title="Mary Immaculate Hospital Bahati location"
    loading="lazy"
    allowFullScreen
    referrerPolicy="strict-origin-when-cross-origin"
  ></iframe>

  <a
    href={siteConfig.contact.mapsUrl}
    target="_blank"
    rel="noreferrer"
    className="map-directions"
  >
    <MapPin size={18} />
    Open in Google Maps
    <ArrowUpRight size={17} />
  </a>
</div>
  
          </div>
  
        </div>
      </section>
    );
  }
  
  export default ContactSection;
