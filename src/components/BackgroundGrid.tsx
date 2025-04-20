
import { cn } from "@/lib/utils";

interface BackgroundGridProps {
  className?: string;
}

export default function BackgroundGrid({ className }: BackgroundGridProps) {
  return (
    <div
      className={cn(
        "fixed inset-0 -z-10 overflow-hidden",
        className
      )}
    >
      {/* Premium grid lines with neon effect */}
      <div 
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage: `linear-gradient(to right, hsla(160, 100%, 45%, 0.1) 1px, transparent 1px), 
                           linear-gradient(to bottom, hsla(160, 100%, 45%, 0.1) 1px, transparent 1px)`,
          backgroundSize: '64px 64px',
        }}
      />
      
      {/* Subtle diagonal lines */}
      <div 
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: `repeating-linear-gradient(45deg, hsla(160, 100%, 45%, 0.1) 0px, hsla(160, 100%, 45%, 0.1) 1px,
                           transparent 1px, transparent 10px)`,
        }}
      />
      
      {/* Premium glow effects */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] animate-glow"></div>
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px] animate-glow"></div>
      
      {/* Noise texture overlay */}
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.02] mix-blend-overlay"></div>
      
      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background opacity-80"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background opacity-60"></div>
    </div>
  );
}
