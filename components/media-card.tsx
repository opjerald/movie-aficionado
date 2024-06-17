import { Media } from "@/types";
import Image from "next/image";

interface MediaCardProps {
  media: Media;
}

const MediaCard = ({ media }: MediaCardProps) => {
  return (
    <div className="duration-400 relative flex-[0_0_4%] bg-gray-400/10 transition before:absolute before:inset-x-0 before:mx-auto before:h-full before:rounded-lg before:bg-background/70 hover:z-10 hover:scale-105">
      <Image
        src={`/api/image${media.poster_path}`}
        alt={media.title}
        width={200}
        height={400}
        className="rounded-xl object-cover"
      />
    </div>
  );
};

export default MediaCard;
