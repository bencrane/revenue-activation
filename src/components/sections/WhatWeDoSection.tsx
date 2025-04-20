import { useEffect, useRef } from "react";
import SectionHeading from "@/components/SectionHeading";

export default function WhatWeDoSection() {
  const services = [
    {
      title: "Outbound Activation",
      description: "Surface and prioritize high-trust, high-timing accounts across your TAM."
    },
    {
      title: "Inbound Activation",
      description: "Reroute, enrich, and score inbound leads based on recency, trust, and network."
    },
    {
      title: "Sales Intelligence",
      description: "Deliver actionable context and buyer proximity to your revenue team."
    }
  ];

  const cardsContainerRef = useRef<HTMLDivElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === descriptionRef.current) {
              entry.target.classList.add('animate-fade-in');
            } else if (entry.target === cardsContainerRef.current) {
              const cards = entry.target.querySelectorAll('.service-card');
              cards.forEach((card, index) => {
                setTimeout(() => {
                  card.classList.add('animate-fade-in');
                }, index * 200);
              });
            }
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (descriptionRef.current) observer.observe(descriptionRef.current);
    if (cardsContainerRef.current) observer.observe(cardsContainerRef.current);
    
    return () => {
      if (descriptionRef.current) observer.unobserve(descriptionRef.current);
      if (cardsContainerRef.current) observer.unobserve(cardsContainerRef.current);
    };
  }, []);

  return (
    <section className="py-24 md:py-32 px-6 md:px-12 xl:px-20 relative">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <SectionHeading>We don't sell dashboards. We deliver clarity.</SectionHeading>
          <p 
            ref={descriptionRef} 
            className="text-lg text-muted-foreground opacity-0 mt-6 max-w-2xl mx-auto"
          >
            Our system plugs into your motion and outputs signal, not noise.
          </p>
        </div>
        
        <div 
          ref={cardsContainerRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12"
        >
          {services.map((service, index) => (
            <div 
              key={index}
              className="service-card bg-card border border-border rounded-xl p-8 opacity-0 flex flex-col justify-center min-h-[200px]"
            >
              <h3 className="text-xl font-medium mb-4">{service.title}</h3>
              <p className="text-muted-foreground">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
