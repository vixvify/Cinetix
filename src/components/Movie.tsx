"use client";

import useEmblaCarousel from "embla-carousel-react";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Image from "next/image";
import { MovieData } from "../data/mock-data";
import Link from "next/link";

export default function Movie() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
  });
  return (
    <div className="flex flex-col justify-center items-start px-20 mt-5">
      <h1 className="text-white text-3xl font-semibold">Now Showing</h1>
      <div className="flex justify-center items-center mt-10 gap-5 w-full">
        <ArrowBackIosNewIcon
          onClick={() => emblaApi?.scrollPrev()}
          className="text-white cursor-pointer"
        />
        <div className="overflow-hidden w-full" ref={emblaRef}>
          <div className="flex gap-x-5">
            {MovieData.map((item, index) => (
              <div key={index} className="flex-[0_0_auto] mr-5 last:mr-10">
                <Link href={`/booking/${item.id}`}>
                  <Image
                    src={item.poster}
                    width={300}
                    height={450}
                    alt="poster"
                    key={index}
                    className="rounded-xl"
                    priority
                  />
                </Link>
                <h1 className="text-white text-xl font-semibold mt-4">
                  {item.title}
                </h1>
                <h2 className="text-gray-300">{item.release}</h2>
              </div>
            ))}
          </div>
        </div>
        <ArrowForwardIosIcon
          onClick={() => emblaApi?.scrollNext()}
          className="text-white cursor-pointer"
        />
      </div>
    </div>
  );
}
