import React from "react";
import { Link } from "react-router-dom";
import errorImg from "../../images/404/error.png";
import "./notFound.css";

const Notfound = () => {
  return (
    <div className="mx-auto text-center my-4">
      <img className="img-fluid" src={errorImg} alt="" />
      <br />
      <Link to="/home">
        {" "}
        <button className="btn btn-secondary my-5">Go Back Home</button>
      </Link>
    </div>
  );
};

export default Notfound;
