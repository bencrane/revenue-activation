import { useEffect, useRef } from "react";
import { CTAButton } from "@/components/ui/cta-button";

export default function FinalCTASection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === sectionRef.current) {
              const elements = [headingRef.current, textRef.current, buttonRef.current];
              elements.forEach((el, index) => {
                if (el) {
                  setTimeout(() => {
                    el.classList.add('animate-fade-in');
                  }, index * 200);
                }
              });
            }
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="pt-40 pb-32 relative">
      <div className="max-w-3xl mx-auto px-8 text-left">
        <h2
          ref={headingRef}
          className="text-3xl md:text-4xl font-medium mb-5 text-yellow-400 opacity-0 text-left"
        >
          We're onboarding a small number of early teams.
        </h2>
        <p
          ref={textRef}
          className="text-xl mb-10 text-neutral-300 max-w-2xl opacity-0 text-left"
        >
          If you think your GTM team is flying blind, we'll show you what you're missing.
        </p>
        <div ref={buttonRef} className="opacity-0 text-left">
          <CTAButton className="border border-yellow-400 hover:border-yellow-300 hover:bg-yellow-400/10 transition-all shadow-[0_0_20px] shadow-yellow-400/20">
            Request Access
          </CTAButton>
        </div>
      </div>
      {/* Premium subtle glow effect at bottom */}
      <div className="absolute bottom-40 left-1/2 transform -translate-x-1/2 w-64 h-32 bg-yellow-400/5 rounded-full blur-[80px] opacity-70"></div>
    </section>
  );
}
