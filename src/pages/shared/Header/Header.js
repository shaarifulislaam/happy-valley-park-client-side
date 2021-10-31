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
      <Navbar
        fixed="top"
        collapseOnSelect
        expand="lg"
        className="header-bg"
        variant="light"
      >
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

          <Navbar.Toggle className="bg-white" />
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
            <Nav.Link as={HashLink} to="/home#contact" className="navbar">
              Contact
            </Nav.Link>

            {user?.email && (
              <Nav.Link as={HashLink} to="/addService" className="navbar">
                Add Service
              </Nav.Link>
            )}

            {user?.email && (
              <Dropdown>
                <Dropdown.Toggle
                  id="dropdown-basic"
                  className="navbar custom-btn"
                >
                  Booking
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item
                    as={Link}
                    to="/myBooking"
                    className="navbar login-text"
                  >
                    {" "}
                    My Booking
                  </Dropdown.Item>
                  <Dropdown.Item
                    as={Link}
                    to="/manageBooking"
                    className="navbar login-text"
                  >
                    {" "}
                    Manage Booking
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            )}

            <Navbar.Text>
              <Nav.Link
                as={Link}
                to="/login"
                variant="light"
                className="navbar text-white"
              >
                {user?.displayName}
              </Nav.Link>
            </Navbar.Text>
            {user?.email && (
              <Image
                className="mx-0"
                style={{ height: "50px", width: "50px" }}
                src={user?.photoURL}
                roundedCircle
              />
            )}

            {user?.email ? (
              <Link to="/login" className="text-decoration-none">
                {" "}
                <Button
                  onClick={logOut}
                  variant="bg-lighter"
                  className="custom-btn mx-2 my-2 navbar login-text2"
                >
                  LogOut
                </Button>
              </Link>
            ) : (
              <Nav.Link as={Link} to="/login" className="navbar custom-btn">
                Login
              </Nav.Link>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
