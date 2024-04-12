import { Badge } from "react-bootstrap";
import "./MovieCard.style.scss";
import { FaStar, FaTrophy } from "react-icons/fa";

function MovieCard({ movie }) {
  return (
    <div
      style={{
        backgroundImage:
          "url(" +
          `https://image.tmdb.org/t/p/w600_and_h900_bestv2${movie.poster_path}` +
          ")",
      }}
      className="movie-card"
    >
      <div className="overlay">
        <div>
          <h2>{movie.title}</h2>
          {movie.genre_ids.map((id) => (
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
