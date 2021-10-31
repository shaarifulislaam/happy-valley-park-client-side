import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Image } from "react-bootstrap";
import logo from "../../../images/logo/Happy Valley Park-logos.jpeg";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer-container mt-3">
      <Container>
        <Row>
          <Col xs={12} md={6} lg={3}>
            <div className="mt-5">
              <Image height="100px" src={logo} />
              <div className="all-icon">
                <Link to="https://www.facebook.com/">
                  <i className="fab fa-facebook"></i>
                </Link>
                <Link to="https://www.instagram.com/">
                  <i className="fab fa-instagram"></i>
                </Link>
                <Link to="https://twitter.com/home">
                  {" "}
                  <i className="fab fa-twitter"></i>
                </Link>
                <Link to="https://www.youtube.com/">
                  <i className="fab fa-youtube"></i>
                </Link>
              </div>
            </div>
          </Col>
          <Col xs={12} md={6} lg={3}>
            <div className="mt-5 footer-text ">
              <h4 className="fw-bolder mb-4">Hours</h4>
              <h6>
                Friday-Saturday <br />
                (9:30 am - 7:00 pm)
              </h6>
              <br />
              <h6>
                Monday-Thursday <br />
                (10:00 am - 7:00 pm)
              </h6>
            </div>
          </Col>
          <Col xs={12} md={6} lg={3}>
            <div className="mt-5 footer-text ">
              <h4 className="fw-bolder mb-4">Contact</h4>
              <h6>Info Desk</h6>
              <p>
                <span>
                  <i class="fas fa-envelope"></i>
                </span>{" "}
                info@happyvalleypark.com
              </p>
              <p>
                <span>
                  <i class="fas fa-phone"></i>
                </span>{" "}
                0170000000
              </p>
              <h5>Call Center</h5>
              <p>
                <span>
                  <i class="fas fa-phone"></i>
                </span>{" "}
                0170000000
              </p>
            </div>
          </Col>
          <Col xs={12} md={6} lg={3}>
            <div className="mt-5 footer-text ">
              <h4 className="fw-bolder mb-4">Address</h4>
              <h6>Park Location</h6>
              <p>
                <span>
                  <i class="fas fa-map-marker-alt"></i>
                </span>{" "}
                Sultan Highway , Dhaka , BanglaDesh
              </p>
              <h6>Corporate Location</h6>
              <p>
                {" "}
                <span>
                  <i class="fas fa-map-marker-alt"></i>
                </span>{" "}
                House:412(4th floor) Road:09 Dhaka Bangladesh
              </p>
            </div>
          </Col>
        </Row>
        <p className="text-center pb-3 footer">
          <small>© 2021. Happy Valley Park.</small>
        </p>
      </Container>
    </div>
  );
};

export default Footer;
