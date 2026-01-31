import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import LanguagesSection from "@/components/LanguagesSection";
import StatsSection from "@/components/StatsSection";
import LearningPath from "@/components/LearningPath";
import FeaturesSection from "@/components/FeaturesSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <LanguagesSection />
        <StatsSection />
        <LearningPath />
        <FeaturesSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
