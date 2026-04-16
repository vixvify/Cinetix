import http from "@/lib/http";
import { ApiResponse } from "../interface/response";
import { IMovieRepository } from "@/core/ports/movie.repository";
import { IMovies } from "@/core/domain/movie";

export class MovieRepository implements IMovieRepository {
  async getMovie(): Promise<ApiResponse<IMovies[]>> {
    const response = await http.get<ApiResponse<IMovies[]>>(`/movie`);
    return response.data;
  }

  async createMovie(data: FormData): Promise<ApiResponse<IMovies>> {
    const response = await http.post<ApiResponse<IMovies>>(`/movie`, data);
    return response.data;
  }

  async deleteMovie(id: string): Promise<ApiResponse<void>> {
    const response = await http.delete<ApiResponse<void>>(`/movie/${id}`);
    return response.data;
  }

  async updateMovie(data: FormData, id: string): Promise<ApiResponse<IMovies>> {
    const response = await http.put<ApiResponse<IMovies>>(`/movie/${id}`, data);
    return response.data;
  }
}
