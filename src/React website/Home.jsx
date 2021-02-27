import React from "react";
import { NavLink } from "react-router-dom";
import Common from "./Common";

const Home = () => {
    const web = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXV-GLBAtmMjdWj4k_PtlB23b07I2GLCxIjg&usqp=CAU'
  return (
    <>
      <Common
        name="Grow your bussiness with"
        imgsrc={web}
        visit="/contact"
        btname="Get Started"
      />
    </>
  );
};

export default Home;
