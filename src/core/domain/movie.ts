export interface IMovies {
  id: string;
  name: string;
  duration: number;
  release: string;
  poster: string;
}

export interface ICreateMovie {
  name: string;
  duration: number;
  release: string;
}

export interface IUpdateMovie {
  name: string;
  duration: number;
  release: string;
}
