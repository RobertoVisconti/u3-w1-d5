import { Component } from "react";
import { Carousel, Row, Col, Container, Spinner } from "react-bootstrap";

class MovieCarousel extends Component {
  state = {
    moviePoster: [],
    loading: true,
    error: null,
  };

  componentDidMount() {
    this.fetchMovies();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.searchQuery !== this.props.searchQuery) {
      this.fetchMovies();
    }
  }

  chunkArray = (array, size) => {
    const Poster = [];
    for (let i = 0; i < array.length; i += size) {
      Poster.push(array.slice(i, i + size));
    }
    return Poster;
  };

  fetchMovies = () => {
    const { searchQuery } = this.props;
    this.setState({ loading: true });

    fetch(`https://www.omdbapi.com/?s=${searchQuery}&apikey=8f49011f`)
      .then((res) => res.json())
      .then((data) => {
        if (data.Search) {
          const cleanMovies = data.Search.filter(
            (movie) => movie.Poster && movie.Poster.startsWith("http"),
          );
          const Poster = this.chunkArray(cleanMovies, 6);
          this.setState({ moviePoster: Poster, loading: false });
        } else {
          this.setState({ moviePoster: [], loading: false });
        }
      })
      .catch((err) => this.setState({ error: err.message, loading: false }));
  };

  render() {
    const { moviePoster, loading, error } = this.state;

    if (loading) {
      return (
        <Spinner
          animation="border"
          variant="danger"
          className="d-block mx-auto my-5"
        />
      );
    }

    if (error) return <p className="text-center my-5 text-light">{error}</p>;

    return (
      <Container fluid className="py-4 bg-transparent">
        <h2 className="mb-4 fw-bold text-capitalize text-light">
          {this.props.searchQuery}
        </h2>

        <Carousel indicators={false} interval={null} className="px-5">
          {moviePoster.map((chunk, index) => (
            <Carousel.Item key={index}>
              <Row className="gx-3">
                {chunk.map((movie) => (
                  <Col key={movie.imdbID} xs={6} md={4} lg={2}>
                    <div className="d-flex flex-column align-items-center">
                      <img
                        src={movie.Poster}
                        alt={movie.Title}
                        className="img-fluid rounded shadow-sm"
                        style={{
                          width: "100%",
                          height: "auto",
                          aspectRatio: "2/3",
                          objectFit: "cover",
                        }}
                      />
                    </div>
                  </Col>
                ))}
              </Row>
            </Carousel.Item>
          ))}
        </Carousel>
      </Container>
    );
  }
}

export default MovieCarousel;
