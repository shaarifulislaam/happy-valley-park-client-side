import React from "react";
import { Button, Image } from "react-bootstrap";
import { useHistory, useLocation } from "react-router";
import useAuth from "../../../hook/useAuth/useAuth";
import googleIcon from "../../../images/google.png";
import "./login.css";

const Login = () => {
  const { signInUsingGoogle, setUser } = useAuth();
  const history = useHistory();
  const location = useLocation();

  const redirect_url = location.state?.from || "/home";

  //handle google sign in
  const handleGoogleSign = () => {
    signInUsingGoogle().then((result) => {
      setUser(result.user);
      history.push(redirect_url);
    });
  };
  return (
    <div className="d-flex justify-content-center align-items-center">
      <div className="login-container d-flex justify-content-center align-items-center ">
        <h1 className="text-center">Login to your account</h1>
        <div className="">
          <Button
            onClick={handleGoogleSign}
            className="custom-btn"
            variant="primary "
            size="lg"
          >
            <span>
              {" "}
              <Image className="" height="40px" src={googleIcon}></Image>
            </span>{" "}
            Login With Google
          </Button>{" "}
          <p className="mt-3 ">
            Don’t have an account?
            <span className="text-primary">
              {" "}
              <u>Create an account</u>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
