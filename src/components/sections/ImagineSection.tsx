import { useState } from "react";
import SectionHeading from "@/components/SectionHeading";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi
} from "@/components/ui/carousel";

export default function ImagineSection() {
  const scenarios = [
    "Your paid ads only show to buyers at companies matching your most successful customers.",
    "You know exactly when previous prospects change jobs into decision-making roles.",
    "Your CRM highlights buyers three degrees of connection away from your existing champions.",
    "You can identify which accounts are consuming your content anonymously.",
    "Your GTM systems detect buying intent based on network proximity rather than just content engagement.",
    "You can track when competitors' customers become open to switching vendors before they start researching.",
    "You can prioritize outbound based on actual buyer readiness instead of arbitrary ICP definitions."
  ];

  const [carouselApi, setCarouselApi] = useState<CarouselApi>();

  return (
    <section className="py-40 relative overflow-x-auto">
      <div className="max-w-5xl mx-auto px-8">
        <SectionHeading className="mb-14 text-left text-yellow-400">Imagine if...</SectionHeading>
        <Carousel
          opts={{
            align: "start",
            loop: true,
            duration: 1500,
            dragFree: false,
            skipSnaps: false,
          }}
          setApi={setCarouselApi}
          className="w-full"
        >
          <CarouselContent className="-ml-4 md:-ml-6">
            {scenarios.map((scenario, index) => (
              <CarouselItem key={index} className="pl-4 md:pl-6 md:basis-2/3 lg:basis-1/2">
                <div
                  className="h-full p-10 rounded-xl group transition-all duration-500 border border-yellow-400/30 hover:border-yellow-400"
                >
                  <p className="text-lg md:text-xl text-neutral-300">
                    {scenario}
                  </p>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="hidden md:block">
            <CarouselPrevious className="border-primary/20 hover:bg-primary/20 -left-6" />
            <CarouselNext className="border-primary/20 hover:bg-primary/20 -right-6" />
          </div>
        </Carousel>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>
    </section>
  );
}
