export interface IMovies {
  id: string;
  name: string;
  duration: number;
  release: string;
  imgUrl: string;
}

export interface ICreateMovie {
  name: string;
  duration: number;
  release: string;
  imgUrl: string;
}
