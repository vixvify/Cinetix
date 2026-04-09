"use client";

import Image from "next/image";
import Link from "next/link";
import { MovieData } from "@/data/mock-data";

export default function page() {
  return (
    <div className="flex flex-col justify-around items-center w-full mt-10">
      <div className="flex justify-center items-center text-white text-5xl font-bold gap-15">
        <h1>Now Showing</h1>
        <Link href={"/movies/coming"}>
          <h1 className="opacity-20">Coming Soon</h1>
        </Link>
      </div>
      <div className="flex justify-center items-center flex-wrap w-[80%] gap-10 mt-20">
        {MovieData.map((movie, index) => (
          <div key={index}>
            <Link href={`/booking/${movie.id}`}>
              <Image
                src={movie.poster}
                width={300}
                height={400}
                alt="poster"
                className="rounded-xl"
                priority
              ></Image>
            </Link>
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
