
import BackgroundGrid from "@/components/BackgroundGrid";
import Header from "@/components/Header";
import HeroSection from "@/components/sections/HeroSection";
import ImagineSection from "@/components/sections/ImagineSection";
import WhatWeDoSection from "@/components/sections/WhatWeDoSection";
import ResultsSection from "@/components/sections/ResultsSection";
import FinalCTASection from "@/components/sections/FinalCTASection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-x-hidden">
      <BackgroundGrid />
      <Header />
      
      <main className="pt-16">
        <HeroSection />
        <ImagineSection />
        <WhatWeDoSection />
        <ResultsSection />
        <FinalCTASection />
      </main>
      
      <footer className="py-16 border-t border-border/30">
        <div className="container max-w-6xl mx-auto px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-gradient-gold text-sm">
              Revenue Activation
            </div>
            <div className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Revenue Activation. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Index;
