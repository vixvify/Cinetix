"use client";

import Link from "next/link";
import Image from "next/image";
import { ComingSoonData } from "@/data/mock-data";

export default function page() {
  return (
    <div className="flex flex-col justify-around items-center w-full mt-10">
      <div className="flex justify-center items-center text-white text-5xl font-bold gap-15">
        <Link href={"/movies/showing"}>
          <h1 className="opacity-20">Now Showing</h1>
        </Link>
        <h1>Coming Soon</h1>
      </div>
      <div className="flex justify-center items-center flex-wrap w-[80%] gap-10 mt-20">
        {ComingSoonData.map((movie, index) => (
          <div key={index}>
            <Image
              src={movie.poster}
              width={300}
              height={400}
              alt="poster"
              className="rounded-xl"
              priority
            ></Image>
            <h1 className="text-white mt-5 text-xl font-bold">{movie.title}</h1>
            <h2 className="text-gray-300 text-sm">{movie.release}</h2>
            <h3 className="text-gray-300 text-sm opacity-50">
              {movie.duration} นาที
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
}
