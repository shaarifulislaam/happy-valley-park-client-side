import React from "react";
import FAQ from "../../FAQ/FAQ";
import AboutUs from "../aboutUs/AboutUs";
import Attractions from "../Attractions/Attractions";
import Banner from "../Banner/Banner";
import Services from "../Services/Services";
import Team from "../Team/Team";

const Home = () => {
  return (
    <div id="home">
      <Banner></Banner>
      <Services></Services>
      <AboutUs></AboutUs>
      <Attractions></Attractions>
      <Team></Team>
      <FAQ></FAQ>
    </div>
  );
};

export default Home;
