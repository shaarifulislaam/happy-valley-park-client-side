import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import food from "../../../images/attractions/food.png";
import village from "../../../images/attractions/village.png";
import picnic from "../../../images/attractions/picnic.png";
import "./Attraction.css";

const Attractions = () => {
  return (
    <div id="attractions" className="container">
      <h1 className="text-center  fw-bolder mt-5">Other Attractions</h1>

      <Row xs={1} md={6} lg={3} className="g-4">
        <Col>
          <Card>
            <Card.Img variant="top" src={food} />
            <Card.Body className="bg-primary text-white custom-height">
              <Card.Text className="cart-text px-2">FOODS</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img variant="top" src={village} />
            <Card.Body className="bg-info text-white  custom-height">
              <Card.Text className="cart-text px-2">
                BOOK <br /> VILLAGE
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img variant="top" src={picnic} />
            <Card.Body className="bg-dark text-white  custom-height">
              <Card.Text className="cart-text px-2">
                BOOK <br /> PICNIC
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Attractions;
