import { ApiResponse } from "@/infra/interface/response";
import { IMovies } from "../domain/movie";

export interface IMovieRepository {
  getMovie(): Promise<ApiResponse<IMovies[]>>;
  createMovie(data: FormData): Promise<ApiResponse<IMovies>>;
  deleteMovie(id: string): Promise<ApiResponse<void>>;
  updateMovie(data: FormData, id: string): Promise<ApiResponse<IMovies>>;
}
