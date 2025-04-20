import { useEffect, useRef } from "react";
import SectionHeading from "@/components/SectionHeading";

export default function ResultsSection() {
  const results = [
    "Lower CAC",
    "Higher reply rates",
    "Shorter sales cycles",
    "Less wasted spend",
    "More confidence in targeting"
  ];

  const resultsContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const resultItems = entry.target.querySelectorAll('.result-item');
            resultItems.forEach((item, index) => {
              setTimeout(() => {
                item.classList.add('animate-fade-in');
              }, index * 150);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (resultsContainerRef.current) {
      observer.observe(resultsContainerRef.current);
    }

    return () => {
      if (resultsContainerRef.current) {
        observer.unobserve(resultsContainerRef.current);
      }
    };
  }, []);

  return (
    <section className="py-32 md:py-40 px-6 md:px-12 xl:px-20 relative">
      <div className="max-w-4xl mx-auto">
        <SectionHeading className="text-center mb-20">
          What Happens When You Plug In Our System
        </SectionHeading>
        <div
          ref={resultsContainerRef}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 md:gap-12"
        >
          {results.map((result, index) => (
            <div
              key={index}
              className="result-item opacity-0 border border-border bg-card rounded-xl py-12 px-6 flex items-center justify-center min-h-[160px]"
            >
              <p className="font-medium text-xl text-center">{result}</p>
            </div>
          ))}
        </div>
      </div>
      {/* Subtle background glow effect */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full h-64 bg-primary/5 rounded-full blur-[120px] -z-10"></div>
    </section>
  );
}
