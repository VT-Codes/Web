import { useMovies } from '.';
import { MoviesEntity } from '@v-thomas/thunder/types';
import { initialMoviesState } from '@v-thomas/thunder/data-access';

export const useMovie = (
  movieId: string
): { movie: MoviesEntity; clearMovies: () => void; addMovie: (movi) => void } => {
  const { movies, clearMovies, addMovie } = useMovies();

  return {
    movie: movies.filter((v: any) => v.id === movieId)[0] || initialMoviesState,
    clearMovies,
    addMovie
  };
};
