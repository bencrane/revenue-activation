import { useEffect, useRef } from "react";
import { CTAButton } from "@/components/ui/cta-button";
import ETLDiagram from "@/components/ETLDiagram";

export default function HeroSection() {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const diagramRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    if (headingRef.current) observer.observe(headingRef.current);
    if (descriptionRef.current) observer.observe(descriptionRef.current);
    if (ctaRef.current) observer.observe(ctaRef.current);
    if (diagramRef.current) observer.observe(diagramRef.current);

    return () => {
      if (headingRef.current) observer.unobserve(headingRef.current);
      if (descriptionRef.current) observer.unobserve(descriptionRef.current);
      if (ctaRef.current) observer.unobserve(ctaRef.current);
      if (diagramRef.current) observer.unobserve(diagramRef.current);
    };
  }, []);
  
  return (
    <section className="py-24 md:py-32 relative px-6 md:px-12 xl:px-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 md:gap-16 items-center">
        <div className="space-y-8">
          <h1 ref={headingRef} className="text-4xl md:text-5xl lg:text-6xl font-bold opacity-0">
            Get signals that actually drive revenue
          </h1>
          <p ref={descriptionRef} className="text-xl text-muted-foreground opacity-0 mb-8">
            Stop wasting time with dashboards that don't convert. Our system plugs directly into your go-to-market motion.
          </p>
          <div ref={ctaRef} className="opacity-0">
            <CTAButton>Request Access</CTAButton>
          </div>
        </div>
        <div ref={diagramRef} className="opacity-0 flex justify-center">
          <ETLDiagram />
        </div>
      </div>
    </section>
  );
}
