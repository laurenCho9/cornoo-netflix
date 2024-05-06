import { useQuery } from "@tanstack/react-query";
import api from "../utils/api";

const fetchMovieGenreDetail = () => {
  return api.get(`/genre/movie/list`);
};

export const useMovieGenreDetailQuery = () => {
  return useQuery({
    queryKey: ["movie-genre-details"],
    queryFn: fetchMovieGenreDetail,
    select: (data) => data.genres,
    staleTime: 300000, // ms단위의 5분
  });
};
