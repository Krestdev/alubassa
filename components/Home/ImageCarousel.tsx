'use client'
import React from 'react'
import {
    Carousel,
    CarouselApi,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/carousel-experience";
  import Autoplay from "embla-carousel-autoplay";
import { RevealGroup } from '@/components/reveal';

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

      const images = ["/car.webp", "/car.webp", "/car.webp","/car.webp", ]
      
  return (
    <RevealGroup tag="section"
        id="services"
        className="container-base flex flex-col items-center gap-6 sm:gap-10 overflow-x-hidden"
        y={25} delayGap={.25}
      >
        <Carousel
          opts={{ loop: true }}
          plugins={[Autoplay({ delay: 5000 })]}
          setApi={setApi}
          className="mx-auto max-w-(--breakpoint-xl) w-full h-auto"
        >
          <CarouselContent className="gap-6 sm:gap-10 items-center h-full">
            {images.map((image, i) => (
              <CarouselItem
                key={i}
                className={`basis-full sm:basis-1/2 lg:basis-3/4 flex flex-col gap-3 justify-between min-h-96 text-center opacity-30 transition-opacity duration-1000 ease-in-out ${
                  ++i === current ? "opacity-500" : "h-2/3 my-auto"
                }`}
              >
                <img src={image} alt={"Image"} className='w-full h-auto aspect-video rounded-2xl' />
              </CarouselItem>
            ))}
          </CarouselContent>
          <span className="w-full inline-flex justify-center items-center gap-3 mt-6">
            <CarouselPrevious />
            <CarouselNext />
          </span>
        </Carousel>
      </RevealGroup>
  )
}

export default ImageCarousel