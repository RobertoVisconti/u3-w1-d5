/* eslint-disable no-unused-vars */
import { Component } from "react";
import { Container, Row, Col, Spinner, Alert } from "react-bootstrap";
import { useParams } from "react-router-dom";

export function MovieDetailsWrapper() {
  const { movieId } = useParams();
  return <MovieDetails movieId={movieId} />;
}

class MovieDetails extends Component {
  state = {
    movie: null,
    comments: [],
    loading: true,
    error: null,
  };

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    const { movieId } = this.props;

    try {
      const resMovie = await fetch(
        `https://www.omdbapi.com/?i=${movieId}&apikey=8f49011f`,
      );
      const movieData = await resMovie.json();

      const resComments = await fetch(
        `https://striveschool-api.herokuapp.com/api/comments/${movieId}`,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OWYzM2UzYWYwNDIwZDAwMTUxNTVhNjciLCJpYXQiOjE3Nzc1NDg4NTgsImV4cCI6MTc3ODc1ODQ1OH0.62LnJWSbfVbpl0zzC3UgMPybFX4Rxqxkv4X8DdQI9II",
          },
        },
      );
      console.log(resComments);
      const commentsData = await resComments.json();

      this.setState({
        movie: movieData,
        comments: commentsData,
        loading: false,
      });
    } catch (error) {
      this.setState({
        error: "Errore nel caricamento dati",
        loading: false,
      });
    }
  };

  render() {
    const { movie, comments, loading, error } = this.state;

    if (loading) return <Spinner animation="border" />;

    if (error) return <Alert variant="danger">{error}</Alert>;

    return (
      <Container fluid className="text-light my-5">
        {movie && (
          <Row className="align-items-start">
            {/* POSTER */}
            <Col md={4} className="mb-4 mt-5">
              <img
                src={movie.Poster !== "N/A" ? movie.Poster : "/no-image.png"}
                alt={movie.Title}
                className="img-fluid rounded shadow"
              />
            </Col>

            {/* INFO FILM */}
            <Col md={8}>
              <h2 className="fw-bold mt-5">{movie.Title}</h2>
              <p className="text-muted">
                {movie.Year} • {movie.Runtime} • {movie.Genre}
              </p>

              <p>{movie.Plot}</p>

              <p>
                <b>Regista:</b> {movie.Director}
              </p>
              <p>
                <b>Cast:</b> {movie.Actors}
              </p>
            </Col>
          </Row>
        )}

        {/* COMMENTI */}
        <h4 className="mt-5 mb-3">Commenti</h4>

        {comments.length > 0 ? (
          comments.map((c) => (
            <div
              key={c._id}
              className="bg-dark border border-secondary rounded p-3 mb-3 shadow-sm"
            >
              <div className="d-flex justify-content-between">
                <strong className="text-info">
                  {c.author || "Utente anonimo"}
                </strong>
                <span>⭐ {c.rate}</span>
              </div>

              <p className="mb-1 mt-2">{c.comment}</p>
            </div>
          ))
        ) : (
          <p className="text-muted">Nessun commento</p>
        )}
      </Container>
    );
  }
}

export default MovieDetailsWrapper;
