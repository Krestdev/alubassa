"use client";
import React from "react";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/carousel-experience";
import Autoplay from "embla-carousel-autoplay";
import { RevealGroup } from "@/components/reveal";
import { cn } from "@/lib/utils";

function ImageCarousel() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }
    setCurrent(api.selectedScrollSnap() + 1);
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  const images = ["/car.webp", "/car.webp", "/car.webp"];

  return (
    <RevealGroup
      tag="section"
      id="services"
      className="container-base flex flex-col items-center gap-6 sm:gap-10 overflow-x-hidden"
      y={25}
      delayGap={0.25}
    >
      <Carousel
        opts={{ loop: true }}
        plugins={[Autoplay({ delay: 5000 })]}
        setApi={setApi}
        align="center"
        className="mx-auto w-full px-4"
      >
        <CarouselContent className="max-w-[1162px] gap-10 items-center h-full">
          {images.map((image, i) => {
            const isActive = current - 1 === i;
            return (
              <CarouselItem
                key={i}
                className={cn(
                  "basis-full sm:basis-2/3 lg:basis-2/3 max-w-[918px]", // garde la base responsive
                  //"transition-all duration-500 ease-in-out" // pour fluidité
                )}
              >
                <div
                  className={cn(
                    "w-full h-full transition-all duration-500 ease-in-out transform",
                    isActive ? "scale-100 opacity-100" : "scale-80 opacity-80"
                  )}
                >
                  <img
                    src={image}
                    alt={`Image ${i}`}
                    className="w-full h-auto aspect-video rounded-2xl"
                  />
                </div>
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <span className="w-full inline-flex justify-center items-center gap-3 mt-6">
          <CarouselPrevious />
          <CarouselNext />
        </span>
      </Carousel>
    </RevealGroup>
  );
}

export default ImageCarousel;
