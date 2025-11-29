import { useEffect } from "react";
import { HeroSection } from "@/components/HeroSection";
import { IntroSection } from "@/components/IntroSection";
import { TimelineSection } from "@/components/TimelineSection";
import { GallerySection } from "@/components/GallerySection";
import { CounterSection } from "@/components/CounterSection";
import { ProposalSection } from "@/components/ProposalSection";
import { FooterSection } from "@/components/FooterSection";

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="overflow-x-hidden" data-testid="home-page">
      <HeroSection />
      <IntroSection />
      <TimelineSection />
      <CounterSection />
      <GallerySection />
      <ProposalSection />
      <FooterSection />
    </main>
  );
}
