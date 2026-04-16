import { ICreateMovie, IUpdateMovie, IMovies } from "../domain/movie";
import { IMovieRepository } from "../ports/movie.repository";
import { createMovieSchema, updateMovieSchema } from "../domain/movie.schema";
export class MovieService {
  constructor(private readonly movieRepository: IMovieRepository) {}

  async getMovie(): Promise<IMovies[]> {
    const response = await this.movieRepository.getMovie();
    return response.data;
  }

  async createMovie(data: ICreateMovie, poster: File): Promise<IMovies> {
    const parsed = createMovieSchema.parse(data);

    const formData = new FormData();
    Object.entries(parsed).forEach(([key, value]) => {
      formData.append(key, value?.toString() ?? "");
    });
    formData.append("poster", poster);

    const response = await this.movieRepository.createMovie(formData);
    return response.data;
  }

  async deleteMovie(id: string): Promise<void> {
    const response = await this.movieRepository.deleteMovie(id);
    return response.data;
  }

  async updateMovie(
    data: IUpdateMovie,
    poster: File,
    id: string,
  ): Promise<IMovies> {
    const parsed = updateMovieSchema.parse(data);

    const formData = new FormData();
    Object.entries(parsed).forEach(([key, value]) => {
      formData.append(key, value?.toString() ?? "");
    });
    formData.append("poster", poster);

    const response = await this.movieRepository.updateMovie(formData, id);
    return response.data;
  }
}
