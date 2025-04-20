// src/components/ui/cta-button.tsx
import React from "react";

interface CTAButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

export function CTAButton({ children, className = "", ...props }: CTAButtonProps) {
  return (
    <button
      {...props}
      className={[
        // Base styles
        "px-6 py-3 rounded-lg font-medium border",
        "text-white bg-transparent",

        // Default border color = primary (green)
        "border-brand-primary",

        // Hover state: accent (gold)
        "hover:border-brand-accent hover:bg-hoverAccent",

        // Transition for smooth effect
        "transition",

        // Allow overrides
        className,
      ].join(" ")}
    >
      {children}
    </button>
  );
}
