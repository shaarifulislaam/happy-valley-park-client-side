import React, { useState, useEffect } from "react";
import { Row, Spinner } from "react-bootstrap";
import Service from "../Service/Service";

const Services = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("https://still-ridge-26061.herokuapp.com/services/")
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
        setLoading(false);
      });
  }, []);
  return (
    <div id="services">
      <h1 className=" mt-sm-5 text-center my-4 custom-title-margin">
        Our Services
      </h1>
      <Row
        xs={1}
        md={2}
        xl={3}
        className="g-3 container-lg  mx-lg-auto mx-md-auto mx-0"
      >
        {loading ? (
          <Spinner className="text-center mx-auto" animation="border" />
        ) : (
          services.map((service) => (
            <Service key={service._id} service={service}></Service>
          ))
        )}
      </Row>
    </div>
  );
};

export default Services;
