import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import img from "../../../images/attractions/attraction.png";
import "./Attraction.css";

const Attractions = () => {
  return (
    <div id="attractions">
      <h1 className="text-center  fw-bolder mt-5">Other Attractions</h1>

      <Row xs={1} md={6} lg={4} className="g-4">
        <Col>
          <Card>
            <Card.Img variant="top" src={img} />
            <Card.Body className="bg-primary text-white custom-height">
              <Card.Text className="cart-text px-2">
                WATER <br /> WORLD
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img variant="top" src={img} />
            <Card.Body className="bg-info text-white  custom-height">
              <Card.Text className="cart-text px-2">
                BOOK <br /> VILLAGE
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img variant="top" src={img} />
            <Card.Body className="bg-dark text-white  custom-height">
              <Card.Text className="cart-text px-2">
                BOOK <br /> PICNIC
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img variant="top" src={img} />
            <Card.Body className="bg-secondary text-white  custom-height">
              <Card.Text className="cart-text px-2">
                PACKAGES <br /> TICKETS
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Attractions;
