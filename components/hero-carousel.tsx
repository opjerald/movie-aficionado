"use client";

import Fade from "embla-carousel-fade";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useCallback, useEffect, useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon, PlayIcon } from "lucide-react";
import { EmblaCarouselType } from "embla-carousel";

import { Media } from "@/types";

import { Button } from "@/components/ui/button";
import BackgroundOverlay from "@/components/background-overlay";
import StarRates from "@/components/star-rates";

interface HeroCarouselProps {
  medias: Media[];
}

const HeroCarousel = ({ medias }: HeroCarouselProps) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Fade(),
    Autoplay({ delay: 10000 }),
  ]);
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);

  const onPrevButtonClick = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollPrev();
  }, [emblaApi]);

  const onNextButtonClick = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setPrevBtnDisabled(!emblaApi.canScrollPrev());
    setNextBtnDisabled(!emblaApi.canScrollNext());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onSelect(emblaApi);
    emblaApi.on("reInit", onSelect).on("select", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <div className="relative h-full">
      <div ref={emblaRef} className="h-full overflow-hidden">
        <div className="flex h-full touch-pan-y touch-pinch-zoom [backface-visibility:hidden]">
          {medias.map((media, index) => (
            <div key={index} className="h-full w-[100px] min-w-0 flex-[0_0_100%]">
              <BackgroundOverlay image={media.backdrop_path} />
              <div className="relative flex h-full flex-col items-start">
                <div className="container flex flex-col justify-center gap-5 h-full">
                  <div className="flex flex-col gap-6">
                    <h1 className="text-5xl font-semibold md:text-6xl">
                      {media.original_title}
                    </h1>
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-2">
                        <StarRates value={media.vote_average} />
                        <span>({media.vote_average})</span>
                      </div>
                      <span>•</span>
                      <p>{new Date(media.release_date!).getFullYear()}</p>
                    </div>
                    <p className="max-w-2xl text-base md:text-lg">{media.overview}</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <Button
                      variant="outline"
                      className="rounded-[8px] border border-white bg-transparent px-6 py-4 text-sm text-white hover:border-primary hover:bg-primary md:px-8 md:py-6"
                    >
                      <PlayIcon className="mr-1" />
                      Watch Trailer
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <button
        title="Scroll Prev"
        className="absolute inset-y-0 left-0 flex flex-col items-center justify-center bg-black/30 p-3 opacity-0 transition hover:opacity-100"
        onClick={onPrevButtonClick}
        disabled={prevBtnDisabled}
      >
        <ChevronLeftIcon />
      </button>
      <button
        title="Scroll Next"
        className="absolute inset-y-0 right-0 flex flex-col items-center justify-center bg-black/30 p-3 opacity-0 transition hover:opacity-100"
        onClick={onNextButtonClick}
        disabled={nextBtnDisabled}
      >
        <ChevronRightIcon />
      </button>
    </div>
  );
};

export default HeroCarousel;
