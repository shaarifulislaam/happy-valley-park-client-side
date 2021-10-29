import React from "react";
import AboutUs from "../aboutUs/AboutUs";
import Banner from "../Banner/Banner";
import Services from "../Services/Services";

const Home = () => {
  return (
    <div id="home">
      <Banner></Banner>
      <Services></Services>
      <AboutUs></AboutUs>
    </div>
  );
};

export default Home;
