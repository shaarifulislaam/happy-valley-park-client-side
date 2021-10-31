import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import aboutImg from "../../../images/about/about.png";
import "./about.css";

const AboutUs = () => {
  return (
    <div id="about" className="about-container">
      <h1 className="text-center fw-bolder my-3 pt-3">About Us</h1>
      <Container className="about-details rounded-3">
        <Row>
          <Col sm={12} md={6} lg={6}>
            <img className="img-fluid" src={aboutImg} alt="" />
          </Col>
          <Col sm={12} md={6} lg={6}>
            <div className="mx-3 mt-3">
              <h1 className="p-3">
                Memories <br />
                with family <br />
                and fun.
              </h1>
              <p className="px-3 custom-text">
                We seek adventure where others only dream. We are bound together
                by our desire to provide our guests with quality family
                time.When the whole family is involved in planning fun
                activities, you'll have more . bonding into a lifetime of funny,
                sweet stories and lasting memories.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AboutUs;
