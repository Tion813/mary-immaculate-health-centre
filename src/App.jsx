import { useEffect, useState } from "react";

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
import ServiceDetails from "./pages/ServiceDetails";
import VisitingHours from "./components/VisitingHours";
import ServiceGallery from "./pages/ServiceGallery";
import MissionVision from "./components/MissionVision";
import FeedbackSection from "./components/FeedbackSection";
import AppointmentSection from "./components/AppointmentSection";
import AchievementsSection from "./components/AchievementsSection";

function App() {
  const [hash, setHash] = useState(window.location.hash);

  useEffect(() => {
    const handleHashChange = () => {
      setHash(window.location.hash);
    };

    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  useEffect(() => {
    if (hash.startsWith("#/services/")) {
      window.scrollTo(0, 0);
    }
  }, [hash]);

  // ==========================================
  // SERVICE ROUTING
  // ==========================================

  const isServicePage = hash.startsWith("#/services/");

  const isServiceGallery =
    isServicePage && hash.endsWith("/gallery");

  if (isServiceGallery) {
    return (
      <>
        <Header />

        <ServiceGallery />

        <Footer />

        <WhatsAppButton />
      </>
    );
  }

  if (isServicePage) {
    return (
      <>
        <Header />

        <ServiceDetails />

        <Footer />

        <WhatsAppButton />
      </>
    );
  }

  // ==========================================
  // MAIN WEBSITE
  // ==========================================

  return (
    <>
      <Header />

      <main>
        <Hero />

        <AboutSection />

        <MissionVision />

        <ServicesSection />

        <ClinicSchedule />

        <AppointmentSection />

        <VisitingHours />

        <WhyChooseUs />

        <AchievementsSection />

        <FeedbackSection />

        <GallerySection />

        <ContactSection />
      </main>

      <Footer />

      <WhatsAppButton />
    </>
  );
}

export default App;
