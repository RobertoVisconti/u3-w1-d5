import { Component } from "react";
import {
  Carousel,
  Row,
  Col,
  Container,
  Spinner,
  Modal,
  Button,
} from "react-bootstrap";

class MovieCarousel extends Component {
  state = {
    moviePoster: [],
    loading: true,
    error: null,
    showErrorModal: false,
  };

  componentDidMount() {
    this.fetchMovies();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.searchQuery !== this.props.searchQuery) {
      this.fetchMovies();
    }
  }

  posterArray = (array, size) => {
    const Poster = [];
    for (let i = 0; i < array.length; i += size) {
      Poster.push(array.slice(i, i + size));
    }
    return Poster;
  };

  handleCloseModal = () => {
    this.setState({ showErrorModal: false });
  };

  fetchMovies = () => {
    const { searchQuery } = this.props;
    this.setState({ loading: true, error: null });

    fetch(`https://www.omdbapi.com/?s=${searchQuery}&apikey=8f49011f`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Errore nella comunicazione con il server.");
        }
        return res.json();
      })
      .then((data) => {
        if (data.Response === "True") {
          const cleanMovies = data.Search.filter(
            (movie) => movie.Poster && movie.Poster.startsWith("http"),
          );
          const Poster = this.posterArray(cleanMovies, 6);
          this.setState({ moviePoster: Poster, loading: false });
        } else {
          throw new Error(data.Error || "Nessun risultato trovato.");
        }
      })
      .catch((err) => {
        this.setState({
          error: err.message,
          loading: false,
          showErrorModal: true,
        });
      });
  };

  render() {
    const { moviePoster, loading, error, showErrorModal } = this.state;

    if (loading) {
      return (
        <Spinner
          animation="border"
          variant="danger"
          className="d-block mx-auto my-5"
        />
      );
    }

    return (
      <Container fluid className="py-4 bg-transparent">
        <h2 className="mb-4 ms-5 fw-bold text-capitalize text-light">
          {this.props.searchQuery}
        </h2>

        {!loading && moviePoster.length === 0 && !error && (
          <p className="text-center text-light">
            Nessun film da mostrare per questa categoria.
          </p>
        )}

        <Carousel indicators={false} interval={null} className="px-5">
          {moviePoster.map((chunk, index) => (
            <Carousel.Item key={index}>
              <Row className="gx-3">
                {chunk.map((movie) => (
                  <Col key={movie.imdbID} xs={6} md={4} lg={2} className="py-2">
                    <div className="movie-card-container">
                      <img
                        src={movie.Poster}
                        alt={movie.Title}
                        className="img-fluid"
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

        {/* --- MODALE DI GESTIONE ERRORI --- */}
        <Modal
          show={showErrorModal}
          onHide={this.handleCloseModal}
          centered
          contentClassName="bg-dark text-light border-secondary"
        >
          <Modal.Header closeButton closeVariant="white">
            <Modal.Title>Attenzione</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>Spiacenti, si è verificato un problema:</p>
            <b className="text-danger">{error}</b>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleCloseModal}>
              Chiudi
            </Button>
            <Button
              variant="danger"
              onClick={() => {
                this.handleCloseModal();
                this.fetchMovies();
              }}
            >
              Riprova
            </Button>
          </Modal.Footer>
        </Modal>
      </Container>
    );
  }
}

export default MovieCarousel;
