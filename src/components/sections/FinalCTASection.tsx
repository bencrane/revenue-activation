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
    <section ref={sectionRef} className="py-32 relative">
      <div className="max-w-3xl mx-auto px-8 text-left">
        <h2
          ref={headingRef}
          className="text-brand-primary text-3xl md:text-4xl font-semibold mb-5 opacity-0 text-left"
        >
          We're onboarding a small number of early teams.
        </h2>
        <p
          ref={textRef}
          className="text-neutral-300 text-lg mb-8 max-w-2xl opacity-0 text-left"
        >
          If you think your GTM team is flying blind, we'll show you what you're missing.
        </p>
        <div ref={buttonRef} className="opacity-0 text-left mt-8">
          <CTAButton>
            Request Access
          </CTAButton>
        </div>
      </div>
      <div className="absolute bottom-40 left-1/2 transform -translate-x-1/2 w-64 h-32 bg-brand-primary/5 rounded-full blur-[80px] opacity-70"></div>
    </section>
  );
}
