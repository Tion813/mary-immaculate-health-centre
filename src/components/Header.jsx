import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { siteConfig } from "../data/siteConfig";
import hospitalLogo from "../assets/mary-immaculate-logo-256.jpg";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navigation = [
    { name: "Home", href: "#home" },
    { name: "About Us", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Clinics", href: "#clinics" },
    { name: "Appointments", href: "#appointments" },
    { name: "Achievements", href: "#achievements" },
    { name: "Feedback", href: "#feedback" },
    { name: "Gallery", href: "#gallery" },
    { name: "Contact", href: "#contact" },
  ];

  const primaryNavigation = navigation.filter(({ name }) =>
    ["Home", "About Us", "Services", "Appointments", "Contact"].includes(name),
  );

  const secondaryNavigation = navigation.filter(
    ({ name }) => !["Home", "About Us", "Services", "Appointments", "Contact"].includes(name),
  );

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="site-header">
      <div className="container header-container">

        {/* Logo / Hospital Name */}
        <a href="#home" className="logo" onClick={closeMenu}>
          <div className="logo-mark">
            <img src={hospitalLogo} alt="Mary Immaculate Hospital Bahati logo" />
          </div>

          <div className="logo-text">
            <strong>Mary Immaculate</strong>
            <span>Health Centre • Bahati</span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="desktop-navigation">
          {primaryNavigation.map((item) => (
            <a key={item.name} href={item.href}>
              {item.name}
            </a>
          ))}

          <details className="desktop-more-navigation">
            <summary>More</summary>
            <div className="desktop-more-menu">
              {secondaryNavigation.map((item) => (
                <a key={item.name} href={item.href}>
                  {item.name}
                </a>
              ))}
            </div>
          </details>
        </nav>

        {/* Desktop Contact Button */}
        <div className="header-action">
          {siteConfig.contact.phone ? (
            <a
              href={`tel:${siteConfig.contact.phone}`}
              className="header-call"
            >
              <Phone size={18} />
              <span>Call Us</span>
            </a>
          ) : (
            <a
              href={`https://wa.me/${siteConfig.contact.whatsapp}`}
              className="header-call"
              target="_blank"
              rel="noreferrer"
            >
              <Phone size={18} />
              <span>Contact Us</span>
            </a>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="mobile-menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div className={`mobile-navigation ${menuOpen ? "open" : ""}`}>
        <nav>
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={closeMenu}
            >
              {item.name}
            </a>
          ))}
        </nav>

        <a
          href={`https://wa.me/${siteConfig.contact.whatsapp}`}
          className="mobile-whatsapp"
          target="_blank"
          rel="noreferrer"
          onClick={closeMenu}
        >
          💬 Chat on WhatsApp
        </a>
      </div>
    </header>
  );
}

export default Header;
