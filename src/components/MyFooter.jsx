import { Container, Row, Col, Button } from "react-bootstrap";
import { Facebook, Instagram, TwitterX, Youtube } from "react-bootstrap-icons";

const MyFooter = () => {
  return (
    <div className="d-flex justify-content-center text-center text-lg-start bg-dark">
      <Container className="py-5" style={{ maxWidth: "900px" }}>
        {/*SOCIAL ICONS */}
        <div className="d-flex justify-content-center justify-content-lg-start gap-3 mb-3">
          <a
            href="https://facebook.com/netflix"
            target="_blank"
            rel="noreferrer"
          >
            <Facebook className="text-secondary" size={20} />
          </a>
          <a
            href="https://instagram.com/netflixit"
            target="_blank"
            rel="noreferrer"
          >
            <Instagram className="text-secondary" size={20} />
          </a>
          <a href="https://x.com/NetflixIT" target="_blank" rel="noreferrer">
            <TwitterX className="text-secondary" size={20} />
          </a>
          <a href="https://youtube.com" target="_blank" rel="noreferrer">
            <Youtube className="text-secondary" size={20} />
          </a>
        </div>

        {/* FOOTER LINKS */}
        <Row className="g-4 mb-4">
          <Col xs={12} md={6} lg={3}>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a
                  href="#"
                  className="text-secondary text-decoration-none small"
                >
                  Audio description
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="text-secondary text-decoration-none small"
                >
                  Investor Relations
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="text-secondary text-decoration-none small"
                >
                  Legal Notes
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="text-secondary text-decoration-none small"
                >
                  Advertising Preferences
                </a>
              </li>
            </ul>
          </Col>
          <Col xs={12} md={6} lg={3}>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a
                  href="#"
                  className="text-secondary text-decoration-none small"
                >
                  Help Center
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="text-secondary text-decoration-none small"
                >
                  Job opportunities
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="text-secondary text-decoration-none small"
                >
                  Cookie Preferences
                </a>
              </li>
            </ul>
          </Col>
          <Col xs={12} md={6} lg={3}>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a
                  href="#"
                  className="text-secondary text-decoration-none small"
                >
                  Gift Card
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="text-secondary text-decoration-none small"
                >
                  Terms of Use
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="text-secondary text-decoration-none small"
                >
                  About the company
                </a>
              </li>
            </ul>
          </Col>
          <Col xs={12} md={6} lg={3}>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a
                  href="#"
                  className="text-secondary text-decoration-none small"
                >
                  Media Center
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="text-secondary text-decoration-none small"
                >
                  Privacy
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="text-secondary text-decoration-none small"
                >
                  Contact us
                </a>
              </li>
            </ul>
          </Col>
        </Row>

        <div>
          <Button
            variant="outline-secondary"
            size="sm"
            className="rounded-0 mb-3 px-2 py-1"
          >
            Service Code
          </Button>
        </div>

        <div className="text-secondary small">
          © 1997-{new Date().getFullYear()} Netflix, Inc.
        </div>
      </Container>
    </div>
  );
};

export default MyFooter;
