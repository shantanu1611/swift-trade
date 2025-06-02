import React from "react";
import Hero from "./Hero";
import Award from "./Award";
import Stats from "./Stats";
import Pricing from "./Pricing";
import Education from "./Education";
import OpenAccount from "../OpenAccount";
import NavBar from "../Navbar";
import Footer from "../Footer";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Award />
      <Stats />
      <Pricing />
      <Education />
      <OpenAccount />
    </>
  );
}
