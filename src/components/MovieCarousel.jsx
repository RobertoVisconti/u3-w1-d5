import { Component } from "react";
import { Carousel, Row, Col, Container, Spinner } from "react-bootstrap";

class MovieCarousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movieChunks: [],
      loading: true,
      error: null,
    };
  }

  componentDidMount() {
    this.fetchMovies();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.searchQuery !== this.props.searchQuery) {
      this.fetchMovies();
    }
  }

  chunkArray = (array, size) => {
    const chunks = [];
    for (let i = 0; i < array.length; i += size) {
      chunks.push(array.slice(i, i + size));
    }
    return chunks;
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
          const chunks = this.chunkArray(cleanMovies, 6);
          this.setState({ movieChunks: chunks, loading: false });
        } else {
          this.setState({ movieChunks: [], loading: false });
        }
      })
      .catch((err) => this.setState({ error: err.message, loading: false }));
  };

  render() {
    const { movieChunks, loading, error } = this.state;

    if (loading)
      return (
        <Spinner
          animation="border"
          variant="danger"
          className="d-block mx-auto my-5"
        />
      );
    if (error) return <p className="text-center my-5">{error}</p>;

    return (
      <Container fluid className="py-4 bg-transparent">
        <h2 className="mb-4 ps-5 fw-bold text-capitalize text-light">
          {this.props.searchQuery}
        </h2>

        <Carousel indicators={false} interval={null} className="px-5">
          {movieChunks.map((chunk, index) => (
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
