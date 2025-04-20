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

  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  return (
    <section className="py-40 px-6 md:px-12 xl:px-20 relative">
      <div className="max-w-5xl mx-auto">
        <SectionHeading className="text-center mb-16">
          Imagine a world where...
        </SectionHeading>
        
        <Carousel
          setApi={setApi}
          className="w-full"
          onSelect={(index) => setCurrent(index)}
        >
          <CarouselContent className="-ml-8">
            {scenarios.map((scenario, index) => (
              <CarouselItem key={index} className="pl-8 md:basis-1/2 lg:basis-1/3">
                <div className="border border-border bg-card rounded-xl h-full p-8 md:p-10 flex items-center min-h-[240px]">
                  <p className="text-lg">{scenario}</p>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center mt-12 gap-4">
            <CarouselPrevious className="static transform-none" />
            <CarouselNext className="static transform-none" />
          </div>
        </Carousel>
        
        <div className="flex justify-center mt-8 gap-1">
          {scenarios.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full ${current === index ? 'bg-primary' : 'bg-muted'}`}
              onClick={() => api?.scrollTo(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
