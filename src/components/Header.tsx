"use client";

import useEmblaCarousel from "embla-carousel-react";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";

export default function Header() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({
      delay: 3000,
    }),
  ]);
  const header = ["/avatarheader.png", "/spiderheader.png"];
  return (
    <div className="flex justify-center items-center mt-10 pl-20 pr-20 gap-5">
      <ArrowBackIosNewIcon
        onClick={() => emblaApi?.scrollPrev()}
        className="text-white cursor-pointer"
      />
      <div className="overflow-hidden w-full" ref={emblaRef}>
        <div className="flex gap-4">
          <Image
            src={header[0]}
            width={1700}
            height={450}
            alt="poster"
            className="rounded-xl"
          ></Image>
          <Image
            src={header[1]}
            width={1700}
            height={450}
            alt="poster"
            className="rounded-xl"
          ></Image>
        </div>
      </div>
      <ArrowForwardIosIcon
        onClick={() => emblaApi?.scrollNext()}
        className="text-white cursor-pointer"
      />
    </div>
  );
}
