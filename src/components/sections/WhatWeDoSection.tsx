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
    <section className="py-24 relative">
      <div className="max-w-4xl mx-auto px-6">
        <div className="mb-12 text-center">
          <SectionHeading className="text-yellow-400">We don't sell dashboards. We deliver clarity.</SectionHeading>
          <p 
            ref={descriptionRef} 
            className="text-lg text-neutral-300 opacity-0"
          >
            Our system plugs into your motion and outputs signal, not noise.
          </p>
        </div>
        
        <div 
          ref={cardsContainerRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16"
        >
          {services.map((service, index) => (
            <div 
              key={index} 
              className="service-card relative border border-yellow-400/30 p-8 backdrop-blur-sm opacity-0 transition-all duration-300 hover:translate-y-[-8px] hover:border-yellow-400 hover:bg-yellow-400/5 group"
            >
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-yellow-400/70 to-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <h3 className="text-xl font-medium mb-4 text-yellow-400">{service.title}</h3>
              <p className="text-neutral-300">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-neutral-700 to-transparent"></div>
    </section>
  );
}
