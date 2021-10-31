import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import member1 from "../../../images/team/team-1.png";
import member2 from "../../../images/team/team-2.png";
import member3 from "../../../images/team/team-3.png";
import member4 from "../../../images/team/team-4.png";
const Team = () => {
  return (
    <div>
      <h1 className="text-center mt-5 fw-bolder ">Meet the Team</h1>
      <Container>
        <Row className="mx-auto text-center">
          <Col sm={12} md={6} lg={3}>
            <div>
              <img src={member1} alt="" />
              <h3 className="mt-3">Polash Ahmed</h3>
              <p className="my-2 text-secondary fs-5">Tour Manager</p>
            </div>
          </Col>
          <Col sm={12} md={6} lg={3}>
            <div>
              <img src={member2} alt="" />
              <h3 className="mt-3">Mehrub Opi</h3>
              <p className="my-2 text-secondary fs-5">Instructor</p>
            </div>
          </Col>
          <Col sm={12} md={6} lg={3}>
            <div>
              <img src={member3} alt="" />
              <h3 className="mt-3">Sujon hossain</h3>
              <p className="my-2 text-secondary fs-5">Safe Guard</p>
            </div>
          </Col>
          <Col sm={12} md={6} lg={3}>
            <div>
              <img src={member4} alt="" />
              <h3 className="mt-3">Tohedul Islam</h3>
              <p className="my-2 text-secondary">Swimming Instructor</p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Team;
