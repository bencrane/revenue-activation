import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  children: ReactNode;
  className?: string;
}

export default function SectionHeading({ children, className }: SectionHeadingProps) {
  return (
    <h2 className={cn("text-brand-primary text-3xl md:text-4xl font-semibold", className)}>
      {children}
    </h2>
  );
}
