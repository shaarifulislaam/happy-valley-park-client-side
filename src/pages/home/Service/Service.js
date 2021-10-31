import React from "react";
import { Card, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./service.css";

const Service = ({ service }) => {
  const { _id, name, price, description, img } = service;
  return (
    <div>
      <Col>
        <Card className="rounded-4 shadow">
          <Card.Img variant="top" src={img} />
          <Card.Body>
            <Card.Title className="fw-bold service-title">{name}</Card.Title>
            <div className="description">
              <Card.Text className="custom-text">
                {description.slice(0, 160)}
              </Card.Text>
            </div>
            <p className="service-price">Fee : {price} BDT</p>
          </Card.Body>
          <Card.Footer className="border border-0 bg-white">
            <Link to={`/serviceDetails/${_id}`}>
              <Button variant="primary  custom-btn ">Book Now</Button>
            </Link>
          </Card.Footer>
        </Card>
      </Col>
    </div>
  );
};

export default Service;
