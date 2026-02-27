import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import StatsCounterSection from "@/components/StatsCounterSection";
import WorldMapSection from "@/components/WorldMapSection";
import AppLadderDifference from "@/components/AppLadderDifference";
import HowItWorksSection from "@/components/HowItWorksSection";
import SolutionsSection from "@/components/SolutionsSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <StatsCounterSection />
      <SolutionsSection />
      <WorldMapSection/>
      <AppLadderDifference/>
      <HowItWorksSection />
      <WhyChooseSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
