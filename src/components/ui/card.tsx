import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface CardProps {
  children: ReactNode;
  className?: string;
  numbered?: number;
}

export function Card({ children, className, numbered }: CardProps) {
  return (
    <div
      className={cn(
        "border border-brand-accent/30 p-8 rounded-xl transition-all duration-300 hover:border-brand-accent",
        className
      )}
    >
      {numbered && (
        <div className="w-10 h-10 rounded-full bg-brand-accent text-black flex items-center justify-center mb-4">
          <span className="font-medium">{numbered}</span>
        </div>
      )}
      {children}
    </div>
  );
}
