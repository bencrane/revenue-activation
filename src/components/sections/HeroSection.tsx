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
    <section className="flex flex-col items-center justify-center pt-32 pb-40 md:pt-40 md:pb-48 relative">
      <div className="max-w-6xl mx-auto px-8 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Text Content */}
          <div className="lg:w-1/2 text-left">
            <h1
              ref={headingRef}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 tracking-tight text-yellow-400 opacity-0"
              style={{ transitionDelay: '100ms' }}
            >
              The GTM Engineering Firm
            </h1>
            <p
              ref={descriptionRef}
              className="text-xl md:text-2xl mb-6 text-neutral-300 max-w-3xl mx-auto lg:mx-0 leading-relaxed opacity-0"
              style={{ transitionDelay: '300ms' }}
            >
              We surface the revenue paths your team is blind to — using signal-layered infrastructure built to accelerate what you're already doing.
            </p>
            <div ref={ctaRef} className="opacity-0 mt-4" style={{ transitionDelay: '500ms' }}>
              <CTAButton className="border border-yellow-400 hover:border-yellow-300 hover:bg-yellow-400/10 transition-all duration-300">Request Access</CTAButton>
            </div>
          </div>

          {/* ETL Diagram */}
          <div
            ref={diagramRef}
            className="lg:w-1/2 opacity-0 w-full flex items-center justify-center lg:justify-end"
            style={{ transitionDelay: '700ms' }}
          >
            <ETLDiagram />
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-neutral-700 to-transparent"></div>
    </section>
  );
}
