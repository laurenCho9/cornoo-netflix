import { Badge, Col, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useMovieDetail } from "../../hooks/useMovieDatails";
import "./MovieDetail.style.scss";
import "../../common/MovieCard/MovieCard";
import {
  FaStar,
  FaTrophy,
  FaRegCalendarCheck,
  FaRegClock,
  FaCoins,
} from "react-icons/fa";

function MovieDetailPage() {
  let params = useParams();
  const { data, isLoading, isError, error } = useMovieDetail(params);
  console.log("poster", data);
  if (isLoading) {
    return <h1>Loading.... </h1>;
  }
  if (isError) {
    return <Alert variant="danger">{error.message}</Alert>;
  }

  return (
    <div
      className="movie-detail"
      style={{
        backgroundImage:
          "url(" +
          `https://media.themoviedb.org/t/p/w1920_and_h800_multi_faces${data.backdrop_path}` +
          ")",
      }}
    >
      <div className="dimmed">
        <Row className="container movie-detail-container">
          <Col className="movie-detail-align">
            <div
              className="movie-detail-poster"
              style={{
                backgroundImage:
                  "url(" +
                  `https://www.themoviedb.org/t/p/w300_and_h450_bestv2${data.poster_path}` +
                  ")",
              }}
            ></div>
          </Col>
          <Col className="movie-detail-align last-bottom">
            <p>
              {data?.genres.map((item, id) => (
                <Badge bg="danger" key={id}>
                  {item.name}
                </Badge>
              ))}
            </p>
            <h1>{data?.title}</h1>
            <p className="overview">{data?.overview}</p>
            <p className="align-center">
              개봉 일자 : <FaRegCalendarCheck /> {data?.release_date}
            </p>
            <p className="align-center">
              상영 시간 :
              <FaRegClock />
              {data?.runtime}분
            </p>
            <p className="align-center">
              영화 평점 :
              <FaStar className="icons-yellow" />
              {data?.vote_average}점
            </p>
            <p className="align-center">
              인기 순위 :
              <FaTrophy className="icons-yellow" />
              {data?.popularity}
            </p>
            <p className="align-center">
              영화 예산 :
              <FaCoins className="icons-yellow" />
              {data?.budget.toLocaleString()}
            </p>
            <p>
              연령 제한 :
              <span
                style={{
                  color: data?.adult ? `var(--bs-red)` : `var(--bs-primary)`,
                }}
                className="movie-adult"
              >
                {data?.adult ? " 18+" : " 18-"}
              </span>
            </p>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default MovieDetailPage;
