import React from "react";
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

            {user?.email && (
              <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  Booking
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item as={Link} to="/addService">
                    {" "}
                    Add Service
                  </Dropdown.Item>
                  <Dropdown.Item as={Link} to="/myBooking">
                    {" "}
                    My Booking
                  </Dropdown.Item>
                  <Dropdown.Item as={Link} to="/manageBooking">
                    {" "}
                    Manage Booking
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            )}

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
