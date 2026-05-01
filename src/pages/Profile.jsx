import {
  Container,
  Row,
  Col,
  Button,
  Form,
  Dropdown,
  Image,
} from "react-bootstrap";
import { BsPencilFill } from "react-icons/bs";

const Profile = () => {
  return (
    <Container className="my-5 py-5 text-white" style={{ maxWidth: "800px" }}>
      <Row className="mb-4">
        <Col className="border-bottom border-secondary border-2 pb-2">
          <h1 className="display-2 fw-bold">Edit Profile</h1>
        </Col>
      </Row>

      <Row>
        <Col xs={12} md={4} className="mb-4 mb-md-0">
          <div className="position-relative d-inline-block w-100">
            <Image
              src="/choppy.png"
              className="rounded-1 w-100"
              alt="Profile Avatar"
            />
            <div
              className="position-absolute bottom-0 start-0 m-2 bg-dark border border-light rounded-circle d-flex align-items-center justify-content-center"
              style={{ width: "35px", height: "35px", cursor: "pointer" }}
            >
              <BsPencilFill size={16} color="white" />
            </div>
          </div>
        </Col>

        {/* Form Settings */}
        <Col xs={12} md={8}>
          <Form>
            <Form.Control
              type="text"
              placeholder="Strive Student"
              className="bg-secondary text-white border-0 rounded-0 mb-4 py-2"
            />

            <h5 className="text-secondary mb-3">Language:</h5>
            <Dropdown className="mb-4">
              <Dropdown.Toggle
                variant="dark"
                className="border-white rounded-0"
              >
                English
              </Dropdown.Toggle>
              <Dropdown.Menu variant="dark">
                <Dropdown.Item>Italiano</Dropdown.Item>
                <Dropdown.Item>Français</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <hr className="border-secondary mb-4" />

            <h5 className="text-secondary mb-3">Maturity Settings:</h5>
            <div className="bg-secondary d-inline-block px-3 py-1 fw-bold mb-3">
              ALL MATURITY RATINGS
            </div>
            <p className="small mb-3">
              Show titles of all maturity ratings for this profile.
            </p>
            <Button
              variant="outline-secondary"
              className="rounded-0 mb-4 px-4 text-white border-secondary"
            >
              EDIT
            </Button>

            <hr className="border-secondary mb-4" />

            <h5 className="text-secondary mb-3">Autoplay Controls</h5>
            <Form.Check
              type="checkbox"
              id="next-ep"
              label="Autoplay next episode in a series on all devices."
              className="small mb-2 custom-check"
            />
            <Form.Check
              type="checkbox"
              id="previews-auto"
              label="Autoplay previews while browsing on all devices."
              className="small mb-4 custom-check"
            />
          </Form>
        </Col>
      </Row>

      <Row className="border-top border-secondary pt-4 mt-2">
        <Col className="d-flex gap-3 flex-wrap">
          <Button variant="light" className="rounded-0 px-4 fw-bold">
            SAVE
          </Button>
          <Button
            variant="outline-secondary"
            className="rounded-0 px-4 text-white border-secondary"
          >
            CANCEL
          </Button>
          <Button
            variant="outline-secondary"
            className="rounded-0 px-4 text-white border-secondary"
          >
            DELETE PROFILE
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Profile;
