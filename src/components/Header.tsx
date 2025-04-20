
import React, { useEffect, useState } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "py-4" : "py-6"
      }`}
    >
      <div className={`absolute inset-0 bg-background/60 backdrop-blur-xl transition-all duration-300 ${
        scrolled ? "border-b border-primary/20" : ""
      }`} />
      <div className="container max-w-6xl mx-auto px-6 flex items-center justify-between">
        <div 
          className="font-medium tracking-tight text-lg relative group cursor-pointer"
        >
          <span className="text-white inline-block transition-all hover:text-primary">
            Revenue Activation
            <span className="block h-px w-0 group-hover:w-full bg-primary/50 transition-all duration-300" />
          </span>
        </div>
      </div>
    </header>
  );
}
