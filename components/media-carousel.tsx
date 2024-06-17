"use client";

import { Media } from "@/types";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { StarIcon } from "lucide-react";

interface MediaCarouselProps {
  title: string;
  medias: Media[];
  keyName: "title" | "name";
}

const MediaCarousel = ({ medias, title, keyName }: MediaCarouselProps) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ dragFree: true });

  return (
    <div className="py-10 flex w-full flex-col gap-5">
      <h1 className="container text-2xl font-bold">{title}</h1>
      <div ref={emblaRef} className="w-full overflow-hidden pl-10">
        <div className="flex h-full touch-pan-y touch-pinch-zoom gap-5 [backface-visibility:hidden]">
          {medias.map((media) => (
            <div
              key={media.id}
              className="flex min-w-[150px] sm:min-w-[200px] md:min-w-[250px] flex-col gap-2 rounded-xl"
            >
              <Image
                src={`/api/image${media.poster_path}`}
                alt={media.title ?? media.name}
                width={250}
                height={400}
                className="rounded-xl h-auto md:h-[400px]"
              />
              <div className="flex flex-col gap-1">
                <p className="truncate">{media.title ?? media.name}</p>
                <div className="flex items-center gap-1">
                  <p className="text-sm text-foreground/50">{new Date(media.release_date! ?? media.first_air_date).getFullYear()}</p>
                  <p className="flex items-center gap-1 text-sm">
                    <StarIcon size={15} className="text-primary fill-primary" />
                    <span>{Math.ceil(media.vote_average)}/10</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MediaCarousel;
