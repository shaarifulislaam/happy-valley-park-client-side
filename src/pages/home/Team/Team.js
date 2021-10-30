import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import member1 from "../../../images/team/1.png";
import member2 from "../../../images/team/1.png";
import member3 from "../../../images/team/1.png";
import member4 from "../../../images/team/1.png";
const Team = () => {
  return (
    <div>
      <h1 className="text-center mt-5">Meet the Team</h1>
      <Container>
        <Row>
          <Col xs={12} md={6} lg={3}>
            <div>
              <img src={member1} alt="" />
              <h3 className="mt-3">Dadiv Green</h3>
              <p className="my-2">Tour Manager</p>
            </div>
          </Col>
          <Col xs={12} md={6} lg={3}>
            <div>
              <img src={member2} alt="" />
              <h3 className="mt-3">Dadiv Green</h3>
              <p className="my-2">Instructor</p>
            </div>
          </Col>
          <Col xs={12} md={6} lg={3}>
            <div>
              <img src={member3} alt="" />
              <h3 className="mt-3">Dadiv Green</h3>
              <p className="my-2">Safe Guard</p>
            </div>
          </Col>
          <Col xs={12} md={6} lg={3}>
            <div>
              <img src={member4} alt="" />
              <h3 className="mt-3">Dadiv Green</h3>
              <p className="my-2">Swimming Instructor</p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Team;
