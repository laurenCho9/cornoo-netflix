import { Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useMovieDetail } from "../../hooks/useMovieDatails";

function MovieDetailPage() {
  let params = useParams();
  const { data, isLoading, isError, error } = useMovieDetail(params);

  return (
    <div>
      <Col sm={8}>
        <h1>{data?.title}</h1>
        <p>{data?.overview}</p>
        <p> 연령제한 : {data?.adult ? "over 18" : "under 18"}</p>
        <p> 개봉일자 : {data?.release_date}</p>
        <p> 상영시간 : {data?.runtime}분</p>
        <p> 평점 : {data?.vote_average} 점</p>
      </Col>
    </div>
  );
}

export default MovieDetailPage;
