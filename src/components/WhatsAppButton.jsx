import { MessageCircle } from "lucide-react";
import { siteConfig } from "../data/siteConfig";

function WhatsAppButton() {
  const whatsappLink = `https://wa.me/${siteConfig.contact.whatsapp}?text=Hello%20Mary%20Immaculate%20Health%20Centre%2C%20I%20would%20like%20to%20make%20an%20inquiry.`;

  return (
    <a
      href={whatsappLink}
      className="floating-whatsapp"
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with Mary Immaculate Health Centre on WhatsApp"
    >
      <MessageCircle size={25} />

      <span>WhatsApp Us</span>
    </a>
  );
}

export default WhatsAppButton;