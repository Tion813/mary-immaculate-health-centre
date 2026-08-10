import Header from "./components/Header";
import Hero from "./components/Hero";
import AboutSection from "./components/AboutSection";
import ServicesSection from "./components/ServicesSection";
import ClinicSchedule from "./components/ClinicSchedule";
import WhyChooseUs from "./components/WhyChooseUs";
import GallerySection from "./components/GallerySection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";

function App() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <AboutSection />
        <ServicesSection />
        <ClinicSchedule />
        <WhyChooseUs />
        <GallerySection />
        <ContactSection />
      </main>

      <Footer />

      <WhatsAppButton />
    </>
  );
}

export default App;