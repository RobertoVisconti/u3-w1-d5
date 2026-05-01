import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";

import {
  Search,
  Bell,
  Pencil,
  PersonBoundingBox,
  Person,
  Gear,
  QuestionCircle,
} from "react-bootstrap-icons";

const MyNavbar = () => {
  return (
    <Navbar
      expand="lg"
      bg="dark"
      variant="dark"
      fixed="top"
      data-bs-theme="dark"
    >
      <Container fluid>
        <Navbar.Brand href="#">
          <img
            src="/netflix_logo.png"
            alt="Netflix Logo"
            width="100"
            height="40"
          />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbarSupportedContent" />

        <Navbar.Collapse id="navbarSupportedContent">
          {/* Menu Principale (Sinistra) */}
          <Nav className="me-auto mb-2 mb-lg-0">
            <Nav.Link href="#" className="text-white fw-bold">
              Home
            </Nav.Link>
            <Nav.Link href="#" className="text-white">
              Series
            </Nav.Link>
            <Nav.Link href="#" className="text-white">
              Films
            </Nav.Link>
            <Nav.Link href="#" className="text-white">
              Games
            </Nav.Link>
            <Nav.Link href="#" className="text-white">
              New and popular
            </Nav.Link>
            <Nav.Link href="#" className="text-white">
              My list
            </Nav.Link>
            <Nav.Link href="#" className="text-white">
              Browse by language
            </Nav.Link>
          </Nav>

          {/* Menu Utente (Destra) */}
          <div className="d-flex align-items-center justify-content-end">
            <Search
              className="text-white me-3"
              style={{ cursor: "pointer" }}
              size={18}
            />

            <span
              className="text-white me-3"
              style={{ cursor: "pointer", fontSize: "0.9rem" }}
            >
              Kids
            </span>

            <Bell
              className="text-white me-3"
              style={{ cursor: "pointer" }}
              size={18}
            />

            {/* Dropdown Profilo */}
            <NavDropdown
              title={
                <img
                  src="/avatar.png"
                  alt="Avatar"
                  width="32"
                  height="32"
                  className="rounded"
                />
              }
              id="profile-dropdown"
              align="end"
            >
              <NavDropdown.Item href="#" className="d-flex align-items-center">
                <img
                  src="/kids_icon.png"
                  width="25"
                  height="25"
                  alt="Kids"
                  className="me-2"
                />
                <span>Kids</span>
              </NavDropdown.Item>

              <NavDropdown.Item
                href="./profile.html"
                className="d-flex align-items-center"
              >
                <Pencil className="me-2" size={16} />
                <span>Manage Profile</span>
              </NavDropdown.Item>

              <NavDropdown.Item href="#" className="d-flex align-items-center">
                <PersonBoundingBox className="me-2" size={16} />
                <span>Transfer Profile</span>
              </NavDropdown.Item>

              <NavDropdown.Item href="#" className="d-flex align-items-center">
                <Person className="me-2" size={16} />
                <span>Account</span>
              </NavDropdown.Item>

              <NavDropdown.Item
                href="./settings.html"
                className="d-flex align-items-center"
              >
                <Gear className="me-2" size={16} />
                <span>Settings</span>
              </NavDropdown.Item>

              <NavDropdown.Item href="#" className="d-flex align-items-center">
                <QuestionCircle className="me-2" size={16} />
                <span>Help Center</span>
              </NavDropdown.Item>

              <NavDropdown.Divider />

              <NavDropdown.Item href="#">Logout Netflix</NavDropdown.Item>
            </NavDropdown>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
