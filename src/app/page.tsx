import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import TimelineSection from "@/components/TimelineSection";
import FooterSection from "@/components/FooterSection";
import PhaseSection from "@/components/PhaseSection";

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <PhaseSection />
      <TimelineSection />
      <FooterSection />
    </div>
  );
}
