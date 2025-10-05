import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProblemSection from "@/components/ProblemSection";
import RecruitmentServices from "@/components/RecruitmentServices";
import HRMRetainers from "@/components/HRMRetainers";
import WhyWorkWithUs from "@/components/WhyWorkWithUs";
import BookStrategyCall from "@/components/BookStrategyCall";
import HRCostCalculator from "@/components/HRCostCalculator";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <ProblemSection />
      <RecruitmentServices />
      <HRMRetainers />
      <WhyWorkWithUs />
      <BookStrategyCall />
      <HRCostCalculator />
      <FinalCTA />
      <Footer />
    </main>
  );
};

export default Index;
