
import React from "react";
import { cn } from "@/lib/utils";

interface CTAButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export function CTAButton({ children, className, onClick }: CTAButtonProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "group relative px-8 py-4 overflow-hidden rounded-lg",
        "text-sm font-medium tracking-wider uppercase",
        "bg-primary/20 text-white border border-primary/30",
        "transition-all duration-300",
        "hover:bg-primary/30 hover:border-primary/50 hover:neon-glow",
        "focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 focus:ring-offset-background",
        className
      )}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/10 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-float" />
      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
        <svg 
          className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 opacity-70" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </span>
    </button>
  );
}
