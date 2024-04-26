import { useQuery } from "@tanstack/react-query";
import api from "../utils/api";

export const useMovieDetail = ({ id }) => {
  return useQuery({
    queryKey: ["movie-details", { id }],
    queryFn: () => {
      return api.get(`/movie/${id}`);
    },
    select: (result) => result.data,
  });
};
