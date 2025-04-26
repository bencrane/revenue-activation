
import { Button } from "@/components/ui/button";
import { TrendingUp } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-background">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-accent/10" />
        <div className="absolute bottom-0 left-0 right-0 h-[50vh] bg-gradient-to-t from-background to-transparent" />
      </div>

      <div className="container max-w-6xl mx-auto px-6 py-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Hero Content */}
          <div className="flex-1 text-left animate-fade-in">
            <div className="flex items-center gap-2 mb-6">
              <TrendingUp className="text-primary w-6 h-6" />
              <span className="text-gradient-gold font-medium">
                Revenue Activation Platform
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
              <span className="text-foreground">Unlock Hidden</span>
              <br />
              <span className="text-gradient-gold">Revenue Paths</span>
            </h1>

            <p className="text-lg text-muted-foreground max-w-xl mb-8">
              Surface untapped opportunities within your CRM, customer data, and market insights to drive exponential growth.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="group relative overflow-hidden">
                <span className="relative z-10">Get Started</span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Button>
              <Button variant="outline" size="lg">
                Learn More
              </Button>
            </div>
          </div>

          {/* Hero Visual */}
          <div className="flex-1 relative w-full aspect-square max-w-xl">
            <div className="absolute inset-0 glass-effect rounded-2xl overflow-hidden">
              <div className="h-full w-full bg
              -[radial-gradient(circle_at_50%_120%,hsl(var(--primary)),transparent_70%)]" />
            </div>
            <div className="absolute inset-0 backdrop-blur-3xl opacity-50" />
            <div className="absolute -inset-px border border-white/10 rounded-2xl neon-glow" />
          </div>
        </div>
      </div>
    </section>
  );
}
