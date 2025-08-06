"use client";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/carousel-experience";
import { cn } from "@/lib/utils";
import Autoplay from "embla-carousel-autoplay";
import React from "react";

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

  const images = ["/Alubassa/factory_polish.webp", "/Alubassa/factory_worker.webp", "/Alubassa/polish.webp", "/Alubassa/pots_and_worker.webp", "/Alubassa/tools.webp", "/Alubassa/working_metal.webp", "/Alubassa/technicien.webp", "/Alubassa/polishing_metal.webp", "/Alubassa/technician_order.webp", "/Alubassa/office_screen.webp", "/Alubassa/image_spec.webp", "/Alubassa/factory_photo.webp", "/Alubassa/repair.webp", "/Alubassa/workers_duo.webp"];

  return (
    <Carousel
      opts={{ loop: true }}
      plugins={[Autoplay({ delay: 5000 })]}
      setApi={setApi}
      align="center"
      className="mx-auto w-full px-4 max-w-[1165px] overflow-hidden"
    >
      <CarouselContent className="max-w-[1162px] gap-10 items-center h-full">
        {images.map((image, i) => {
          const isActive = current - 1 === i;
          return (
            <CarouselItem
              key={i}
              className={cn(
                "basis-[80%] sm:basis-2/3 lg:basis-2/3 max-w-[918px]", // garde la base responsive
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
  );
}

export default ImageCarousel;
