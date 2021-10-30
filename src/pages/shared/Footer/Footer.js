import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Image } from "react-bootstrap";
import logo from "../../../images/logo/Happy Valley Park-logos.jpeg";
import "./footer.css";

const Footer = () => {
  return (
    <div className="text-white bg-dark mt-3">
      <Container>
        <Row>
          <Col xs={12} md={6} lg={3}>
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
          </Col>
          <Col xs={12} md={6} lg={3}>
            <h4>Hours</h4>
            <h6>
              Friday-Saturday <br />
              (9:30 am - 7:00 pm)
            </h6>
            <h6>
              Monday-Thursday <br />
              (10:00 am - 7:00 pm)
            </h6>
          </Col>
          <Col xs={12} md={6} lg={3}>
            <h4>Contact</h4>
            <h6>Info Desk</h6>
            <p>info@happyvallypark.com</p>
            <p>0170000000</p>
            <h5>Call Center</h5>
            <p>0170000000</p>
          </Col>
          <Col xs={12} md={6} lg={3}>
            <h4>Address</h4>
            <h6>Park Location</h6>
            <p>Sultan Highway , Dhaka , BanglaDesh</p>
            <h6>Corporate Location</h6>
            <p>House:412(4th floor) Road:09 Dhaka Bangladesh</p>
          </Col>
        </Row>
      </Container>
      <p className="text-center pb-4 mt-2">
        <small>© sharifulmamun7@gmail.com</small>
      </p>
    </div>
  );
};

export default Footer;
