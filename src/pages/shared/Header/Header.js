import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
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
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>

          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-center align-items-center">
            <Nav.Link as={HashLink} to="/home#home">
              Home
            </Nav.Link>
            <Nav.Link as={HashLink} to="/home#about">
              About Us
            </Nav.Link>
            <Nav.Link as={HashLink} to="/home#services">
              Our Services
            </Nav.Link>
            <Nav.Link as={HashLink} to="/contact">
              Contact
            </Nav.Link>
            <Nav.Link as={HashLink} to="/addService">
              Add Service
            </Nav.Link>
            <Nav.Link as={HashLink} to="/myBooking">
              My Booking
            </Nav.Link>
            <Nav.Link as={HashLink} to="/manageBooking">
              Manage Booking
            </Nav.Link>

            {user?.email ? (
              <Button onClick={logOut} variant="light">
                LogOut
              </Button>
            ) : (
              <Nav.Link as={Link} to="/login" className="navbar">
                Login
              </Nav.Link>
            )}

            <Navbar.Text>
              Signed in as: <a href="#login">{user?.displayName}</a>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
