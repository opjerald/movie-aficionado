import { cn } from "@/lib/utils";

interface BackgroundOverlayProps {
  image: string;
}

const BackgroundOverlay = ({image}: BackgroundOverlayProps) => {
  return ( <div
    style={{
      backgroundImage: `url(/api/image${image})`,
    }}
    className={cn(
      "fixed top-0 -z-[1] h-full w-full bg-cover bg-[top_center] bg-no-repeat",
      "before:absolute before:inset-x-0 before:mx-auto before:h-full before:bg-gradient-to-l before:from-background/5 before:via-background/30 before:to-background/50",
      "after:absolute after:inset-x-0 after:mx-auto after:h-full after:bg-gradient-to-b after:from-background/5 after:via-background/30 after:to-background",
    )}
  ></div> );
}
 
export default BackgroundOverlay;