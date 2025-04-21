import { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface CTAButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  secondary?: boolean;
}

export function CTAButton({
  className,
  children,
  secondary = false,
  ...props
}: CTAButtonProps) {
  return (
    <button
      className={cn(
        secondary
          ? "border border-gray-400 text-neutral-300 bg-transparent hover:border-gray-300 hover:bg-gray-800"
          : "border border-brand-primary text-white bg-transparent hover:border-brand-accent hover:bg-hoverAccent",
        "px-6 py-3 rounded-lg transition-all duration-300",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
