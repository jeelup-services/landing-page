import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import ProblemSection from "@/components/sections/ProblemSection";
import MeetJeelupSection from "@/components/sections/MeetJeelupSection";
import WhyChooseSection from "@/components/sections/WhyChooseSection";
import TechSection from "@/components/sections/TechSection";
import HowItWorksSection from "@/components/sections/HowItWorksSection";
import WhoWeWorkWithSection from "@/components/sections/WhoWeWorkWithSection";
import FounderSection from "@/components/sections/FounderSection";
import CTASection from "@/components/sections/CTASection";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <ProblemSection />
        <MeetJeelupSection />
        <WhyChooseSection />
        <TechSection />
        <HowItWorksSection />
        <WhoWeWorkWithSection />
        <FounderSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
