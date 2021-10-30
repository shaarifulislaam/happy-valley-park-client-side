import React from "react";
import "./Header.css";
import {
  Button,
  Container,
  Dropdown,
  Image,
  Nav,
  Navbar,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import useAuth from "../../../hook/useAuth/useAuth";
import logo from "../../../images/logo/Happy Valley Park-logos.jpeg";

const Header = () => {
  const { user, logOut } = useAuth();

  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Container>
          <Navbar.Brand as={HashLink} to="/home">
            <img
              src={logo}
              width="80"
              height="50"
              className="d-inline-block align-top"
              alt="Happy Valley logo"
            />
          </Navbar.Brand>

          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-center align-items-center">
            <Nav.Link as={HashLink} to="/home#home" className="navbar">
              Home
            </Nav.Link>
            <Nav.Link as={HashLink} to="/home#about" className="navbar">
              About Us
            </Nav.Link>
            <Nav.Link as={HashLink} to="/home#services" className="navbar">
              Our Services
            </Nav.Link>
            <Nav.Link as={HashLink} to="/home#attractions" className="navbar">
              Attraction
            </Nav.Link>
            <Nav.Link as={HashLink} to="/contact" className="navbar">
              Contact
            </Nav.Link>

            {user?.email && (
              <Dropdown>
                <Dropdown.Toggle
                  variant="success"
                  id="dropdown-basic"
                  className="navbar"
                >
                  Booking
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item as={Link} to="/addService" className="navbar">
                    {" "}
                    Add Service
                  </Dropdown.Item>
                  <Dropdown.Item as={Link} to="/myBooking" className="navbar">
                    {" "}
                    My Booking
                  </Dropdown.Item>
                  <Dropdown.Item
                    as={Link}
                    to="/manageBooking"
                    className="navbar"
                  >
                    {" "}
                    Manage Booking
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            )}

            {user?.email ? (
              <Button onClick={logOut} variant="light" className="navbar">
                LogOut
              </Button>
            ) : (
              <Nav.Link as={Link} to="/login" className="navbar">
                Login
              </Nav.Link>
            )}

            <Navbar.Text>
              <Nav.Link as={Link} to="/login" className="navbar">
                {user?.displayName}
              </Nav.Link>
            </Navbar.Text>
            {user?.email && (
              <Image
                className=""
                style={{ height: "50px", width: "50px" }}
                src={user?.photoURL}
                roundedCircle
              />
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
