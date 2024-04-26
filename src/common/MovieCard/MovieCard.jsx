import { Badge } from "react-bootstrap";
import "./MovieCard.style.scss";
import { FaStar, FaTrophy } from "react-icons/fa";
import { useMovieGenreQuery } from "../../hooks/useMovieGenre";
import { useNavigate } from "react-router-dom";

function MovieCard({ movie }) {
  const { data: genreData } = useMovieGenreQuery();

  const showGenre = (genreIdList) => {
    if (!genreData) return [];
    const genreNameList = genreIdList.map((id) => {
      const genreObj = genreData.find((genre) => genre.id === id);
      return genreObj.name;
    });
    return genreNameList;
  };

  const navigate = useNavigate();

  const movieDetailPage = () => {
    navigate(`/movies/${movie.id}`);
    window.scrollTo(0, 0); // 최상단으로 이동되는 경로 추가
  };

  return (
    <div
      style={{
        backgroundImage:
          "url(" +
          `https://image.tmdb.org/t/p/w600_and_h900_bestv2${movie.poster_path}` +
          ")",
      }}
      className="movie-card"
      onClick={movieDetailPage}
    >
      <div className="overlay">
        <div>
          <h2>{movie.title}</h2>
          {showGenre(movie.genre_ids).map((id) => (
            <Badge bg="danger" key={id}>
              {id}
            </Badge>
          ))}
        </div>
        <div>
          <div className="align-center">
            <FaStar className="icons" />
            {movie.vote_average}
          </div>
          <div className="align-center">
            <FaTrophy className="icons" />
            {movie.popularity}
          </div>
          <div
            style={{
              color: movie.adult ? `var(--bs-red)` : `var(--bs-primary)`,
            }}
            className="movie-adult"
          >
            {movie.adult ? "18+" : "18-"}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
