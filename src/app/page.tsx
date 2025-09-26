import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import Phase1Section from "@/components/Phase1Section";
import Phase2Section from "@/components/Phase2Section";
import TimelineSection from "@/components/TimelineSection";
import FooterSection from "@/components/FooterSection";

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <Phase1Section />
      <Phase2Section />
      <TimelineSection />
      <FooterSection />
    </div>
  );
}
