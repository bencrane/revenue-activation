
import { cn } from "@/lib/utils";
import { useEffect, useRef } from "react";

interface SectionHeadingProps {
  children: React.ReactNode;
  className?: string;
}

export default function SectionHeading({ children, className }: SectionHeadingProps) {
  const headingRef = useRef<HTMLHeadingElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fade-in");
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );
    
    if (headingRef.current) {
      observer.observe(headingRef.current);
    }
    
    return () => {
      if (headingRef.current) {
        observer.unobserve(headingRef.current);
      }
    };
  }, []);

  return (
    <h2 
      ref={headingRef}
      className={cn(
        "text-2xl sm:text-3xl md:text-4xl font-medium mb-4 opacity-0",
        "tracking-tight text-gradient-gold",
        className
      )}
    >
      {children}
    </h2>
  );
}
