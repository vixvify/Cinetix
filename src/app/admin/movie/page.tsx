"use client";

import Image from "next/image";
import { Pencil, Trash2, Plus } from "lucide-react";
import { MovieData } from "@/data/mock-data";
import { ComingSoonData } from "@/data/mock-data";
import Link from "next/link";

export default function page() {
  const movies = [...MovieData, ...ComingSoonData];
  return (
    <div className="p-8 text-white w-[80%] flex flex-col mx-auto">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">🎬 Movie Management</h1>

        <Link href="/admin/movie/create">
          <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-xl transition">
            <Plus size={18} />
            เพิ่มหนัง
          </button>
        </Link>
      </div>

      <div className="flex flex-wrap gap-6 justify-center items-center w-full">
        {movies.map((movie, index) => (
          <div
            key={index}
            className="bg-zinc-900 rounded-2xl overflow-hidden shadow-lg "
          >
            <div className="relative">
              <Image
                src={movie.poster}
                alt="movie"
                className="object-cover"
                width={300}
                height={400}
              />
            </div>

            <div className="p-4 flex flex-col gap-2">
              <h2 className="text-xl font-semibold">{movie.title}</h2>
              <p className="text-sm text-gray-400">{movie.release}</p>

              <div className="flex justify-end gap-2 mt-3">
                <button className="flex items-center gap-1 bg-yellow-500 hover:bg-yellow-600 px-3 py-1 rounded-lg text-sm">
                  <Pencil size={14} />
                  Edit
                </button>

                <button className="flex items-center gap-1 bg-red-600 hover:bg-red-700 px-3 py-1 rounded-lg text-sm">
                  <Trash2 size={14} />
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
