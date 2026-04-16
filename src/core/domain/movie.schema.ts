import { z } from "zod";
import { ICreateMovie } from "./movie";

export const createMovieSchema: z.ZodType<ICreateMovie> = z.object({
  name: z.string().min(1),
  duration: z.number().min(1),
  release: z.string().min(1),
});

export const updateMovieSchema: z.ZodType<ICreateMovie> = z.object({
  name: z.string().min(1),
  duration: z.number().min(1),
  release: z.string().min(1),
});
