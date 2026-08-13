import { MessageCircle } from "lucide-react";

function WhatsAppButton() {
  const phoneNumber = "254702853787";

  const message =
    "Hello Mary Immaculate Health Centre, I would like to make an inquiry.";

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-button"
      aria-label="Contact Mary Immaculate Health Centre on WhatsApp"
    >
      <MessageCircle size={24} />
      <span>WhatsApp Us</span>
    </a>
  );
}

export default WhatsAppButton;