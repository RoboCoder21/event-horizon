import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import ProjectGallery from "@/components/ProjectGallery";
import AboutSection from "@/components/AboutSection";
import TeamSection from "@/components/TeamSection";
import ClientsSection from "@/components/ClientsSection";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        <ServicesSection />
        <ProjectGallery />
        <AboutSection />
        <TeamSection />
        <ClientsSection />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
