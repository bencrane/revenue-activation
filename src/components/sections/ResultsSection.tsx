import { useEffect, useRef } from "react";
import SectionHeading from "@/components/SectionHeading";
import { Card } from "@/components/ui/card";

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
    <section className="py-32 relative">
      <div className="max-w-4xl mx-auto px-8">
        <SectionHeading className="text-center mb-12 text-brand-primary">
          What Happens When You Plug In Our System
        </SectionHeading>
        <div
          ref={resultsContainerRef}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8"
        >
          {results.map((result, index) => (
            <div
              key={index}
              className="result-item border border-brand-accent/30 hover:border-brand-accent hover:bg-hoverAccent/5 transition-all py-12 px-6 flex flex-col items-center justify-center text-center min-h-32 opacity-0 rounded-xl"
            >
              <div className="w-10 h-10 rounded-full bg-brand-accent mb-4 flex items-center justify-center">
                <span className="text-black font-medium">{index + 1}</span>
              </div>
              <p className="text-lg font-medium flex items-center justify-center h-full text-neutral-300">{result}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-neutral-700 to-transparent"></div>
    </section>
  );
}
