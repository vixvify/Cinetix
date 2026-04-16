"use client";

import Image from "next/image";
import { Pencil, Trash2, Plus } from "lucide-react";
import { MovieData } from "@/data/mock-data";
import { ComingSoonData } from "@/data/mock-data";
import Link from "next/link";
import Button from "@/components/Button";

export default function page() {
  const movies = [...MovieData, ...ComingSoonData];
  return (
    <div className="p-8 text-white w-[80%] flex flex-col mx-auto justify-center items-center ">
      <div className="flex justify-between items-center mb-20 w-[90%] ">
        <h1 className="text-3xl font-bold">🎬 Movie Management</h1>

        <Link href="/admin/movie/create">
          <Button>
            <span className="flex items-center gap-2">
              <Plus size={18} />
              เพิ่มหนัง
            </span>
          </Button>
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
                <Link href={`/admin/movie/update/${movie.id}`}>
                  <Button variant="warning">
                    <span className="flex items-center gap-1 text-sm">
                      <Pencil size={14} />
                      Edit
                    </span>
                  </Button>
                </Link>

                <Button variant="danger">
                  <span className="flex items-center gap-1 text-sm">
                    <Trash2 size={14} />
                    Delete
                  </span>
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
