import Image from "next/image";
import { useMemo } from "react";

interface StarRatesProps {
  value?: number;
}

const StarRates = ({ value = 6 }: StarRatesProps) => {
  const clipPath = useMemo(() => {
    return `inset(0 ${(10 - value) * 10}% 0 0)`;
  }, [value]);

  return (
    <div className="relative aspect-[11/2] hue-rotate-[270deg] h-5 w-auto">
      <Image
        src="/stars.webp"
        alt="stars"
        className="absolute inset-0"
        height={20}
        width={120}
      />
      <Image
        src="/stars-filled.webp"
        alt="stars"
        className="absolute inset-0"
        height={20}
        width={120}
        style={{
          clipPath,
        }}
      />
    </div>
  );
};

export default StarRates;
