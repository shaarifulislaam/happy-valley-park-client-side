import React from "react";
import { Card, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Service = ({ service }) => {
  const { _id, name, price, description, img } = service;
  return (
    <div>
      <Col>
        <Card className="rounded-4 shadow">
          <Card.Img variant="top" src={img} />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <div className="description">
              <Card.Text>{description}</Card.Text>
            </div>
            <p>
              <small>Fee : {price} BDT</small>
            </p>
          </Card.Body>
          <Card.Footer className="border border-0 bg-white">
            <Link to={`/myBooking/${_id}`}>
              <Button variant="info w-100 ">Book Now</Button>
            </Link>
          </Card.Footer>
        </Card>
      </Col>
    </div>
  );
};

export default Service;
