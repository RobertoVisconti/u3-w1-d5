import { Container, Row, Col, Button, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Paypal } from "react-bootstrap-icons";

const Settings = () => {
  return (
    <Container
      className="text-white mt-5 pt-5"
      style={{ maxWidth: "800px", margin: "0 auto" }}
    >
      <Row className="mb-3">
        <Col xs={12}>
          <h1 className="fw-normal">Account</h1>
          <hr className="opacity-25" />
        </Col>
      </Row>

      {/* --- MEMEBERSHIP & BILLING --- */}
      <Row className="mb-4 text-start">
        <Col md={4} className="text-secondary fw-bold small mb-3">
          MEMBERSHIP & BILLING
          <Button
            variant="light"
            className="rounded-0 mt-3 d-none d-md-block border-0 shadow-sm px-4 fw-bold"
          >
            Cancel Membership
          </Button>
        </Col>
        <Col md={8}>
          <div className="d-flex justify-content-between border-bottom border-secondary pb-2 mb-2">
            <span className="fw-bold">student@strive.school</span>
            <a href="#" className="text-decoration-none">
              Change account email
            </a>
          </div>
          <div className="d-flex justify-content-between border-bottom border-secondary pb-2 mb-2 text-secondary">
            <span>Password: ********</span>
            <a href="#" className="text-decoration-none">
              Change password
            </a>
          </div>
          <div className="d-flex justify-content-between border-bottom border-secondary pb-2 mb-3 text-secondary">
            <span>Phone: 321 044 1279</span>
            <a href="#" className="text-decoration-none">
              Change phone number
            </a>
          </div>

          <div className="d-flex justify-content-between border-bottom border-secondary pb-2 mb-2">
            <span className="fw-bold">
              <Paypal className="me-2 text-primary" /> PayPal
              admin@strive.school
            </span>
            <a href="#" className="text-decoration-none">
              Update payment info
            </a>
          </div>
          <div className="text-end mb-3 border-bottom border-secondary pb-2">
            <a href="#" className="text-decoration-none d-block small mb-1">
              Billing details
            </a>
          </div>
          <div className="text-end">
            <a href="#" className="text-decoration-none d-block small mb-1">
              Redeem gift card or promo code
            </a>
            <a href="#" className="text-decoration-none d-block small">
              Where to buy gift cards
            </a>
          </div>
        </Col>
      </Row>

      <hr className="opacity-25" />

      {/* --- PLAN DETAILS --- */}
      <Row className="mb-4 text-start">
        <Col md={4} className="text-secondary fw-bold small mb-2">
          PLAN DETAILS
        </Col>
        <Col md={8} className="d-flex justify-content-between">
          <div>
            <span className="fw-bold">Premium</span>
            <span className="ms-2 border border-white px-1 small fw-bold">
              ULTRA HD
            </span>
          </div>
          <a href="#" className="text-decoration-none">
            Change plan
          </a>
        </Col>
      </Row>

      <hr className="opacity-25" />

      {/* --- SETTINGS --- */}
      <Row className="mb-4 text-start">
        <Col md={4} className="text-secondary fw-bold small mb-2">
          SETTINGS
        </Col>
        <Col md={8}>
          <div className="mb-1">
            <a href="#" className="text-decoration-none">
              Parental Controls
            </a>
          </div>
          <div className="mb-1">
            <a href="#" className="text-decoration-none">
              Test participation
            </a>
          </div>
          <div className="mb-1">
            <a href="#" className="text-decoration-none">
              Manage download devices
            </a>
          </div>
          <div className="mb-1">
            <a href="#" className="text-decoration-none">
              Activate a device
            </a>
          </div>
          <div className="mb-1">
            <a href="#" className="text-decoration-none">
              Recent device streaming activity
            </a>
          </div>
          <div className="mb-1">
            <a href="#" className="text-decoration-none">
              Sign out of all devices
            </a>
          </div>
        </Col>
      </Row>

      <hr className="opacity-25" />

      <Row className="mb-4 text-start">
        <Col md={4} className="text-secondary fw-bold small mb-2">
          MY PROFILE
        </Col>
        <Col md={8}>
          <div className="d-flex justify-content-between align-items-center mb-3">
            <div className="d-flex align-items-center">
              <Image src="/avatar.png" width={35} className="rounded me-2" />
              <span className="fw-bold">Strive Student</span>
            </div>
            <div>
              <a
                href="#"
                className="text-decoration-none d-block small mb-1 text-end"
              >
                Manage profiles
              </a>
              <a
                href="#"
                className="text-decoration-none d-block small text-end"
              >
                Add profile email
              </a>
            </div>
          </div>

          <Row>
            <Col sm={6}>
              <div className="mb-1">
                <a href="#" className="text-decoration-none small">
                  Language
                </a>
              </div>
              <div className="mb-1">
                <a href="#" className="text-decoration-none small">
                  Playback settings
                </a>
              </div>
              <div className="mb-1">
                <a href="#" className="text-decoration-none small">
                  Subtitle Appearance
                </a>
              </div>
            </Col>
            <Col sm={6}>
              <div className="mb-1">
                <a href="#" className="text-decoration-none small">
                  Viewing activity
                </a>
              </div>
              <div className="mb-1">
                <a href="#" className="text-decoration-none small">
                  Ratings
                </a>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>

      <Row className="d-md-none mb-5">
        <Col xs={12}>
          <Button variant="light" className="rounded-0 w-100 fw-bold">
            Cancel Membership
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Settings;
