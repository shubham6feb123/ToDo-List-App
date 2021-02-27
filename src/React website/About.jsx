import React from "react";
import { NavLink } from "react-router-dom";
import Common from "./Common";

const About = () => {
    const web = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAMXmuSRAHa6eZM43SIGMVJ82O1oUv154JSw&usqp=CAU'
  return (
    <>
      <Common
        name="Welcome to About page"
        imgsrc={web}
        visit="/contact"
        btname="Contact Now"
      />
    </>
  );
};

export default About;
