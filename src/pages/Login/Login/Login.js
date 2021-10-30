import React from "react";
import { Button } from "react-bootstrap";
import { useHistory, useLocation } from "react-router";
import useAuth from "../../../hook/useAuth/useAuth";

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
    <div className="text-center mx-auto mt-5">
      <h1 className="text-center">Login to your account</h1>
      <Button onClick={handleGoogleSign} variant="primary px-4" size="lg">
        Login With Google
      </Button>{" "}
    </div>
  );
};

export default Login;
