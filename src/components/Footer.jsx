import {
    ArrowUp,
    MapPin,
    MessageCircle,
  } from "lucide-react";
  
  import { siteConfig } from "../data/siteConfig";
  
  function Footer() {
    const whatsappLink = `https://wa.me/${siteConfig.contact.whatsapp}?text=Hello%20Mary%20Immaculate%20Health%20Centre%2C%20I%20would%20like%20to%20make%20an%20inquiry.`;
  
    return (
      <footer className="site-footer">
  
        <div className="container footer-main">
  
          {/* Hospital Information */}
          <div className="footer-brand">
  
            <div className="footer-logo">
              <div className="footer-logo-mark">
                MI
              </div>
  
              <div>
                <strong>Mary Immaculate</strong>
                <span>Health Centre • Bahati</span>
              </div>
            </div>
  
            <p>
              Quality healthcare delivered with compassion, dignity and respect
              for individuals and families.
            </p>
  
            <div className="footer-socials">
  
              <a
                href={siteConfig.social.facebook}
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
              >
                <span className="facebook-symbol">f</span>
              </a>
  
              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
              >
                <MessageCircle size={19} />
              </a>
  
            </div>
          </div>
  
          {/* Quick Links */}
          <div className="footer-column">
            <h3>Quick Links</h3>
  
            <a href="#home">Home</a>
            <a href="#about">About Us</a>
            <a href="#services">Services</a>
            <a href="#clinics">Clinic Schedule</a>
            <a href="#gallery">Gallery</a>
            <a href="#contact">Contact Us</a>
          </div>
  
          {/* Services */}
          <div className="footer-column">
            <h3>Our Services</h3>
  
            <a href="#services">Outpatient</a>
            <a href="#services">Inpatient</a>
            <a href="#services">Maternity</a>
            <a href="#services">Theatre</a>
            <a href="#services">Dental</a>
            <a href="#services">Optical</a>
          </div>
  
          {/* Contact */}
          <div className="footer-column footer-contact">
            <h3>Contact</h3>
  
            <div>
              <MapPin size={17} />
              <span>
                {siteConfig.contact.address || "Bahati, Kenya"}
              </span>
            </div>
  
            <a href={whatsappLink}>
              <MessageCircle size={17} />
              <span>WhatsApp Us</span>
            </a>
  
            <p>
              For clinic schedules and other enquiries, please contact our team
              directly.
            </p>
          </div>
  
        </div>
  
        {/* Bottom Footer */}
        <div className="footer-bottom">
  
          <div className="container footer-bottom-content">
  
            <p>
              © {new Date().getFullYear()} Mary Immaculate Health Centre.
              All rights reserved.
            </p>
  
            <a href="#home" className="back-to-top">
              Back to top
              <ArrowUp size={16} />
            </a>
  
          </div>
  
        </div>
  
      </footer>
    );
  }
  
  export default Footer;