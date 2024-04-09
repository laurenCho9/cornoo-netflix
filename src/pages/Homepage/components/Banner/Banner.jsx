import { usePopularMoviesQuery } from "../../../../hooks/usePopularMovies";

function Banner() {
  const { data } = usePopularMoviesQuery();
  console.log("ddd", data);
  return <div>Banner</div>;
}

export default Banner;
